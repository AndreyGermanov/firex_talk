import {connect} from 'react-redux';
import ChatNavigation from '../components/ChatNavigation';
import actions from '../actions/Application';

/**
 * ModelView for ChatNavigation component. Contains properties and event handlers
 * for component with the same name
 */

/**
 * Function which maps state properties to component properties
 * @param state: Link to application state
 * @returns Array of properties, which component can use inside "this.props"
 */
const mapStateToProps = function(state) {
    return {
        chatMode: state.chatMode
    }
}

/**
 * Function which contains all event handler functions for component.
 * @param dispatch: Link to "dispatch" function, which used to send actions to Redux reducer
 * @returns: Array of methods, which component can use in "this.props"
 */
const mapDispatchToProps = function(dispatch) {
    return {
        changeChatMode: function(mode) {
            dispatch(actions.changeChatMode(mode))
        }
    }
}

// exporting wrapper for component, which contains mapped properties and methods
export default connect(mapStateToProps,mapDispatchToProps)(ChatNavigation);
