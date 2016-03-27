import { initialState } from '../../test/initialState'
import { GRID_FILTER, GRID_REQUEST, GRID_SUCCESS, GRID_FAILURE } from '../actions/grid'
import { SHOW_NEXT, SHOW_PREV, TOGGLE_GALLERY } from '../actions/gallery'

let startingState = initialState.media
if (window) {
  let prevState = localStorage['my-save-key'] ? JSON.parse(localStorage['my-save-key']) : undefined
  startingState = prevState ? prevState.media : initialState.media
}

const media = (state = startingState, action) => {
  const len = state.grid.length
  const idx = state.tile

  switch (action.type) {
    case GRID_SUCCESS:
      return Object.assign({}, state, {
        grid: action.payload.grid,
        data: action.payload.data,
        page: state.page + 1
      })
    case TOGGLE_GALLERY:
      return Object.assign({}, state, {
        tile: action.payload
      })
    case SHOW_NEXT:
      return Object.assign({}, state, {
        tile: idx + 1 >= len ? len - 1 : idx + 1
      })
    case SHOW_PREV:
      return Object.assign({}, state, {
        tile: idx - 1 < 0 ? 0 : idx - 1
      })
    default:
      return state
  }
}

export default media
