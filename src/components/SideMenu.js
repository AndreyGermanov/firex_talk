import React,{Component} from 'react'
import {View,Text,TouchableHighlight} from 'react-native'
import actions from '../actions/Application'

/**
 * System side menu component class
 */
export default class SideMenu extends Component {
    /**
     * Render function, used to display component
     */
    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.props.menuClick.bind(this,actions.screens.CHAT)}>
                    <Text>Chat</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.menuClick.bind(this,actions.screens.USER_PROFILE)}>
                    <Text>User profile</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.menuClick.bind(this,actions.screens.SETTINGS)}>
                    <Text>Settings</Text>
                </TouchableHighlight>
                <Text>Logout</Text>
            </View>
        )
    }
}