import React from 'react'
import Tile from '../tile/Tile'
import GridTile from './GridTile'

import GridList from 'material-ui/lib/grid-list/grid-list'

const Grid = ({ tile, grid, data, loadGrid, toggleGallery }) => {

  return (
    <div id="grid-component">
      {grid.map((mediaId, index) => (
        <Tile key={mediaId} tile={index} url={data[grid[index]].url_lg} data={data[grid[index]]} handleClick={toggleGallery}/>
      ))}
    </div>
  )
}

export default Grid
