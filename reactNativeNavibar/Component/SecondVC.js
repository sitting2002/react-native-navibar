/**
 * reactNativeNavibar React Native App
 * https://github.com/sitting2002/react-native-navibar
 * @flow
 * @create by Decade
 * @create date 20170307
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Alert,
} from 'react-native';

import NaviBar from './NaviBar.js';

const NaviBackIcon = require('./Images/navi_back.png');  
const webImg = 'https://static.ring.com/assets/static/fb-9609b1bfce739af883fa03a396743761.png';
const titleImg = 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2595789906,685159251&fm=15&gp=0.jpg';

export default class SecondVC extends Component {
    render() {
        return (
            <View style = {{flex: 1}}>
                <NaviBar
                    StatusBarStyle = 'default'
                    statusBarBackgroundColor = '#00f'                    
                    
                    naviBackgroundColor = '#fff'
                    titleClickAction = {() => Alert.alert('It\'s facebook logo')}
                    titleImg = {{uri: titleImg}}

                    leftImgBtn1 = {NaviBackIcon}
                    leftBtn1Action = {() => this.props.navigator.pop()}
                    leftImgBtn2 = {{uri: webImg}}
                    leftBtn2Action = {() => Alert.alert('leftBtn2Action')}

                    rightTextBtn1 = 'world'
                    rightTextBtn1Color = '#f00'
                    rightBtn1Action = {() => Alert.alert('rightBtn1Action')}
                    rightImgBtn2 = {{uri: webImg}}
                    rightBtn2Action = {() => Alert.alert('rightBtn2Action')}
                />
                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#726dd1'}}>
                    <Text>I am the SecondVC</Text>
                    <Text>try to click the 'Back' button and push to the first view</Text>
                </View>
            </View>
        );
    }
}