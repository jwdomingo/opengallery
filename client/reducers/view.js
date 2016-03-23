import { initialState } from '../../test/initialState'
import { TOGGLE_GALLERY } from '../actions/gallery'
import { TOGGLE_WORDMAP } from '../actions/wordmap.actions'

const view = (state = initialState.view, action) => {
  switch (action.type) {
    case TOGGLE_GALLERY:
      return Object.assign({}, state, {
        displayGallery: !state.displayGallery
      })
    case TOGGLE_WORDMAP:
      return Object.assign({}, state, {
        displayWordmap: !state.displayWordmap
      })
    default:
      return state
  }
}

export default view
