/**
 * reactNativeNavibar React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @create by Decade
 * @create date 20170307
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';

import SecondVC from './SecondVC.js';
import NaviBar from './NaviBar.js';

const NaviBackIcon = require('./Images/navi_back.png');  
const webImg = 'https://static.ring.com/assets/static/fb-9609b1bfce739af883fa03a396743761.png';

export default class FirstVC extends Component {
    pushSecondVC() {
        this.props.navigator.push({
            component: SecondVC,
        });
    }

    render() {
        return (
            <View style = {{flex: 1}}>
                <NaviBar
                    leftTextBtn1 = '返回'
                    leftTextBtn1Color = '#000'
                    leftBtn1Action = {() => Alert.alert('leftBtn1Action')}
                    leftImgBtn2 = {{uri: webImg}}
                    leftBtn2Action = {() => Alert.alert('leftBtn2Action')}

                    rightTextBtn1 = '返回2'
                    rightTextBtn1Color = '#0f0'
                    rightBtn1Action = {() => Alert.alert('rightBtn1Action')}
                    rightImgBtn2 = {{uri: webImg}}
                    rightBtn2Action = {() => Alert.alert('rightBtn2Action')}
                />
                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: '#57d2f7'}}>
                    <Text>I am the FirstVC</Text>
                    <TouchableOpacity style = {{height: 50, marginTop: 50, width: 300, backgroundColor: '#ed6', alignItems: 'center', justifyContent: 'center'}} 
                        onPress = {() => this.pushSecondVC()}
                        activeOpacity = {1}>
                        <Text>Turn to SecondVC</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}