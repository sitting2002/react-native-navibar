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

import SecondVC from './SecondVC.js';
import ThirdVC from './ThirdVC.js';
import NaviBar from './NaviBar.js';

const webImg = 'https://static.ring.com/assets/static/fb-9609b1bfce739af883fa03a396743761.png';

export default class FirstVC extends Component {
    pushVC(vc) {
        this.props.navigator.push({
            component: vc,
        });
    }

    render() {
        return (
            <View style = {{flex: 1}}>
                <NaviBar
                    StatusBarStyle = 'light-content'
                    statusBarBackgroundColor = '#00f'

                    title = 'i am the title'
                    titleClickAction = {() => Alert.alert('Title Click!')}
                    titleTextColor = '#f0f'

                    leftTextBtn1 = 'Hello'
                    leftTextBtn1Color = '#000'
                    leftBtn1Action = {() => Alert.alert('leftBtn1Action')}
                    leftImgBtn2 = {{uri: webImg}}
                    leftBtn2Action = {() => Alert.alert('leftBtn2Action')}

                    rightTextBtn1 = 'SecondVC'
                    rightTextBtn1Color = '#f00'
                    rightBtn1Action = {() => this.pushVC(SecondVC)}
                    rightImgBtn2 = {{uri: webImg}}
                    rightBtn2Action = {() => this.pushVC(ThirdVC)}
                />
                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: '#57d2f7'}}>
                    <Text>I am the FirstVC</Text>
                    <Text>try to click the 'SecondVC' button and push to the second view</Text>
                </View>
            </View>
        );
    }
}