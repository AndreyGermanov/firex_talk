/**
 * Main application Redux action creators class
 */
const ApplicationActions = class {
    /**
     * Class constructor
     */
    constructor() {
        //List of supported action types
        this.actions = {
            CHANGE_IS_LOGIN: 'Application_CHANGE_IS_LOGIN',
            CHANGE_IS_SIDE_MENU_OPENED: 'Application_CHANGE_IS_SIDE_MENU_OPENED',
            CHANGE_SCREEN: 'Application_CHANGE_SCREEN',
            CHANGE_CHAT_MODE: 'Application_CHANGE_CHAT_MODE',
            CHANGE_PRIVATE_CHAT_MODE: 'Application_CHANGE_PRIVATE_CHAT_MODE'
        }

        // List of application screens
        this.screens = {
            CHAT: 'Application_CHAT_SCREEN',
            SETTINGS: 'Application_SETTINGS_SCREEN',
            USER_PROFILE: 'Application_USER_PROFILE_SCREEN'
        }

        // List of chat screen modes
        this.chatModes = {
            PRIVATE: 'Application_CHAT_SCREEN_PRIVATE',
            PUBLIC: 'Application_CHAT_SCREEN_PUBLIC',
        };

        // Mode of private chat (it can show either list of users to choose for private chat,
        // or chat screen with selected user)
        this. privateChatModes = {
            USERS_LIST: 'Application_PRIVATE_CHAT_USERS_LIST',
            CHAT: 'Application_PRIVATE_CHAT_CHAT'
        }
    }

    /**
     * Redux actions, which changes state properties
     */

    changeIsLogin(value) {
        return {
            type: this.actions.CHANGE_IS_LOGIN,
            value: value
        }
    }

    changeIsSideMenuOpened(value) {
        return {
            type: this.actions.CHANGE_IS_SIDE_MENU_OPENED,
            value: value
        }
    }

    changeApplicationScreen(value) {
        return {
            type: this.actions.CHANGE_SCREEN,
            value: value
        }
    }

    changeChatMode(value) {
        return {
            type: this.actions.CHANGE_CHAT_MODE,
            value: value
        }
    }

    changePrivateChatMode(value) {
        return {
            type: this.actions.CHANGE_PRIVATE_CHAT_MODE,
            value: value
        }
    }
}

export default new ApplicationActions();