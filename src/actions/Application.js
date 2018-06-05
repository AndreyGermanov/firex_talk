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
            CHANGE_SCREEN: 'Application_CHANGE_SCREEN'
        }

        // List of application screens
        this.screens = {
            CHAT: 'Application_CHAT_SCREEN',
            SETTINGS: 'Application_SETTINGS_SCREEN',
            USER_PROFILE: 'Application_USER_PROFILE_SCREEN'
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
}

export default new ApplicationActions();