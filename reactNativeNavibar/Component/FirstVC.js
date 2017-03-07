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
} from 'react-native';

import SecondVC from './SecondVC.js';

export default class FirstVC extends Component {
    pushSecondVC() {
        this.props.navigator.push({
            component: SecondVC,
        });
    }

    render() {
        return (
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: '#57d2f7'}}>
                <Text>I am the FirstVC</Text>
                <TouchableOpacity style = {{height: 50, marginTop: 50, width: 300, backgroundColor: '#ed6', alignItems: 'center', justifyContent: 'center'}} 
                    onPress = {() => this.pushSecondVC()}
                    activeOpacity = {1}>
                    <Text>Turn to SecondVC</Text>
                </TouchableOpacity>
            </View>
        );
    }
}