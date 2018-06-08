import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import actions from '../actions/Application';
import Header from '../containers/Header';
import ChatScreen from '../containers/ChatScreen';

/**
 * Main application screen component class
 */
export default class MainScreen extends Component {
    /**
     * Render function, used to display component
     */
    render() {
        return (
                <View style=
                      {
                          {
                              flex:1,
                              flexDirection:'column',
                              justifyContent:'space-evenly'
                          }
                      }
                      onStartShouldSetResponder={(evt) => true}
                      onResponderGrant={this.props.hideMenu}
                >
                    <Header header={this.props.header}/>
                    {this.drawContent()}
                </View>
        )
    }

    /**
     * Function returns code of current screen, depending on application state
     * @returns XML content of screen
     */
    drawContent() {
        switch (this.props.screen) {
            case actions.screens.SETTINGS:
                return <View style={{flex:1}}><Text>Settings</Text></View>;
            case actions.screens.USER_PROFILE:
                return <View style={{flex:1}}><Text>User Profile</Text></View>;
            default:
                return <ChatScreen/>
        }
    }
}