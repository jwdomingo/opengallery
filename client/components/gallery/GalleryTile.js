import React from 'react'

const GalleryTile = ({ data }) => {
  return (
    <div className="galleryTile-component">
      <div className="overlay"></div>
      <div className="corner-overlay-content">Info</div>
      <div className="overlay-content">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default GalleryTile
