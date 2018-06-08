import React,{Component} from 'react';
import {View} from 'react-native';
import actions from '../actions/Application';
import ChatNavigation from '../containers/ChatNavigation';
import MessagesScreen from '../containers/MessagesScreen';
import UsersListScreen from '../containers/UsersList';

/**
 * Component which represents chat screen
 */
export default class ChatScreen extends Component {
    /**
     * Main render function. Returns rendered view to display
     */
    render() {
        return (
            <View style={{flex:1,flexDirection:'column',justifyContent:'space-evenly'}}>
                <View style={{height:48}}>
                    <ChatNavigation/>
                </View>
                <View>
                    {this.getMainScreen()}
                </View>
            </View>
        );
    }

    /**
     * Function returns component for main part of chat screen, depending on
     * current mode, selected by navigation buttons. It can be either messages list in
     * public chat window, or users list, or private chat window.
     * @returns Rendered component
     */
    getMainScreen() {
        switch (this.props.chatMode) {
            case actions.chatModes.PUBLIC:
                return <MessagesScreen/>;
            case actions.chatModes.PRIVATE:
                switch (this.props.privateChatMode) {
                    case actions.privateChatModes.USERS_LIST:
                        return <UsersListScreen/>;
                    case actions.privateChatModes.CHAT:
                        return <MessagesScreen/>;
                }
                break;
        }
    }

}