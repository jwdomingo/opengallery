const Promise = require('bluebird')
const jimp = require('jimp')
const fs = require('fs')

const Media = require('../models/media')

//helper functions
const separateData = (data) => {
  //not sure how req.body will come in
  var photoData = {
    PGupload: data.photoInfo,
    s3upload: data.photoRaw
  }
  return photoData
}

const resizePhoto = ({ buffer, mimetype }, size, quality) => {
  return jimp.read(buffer)
  .then(image => {
    return new Promise(function(resolve, reject) {
      image.clone().resize(size, jimp.AUTO).quality(quality)
      .getBuffer(mimetype, (err, buffer) => {
        if (err) {
          console.error(`Error parsing Jimp buffer to ${mimetype}: ${err}`)
          reject(`Error parsing Jimp buffer to ${mimetype}: ${err}`)
        } else {
          resolve(buffer)
        }
      })
    })
  })
  .catch(err => {
    console.error(`Error reading image buffer: ${err}`)
    throw new Error(`Error reading image buffer: ${err}`)
  })
}

//controller handles function delegation
exports.getPhotos = function (req, res) {
  Media.retrievePhotosFromPG()
  .then((photos) => {
    console.log("Success retrieving photos");

    res.status(200).json(photos);
  })
  .catch((err) => {
    console.log("Error retrieving photos", err);
    res.status(404).send();
  });
}

exports.uploadPhoto = function (req, res) {

  var responseObject = {
    id: null,
    user_id: 5,
    url_small: '', //resizedPhotos.small
    url_med: '',
    url_large: '',
    title: '', // photo.PGupload.title
    description: 'GOT IT' // photo.PGupload.description
  }

  if (req.file) {
    resizePhoto(req.file, 25, 0)
    .then( buffer => {
      responseObject.url_small = new Buffer(buffer).toString('base64')
      return resizePhoto(req.file, 800, 0)
    })
    .then( mediumBuffer => {
      Media.uploadToPG(req.body)
      .then((id) => {
        responseObject.id = id.rows[0].id;
        var urlExtMedium = responseObject.id + 'medium';
        var urlExtLarge = responseObject.id + 'large';
        responseObject.url_med = ('http://d14shq3s3khz77.cloudfront.net/' + urlExtMedium);
        responseObject.url_large = ('http://d14shq3s3khz77.cloudfront.net/' + urlExtLarge);

        new Promise.all([
          Media.uploadToS3(urlExtLarge, req.file.buffer), Media.uploadToS3(urlExtMedium, mediumBuffer)
        ])
        .then((url) => {
          Media.updatePGphotoUrls([responseObject.url_med, responseObject.url_large], responseObject.id) // urlsArr initiated above
          .then(() => {
            res.status(201).json(responseObject);
          })
          .catch((err) => {
            console.log('error updating URLs to PG db', err);
          });
        })
        .catch((err) => {
          console.log('error uploading images to s3 db', err)
        });
      })
      .catch((err) => {
        console.log('Error uploading metaData to PostgreSQL', err);
      });
    })
    .catch( err => {
      // check the type of error that was caught and display proper message
      console.error(`Error resizing photo: ${err}`)
      reject(`Error resizing photo: ${err}`)
    })
  }

  //parse data to separate photodata from photo
  // var photo = separateData(req.body);
  // console.log("Request files line 82 of media controllers: ", req.file);
  // clone photos and turn into buffers for upload
  // var resizedPhotos = resizePhoto(photo.s3upload);
  // console.log("resizedPhotos object-boolean line 86 of media controllers: ", !!resizedPhotos);
  // update PG upload object to include small photo buffer
  // photo.PGupload.url_small = resizedPhotos.small;

};
