import { initialState } from '../../test/initialState'
import { TOGGLE_GALLERY } from '../actions/gallery'
import { SHOW_WORDMAP, HIDE_WORDMAP } from '../actions/wordmap.actions'

const view = (state = initialState.view, action) => {
  switch (action.type) {
    case TOGGLE_GALLERY:
      return Object.assign({}, state, {
        displayGallery: !state.displayGallery
      })
    case SHOW_WORDMAP:
      return Object.assign({}, state, {
        displayWordmap: true
      })
    case HIDE_WORDMAP:
      return Object.assign({}, state, {
        displayWordmap: false
      })
    default:
      return state
  }
}

export default view
