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

export default class SecondVC extends Component {
    render() {
        return (
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#726dd1'}}>
                <Text>I am the SecondVC</Text>
                <TouchableOpacity style = {{height: 50, marginTop: 50, width: 300, backgroundColor: '#e6d', alignItems: 'center', justifyContent: 'center', }}
                    onPress = {() => this.props.navigator.pop()}
                    activeOpacity = {1}>
                    <Text>Back to FirstVC</Text>
                </TouchableOpacity>
            </View>
        );
    }
}