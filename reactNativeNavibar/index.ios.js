/**
 * reactNativeNavibar React Native App
 * https://github.com/sitting2002/react-native-navibar
 * @flow
 * @create by Decade
 * @create date 20170307
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
} from 'react-native';

import FirstVC from './Component/FirstVC.js';

export default class reactNativeNavibar extends Component {
    renderScene(route, navigator) {
        return (
            <route.component 
                navigator = {navigator}  
                {...route.passProps}
                route = {route}
            />
        );
    }

    render() {
        return (
            <Navigator
                style = {{flex:1}}
                initialRoute = {{name: 'FirstVC', component: FirstVC}}
                renderScene = {this.renderScene}
            />
        );
    }
}

AppRegistry.registerComponent('reactNativeNavibar', () => reactNativeNavibar);
