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
    // ID of current user
    userId: null,
    // Determines if user clicked on hamburger icon and side menu opened
    isSideMenuOpened: true,
    // Current application screen
    screen: applicationActions.screens.CHAT,
    // Mode of chat screen (Public chat or Private chat)
    chatMode: applicationActions.chatModes.PUBLIC,
    // Current room of public chat
    publicChatRoomId: 0,
    // Mode of private chat screen (either list of users to select for private chat,
    // or chat screen with selected user)
    privateChatMode: applicationActions.privateChatModes.USERS_LIST,
    // Selected user for private chat
    privateChatUserId: 0,
    // Object which contains unread messages counts for each room. Keys of array are rooms. Values are counts
    roomsUnreadMessages: {},
    // Object which contains unread messages from each user. Keys of array are users. Values are counts
    usersUnreadMessages: {},
    // Total number of unread messages in all rooms
    totalRoomsUnreadMessages: 0,
    // Total number of unread messages from all users
    totalUsersUnreadMessages: 0,
    // Variable, used as a counter of changes on Users list screen. If need to refresh users list screen,
    // it increased by one
    usersListChangeCounter: 0,
    // Variable, used as a counter of changes on Private chat screen. If need to refresh private chat screen,
    // it increased by one
    privateChatChangeCounter: 0,
    // Variable, used as a counter of changes on Public chat screen. If need to refresh public chat screen,
    // it increased by one
    publicChatChangeCounter: 0
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
            break;
        case types.CHANGE_CHAT_MODE:
            newState.chatMode = action.value;
            break;
        case types.CHANGE_PRIVATE_CHAT_MODE:
            newState.privateChatMode = action.value;
            break;
    }
    return newState;
}