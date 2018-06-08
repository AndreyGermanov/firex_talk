import React,{Component} from 'react';
import actions from '../actions/Application';
import {View,Text,TouchableOpacity} from 'react-native';

export default class ChatNavigation extends Component {
    /**
     * Function used to render view
     * @returns Rendered view to display
     */
    render() {
        var privateChatBackgroundColor = 'blue';
        var privateChatTextColor = 'white';
        var publicChatBackgroundColor = 'grey';
        var publicChatTextColor = 'black';
        if (this.props.chatMode === actions.chatModes.PUBLIC) {
            privateChatBackgroundColor = 'grey';
            privateChatTextColor = 'black';
            publicChatBackgroundColor = 'blue';
            publicChatTextColor = 'white';
        }
        return (
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',height:48}}>
                <TouchableOpacity onPress={this.props.changeChatMode.bind(this,actions.chatModes.PUBLIC)}>
                    <View style={{
                        height:40,
                        backgroundColor:publicChatBackgroundColor,
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center'}}>
                        <Text style={{color:publicChatTextColor}}>PUBLIC</Text>
                    </View>
                </TouchableOpacity>
                <View style={{width:5}}>
                </View>
                <TouchableOpacity onPress={this.props.changeChatMode.bind(this,actions.chatModes.PRIVATE)}>
                    <View style={{
                        height:40,
                        backgroundColor:privateChatBackgroundColor,
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center'}}>
                        <Text style={{color:privateChatTextColor}}>PRIVATE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}