export const GRID_REQUEST = 'GRID_REQUEST';
export const GRID_SUCCESS = 'GRID_SUCCESS';
export const GRID_FAILURE = 'GRID_FAILURE';
export const CLEAR_MEDIA = 'CLEAR_MEDIA';
export const UPDATE_ARTIST = 'UPDATE_ARTIST';

export function requestData() {
  return {
    type: GRID_REQUEST,
    payload: true
  }
}

export function receiveData(grid, data, total_photos) {
  return {
    type: GRID_SUCCESS,
    payload: {
      grid,
      data,
      total_photos
    },
    error: '',
    meta: {
      fetching: false
    }
  }
}

export function catchData(error) {
  return {
    type: GRID_FAILURE,
    error,
    meta: {
      fetching: false
    }
  }
}

export function clearMedia() {
  return {
    type: CLEAR_MEDIA
  }
}

export function updateArtist(artist) {
  return {
    type: UPDATE_ARTIST,
    payload: {
      id: artist.id,
      username: artist.username,
      name: artist.name,
      email: artist.email,
      website: artist.website,
      facebook_url: artist.facebook,
      twitter_url: artist.twitter,
      avatar: artist.avatar,
      media: artist.media,
      about: artist.about
    }
  }
}

export function loadData(id, artist, page, search) {
  let params = {
    method: 'GET',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }
  console.log('id, artist, page: ', id, artist, page);
  if (artist) {
    var endpoint = `/api/artist?user=${id}&artist=${artist}&page=${page}`;
  } else {
    var endpoint = `/api/media?user=${id}&page=${page}`;
  }
  console.log('endpoint: ', endpoint);
  return dispatch => {
    if (page === 0) {
      dispatch(clearMedia());
    }

    dispatch(requestData());

    return fetch(`http://${window.location.hostname}:${window.location.hostname === '54.153.9.57' ? '80' : '8000'}${endpoint}`, params)
    .then(response => {
      if (response.status >= 400) {
        dispatch(catchData(data.message))
        return Promise.reject(data)
      }
      return response.json()
    })
    .then(res => {
      var grid = []
      var data = {}
      if (artist) { 
        dispatch(updateArtist(res.rows[0].artist[0]));
      }
      res.rows[artist ? 1 : 0].data.forEach((image) => {
        grid.push(image.media_id);
        data[image.media_id] = {
          media_id: image.media_id,
          title: image.title,
          media: image.media,
          description: image.description,
          width: image.width,
          height: image.height,
          url_sm: image.url_sm,
          url_md: image.url_md,
          url_lg: image.url_lg,
          artist: image.artist,
          tags: image.tags,
          user_feedback_id: image.user_feedback_id,
          feedback: image.feedback
        };
      });
      var total_photos = artist ? res.rows[2].total_records : res.rows[1].count;

      dispatch(receiveData(grid, data, total_photos));
    })
    .catch(err => {
      console.error(`Network failure prevented data retrieval: ${err}`)
      throw new Error(`Network failure prevented data retrieval: ${err}`)
    })
  }
}