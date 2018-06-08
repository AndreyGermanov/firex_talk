import React,{Component} from 'react';
import actions from '../actions/Application';
import {View,Text,TouchableOpacity} from 'react-native';

/**
 * Component for Users List which used to select user for private chat
 */
export default class UsersList extends Component {
    /**
     * Function used to render view
     * @returns Rendered view to display
     */
    render() {
        return (
            <View>
                <Text>Users List</Text>
            </View>
        )
    }
}