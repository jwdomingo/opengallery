import { connect } from 'react-redux'
import * as gallery from '../actions/gallery'
import * as wordmap from '../actions/wordmap.actions'
import Gallery from '../components/gallery/Gallery'

const mapStateToProps = (state, ownProps) => {
  return {
    tile: state.media.tile,
    grid: state.media.grid,
    filter: state.media.filter,
    data: state.media.data,
    dictionary: state.media.dictionary,
    displayGallery: state.view.displayGallery,
    displayWordmap: state.view.displayWordmap
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    nextTile: () => { dispatch(gallery.nextTile()) },
    prevTile: () => { dispatch(gallery.prevTile()) },
    hideGallery: (tile) => { dispatch(gallery.toggleView(tile)) },
    showWordmap: () => { dispatch(wordmap.show()) },
    hideWordmap: () => { dispatch(wordmap.hide()) }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)

export default container
