import { connect } from 'react-redux'
import * as gallery from '../actions/gallery'
import Gallery from '../components/gallery/Gallery'

const mapStateToProps = (state, ownProps) => {
  return {
    tile: state.media.tile,
    grid: state.media.grid,
    filter: state.media.filter,
    data: state.media.data,
    dictionary: state.media.dictionary,
    displayGallery: state.view.displayGallery
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    nextTile: () => { dispatch(gallery.nextTile()) },
    prevTile: () => { dispatch(gallery.prevTile()) },
    hideGallery: (tile) => { dispatch(gallery.toggleView(tile)) }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)

export default container
