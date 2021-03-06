import {connect} from 'react-redux';
import UsersList from '../components/UsersList';

/**
 * ModelView for UsersList component. Contains properties and event handlers
 * for component with the same name
 */

/**
 * Function which maps state properties to component properties
 * @param state: Link to application state
 * @returns Array of properties, which component can use inside "this.props"
 */
const mapStateToProps = function(state) {
    return {
    }
}

/**
 * Function which contains all event handler functions for component.
 * @param dispatch: Link to "dispatch" function, which used to send actions to Redux reducer
 * @returns: Array of methods, which component can use in "this.props"
 */
const mapDispatchToProps = function(dispatch) {
    return {
    }
}

// exporting wrapper for component, which contains mapped properties and methods
export default connect(mapStateToProps,mapDispatchToProps)(UsersList);
