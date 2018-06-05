import React, {Component} from 'react'
import {View,Text,TouchableHighlight} from 'react-native'
import SideMenu from '../containers/SideMenu'
import MainScreen from '../containers/MainScreen';

/**
 * Main root application component
 */
export default class Application extends Component {
    /**
     * Component render function
     * @returns rendered component
     */
    render() {
        var content = <MainScreen/>;
        if (this.props.isSideMenuOpened) {
            content =
                <View style={
                    {
                        flex:1,
                        flexDirection:'row',
                        justifyContent:'space-evenly'
                    }
                }>
                    <View style={{flex:3}}>
                        <SideMenu/>
                    </View>
                    {content}
                </View>;
        }
        return content;
    }
}