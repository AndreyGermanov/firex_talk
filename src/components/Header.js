import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';

/**
 * Main application screen component class
 */
export default class Header extends Component {
    /**
     * Render function, used to display component
     */
    render() {
        return (
            <View style={
                {
                    height:48,
                    backgroundColor:'skyblue',
                    justifyContent:'space-between',
                    alignItems:'center',
                    flexDirection: 'row'
                }
            }>
                <View style={{width:32,height:32}}>
                    <TouchableOpacity onPress={this.props.menuClick}>
                        <Icon name='menu' size={32} color='white'/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>
                        {this.props.header}
                    </Text>
                </View>
            </View>
        )
    }
}