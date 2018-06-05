import {connect} from 'react-redux';
import MainScreen from '../components/MainScreen';
import actions from '../actions/Application'

/**
 * ModelView for MainScreen component. Contains properties and event handlers
 * for component with the same name
 */

/**
 * Function which maps state properties to component properties
 * @param state: Link to application state
 * @returns Array of properties, which component can use inside "this.props"
 */
const mapStateToProps = function(state) {
    var header = "Chat";
    switch (state.screen) {
        case actions.screens.CHAT:
            header = "Chat";
            break;
        case actions.screens.USER_PROFILE:
            header = "User profile";
            break;
        case actions.screens.SETTINGS:
            header = "Settings";
            break;
    }
    return {
        screen: state.screen,
        header: header
    }
}

/**
 * Function which contains all event handler functions for component.
 * @param dispatch: Link to "dispatch" function, which used to send actions to Redux reducer
 * @returns: Array of methods, which component can use in "this.props"
 */
const mapDispatchToProps = function(dispatch) {
    return {
        hideMenu: function() {
            dispatch(actions.changeIsSideMenuOpened(false));
        }
    }
}

// exporting wrapper for component, which contains mapped properties and methods
export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);
