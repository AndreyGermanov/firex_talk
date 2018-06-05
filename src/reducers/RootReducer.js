import applicationActions from '../actions/Application'

/**
 * Root reducer. Used to apply actions of all reducers to application state
 */

/**
 * Global application state
 *
 */
const initialState = {
    // Determines if user logged to program
    isLogin: true,
    // Determines if user clicked on hamburger icon and side menu opened
    isSideMenuOpened: true,
    // Current application screen
    screen: applicationActions.screens.CHAT
}

/**
 * Root reducer function
 * @param state: Current state before change
 * @param action: Action, which should be applied to state
 * @returns new state after apply action
 */
export default function rootReducer(state=initialState,action) {
    var newState = Object.assign({},state);
    const types = applicationActions.actions;
    switch (action.type) {
        case types.CHANGE_IS_LOGIN:
            newState.isLogin = action.value;
            break;
        case types.CHANGE_IS_SIDE_MENU_OPENED:
            newState.isSideMenuOpened = action.value;
            break;
        case types.CHANGE_SCREEN:
            newState.screen = action.value;
    }
    return newState;
}