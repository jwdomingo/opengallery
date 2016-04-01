import messageModal from '../components/messageFeed/messageModal'
import { connect } from 'react-redux'
import  { toggleMessageModal, submitMessage } from '../actions/messageFeed.actions'

const mapStateToProps = (state, props) => {
  return {
    messages: state.messageFeed.messages,
    person_id: state.messageFeed.person_id,
    person_name: state.messageFeed.person_name,
    displayMessageModal: state.view.displayMessageModal,
    username: state.user.username,
    id: state.user.id,
    currentConversation: state.messageFeed.currentConversation,
    person_username: state.messageFeed.person_username,
    textModalField: state.form.messageModal,
    hideConversationsInMessageModal: state.view.hideConversationsInMessageModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMessageModal: () => {
      dispatch(toggleMessageModal());
    },
    submitMessage: (user1_id, user2_id, message, createdAt, currentConversation) => {
      dispatch(submitMessage(user1_id, user2_id, message, createdAt, currentConversation));
      dispatch({type: 'CLEAR_MESSAGE_MODAL_TEXT_FIELD'})
    },
    editInput: value => {
      dispatch({
        type: 'MESSAGE_MODAL_FIELD',
        payload: { input: value }
      })
    },
    toggleConversations: () => {
      dispatch({
        type: 'TOGGLE_CONVERSATIONS'
      })
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(messageModal)

export default container;
