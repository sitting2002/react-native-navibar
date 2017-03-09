/**
 * reactNativeNavibar React Native App
 * https://github.com/sitting2002/react-native-navibar
 * @flow
 * @create by Decade
 * @create date 20170309
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Alert,
} from 'react-native';

import NaviBar from './NaviBar.js';

const NaviBackIcon = require('./Images/navi_back.png');  

export default class ThirdVC extends Component {
    render() {
        return (
            <View style = {{flex: 1}}>
                <NaviBar             
                    leftImgBtn1 = {NaviBackIcon}
                    leftBtn1Action = {() => this.props.navigator.pop()}
                    leftBtn2Action = {() => Alert.alert('leftBtn2Action')}
                    title = 'ThirdPage'
                />
                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#276dd1'}}>
                    <Text>I am the ThirdVC</Text>
                    <Text>try to click the 'Back' button and push to the first view</Text>
                </View>
            </View>
        );
    }
}