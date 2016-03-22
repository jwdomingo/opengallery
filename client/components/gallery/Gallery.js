import React from 'react'
import { Motion, spring } from 'react-motion'
import Tile from '../tile/Tile'
import GalleryTile from './GalleryTile'

const config = {stiffness: 170, damping: 26}

export default class Gallery extends React.Component {
  componentDidMount () {
    document.addEventListener('keydown', this.navigateGallery)
    // disable scrolling
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.navigateGallery)
    // enable scrolling
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.displayGallery;
  }

  navigateGallery = ({ keyCode }) => {
    // Add debounce function
    if (keyCode === 27 || keyCode > 36 && keyCode < 41) {
      const { nextTile, prevTile, hideGallery } = this.props
      switch (keyCode) {
        case 37: // left arrow
          prevTile()
          break
        case 39: // right arrow
          nextTile()
          break
        case 27: // esc key
          hideGallery(0)
          break
        default:
        return
      }
    }
  }

  render () {
    const { tile, grid, data, hideGallery } = this.props
    const tileWidth = data[grid[tile]].width
    const tileHeight = data[grid[tile]].height
    const tilePhoto = data[grid[tile]].url_lg || data[grid[tile]].url_md

    const widths = grid.map(i => tileHeight / data[i].height * data[i].width)

    const start = widths.slice(0, tile)
    .reduce((sum, width) => sum - width, 0);

    let gallery = []
    grid.reduce((left, undefined, i) => {
      gallery.push({
        left: spring(left, config),
        height: spring(tileHeight, config),
        width: spring(widths[i], config),
      })
      return left + widths[i]
    }, start)

    return (
      <div id="gallery-component" onClick={() => hideGallery(tile)}>
        <Motion style={{height: spring(tileHeight), width: spring(tileWidth)}}>
          {container =>
            <div className="gallery-tile" style={container}>
              {gallery.map((style, i) =>
                <Motion key={data[grid[i]].mediaId} style={style}>
                  {style =>
                    <Tile url={data[grid[i]].url_lg} data={data[grid[i]]} style={style} handleClick={() => hideGallery(tile)}>
                      <GalleryTile data={data[grid[i]]}/>
                    </Tile>
                  }
                </Motion>
              )}
            </div>
          }
        </Motion>
      </div>
    )
  }
}
