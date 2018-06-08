import React,{Component} from 'react';
import actions from '../actions/Application';
import {View,Text,TouchableOpacity} from 'react-native';

/**
 * Component for screen of Chat messages
 */
export default class MessagesScreen extends Component {
    /**
     * Function used to render view
     * @returns Rendered view to display
     */
    render() {
        return (
            <View>
                <Text>Messages</Text>
            </View>
        )
    }
}