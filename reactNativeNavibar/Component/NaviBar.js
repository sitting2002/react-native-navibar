/**
 * reactNativeNavibar React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @create by Decade
 * @create date 20170307
 * 
 * --StatusBar--
 * @props StatusBarStyle    //'default'   //'light-content'
 * @props statusBarBackgroundColor
 * 
 * --NaviBar--
 * @props naviBackgroundColor
 * 
 * --LeftButtonGroup--
 * @props leftTextBtn1
 * @props leftTextBtn1Color
 * @props leftImgBtn1
 * @props leftBtn1Action
 * 
 * @props leftTextBtn2
 * @props leftTextBtn2Color
 * @props leftImgBtn2
 * @props leftBtn2Action
 * 
 * --RightButtonGroup--
 * @props rightTextBtn1
 * @props rightTextBtn1Color
 * @props rightImgBtn1
 * @props rightBtn1Action
 * 
 * @props rightTextBtn2
 * @props rightTextBtn2Color
 * @props rightImgBtn2
 * @props rightBtn2Action
 * 
 * 
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image,
} from 'react-native';

const defaultBackgroundColor = '#eeeeee';
const ButtonSize = 33;

export default class NaviBar extends Component {
    setupStatusBar() {
        return (
            <StatusBar
                animated = {true}
                hidden = {false}
                backgroundColor = {this.props.statusBarBackgroundColor ? this.props.statusBarBackgroundColor : defaultBackgroundColor}
                translucent = {true}
                barStyle = {this.props.StatusBarStyle ? this.props.StatusBarStyle : 'default'}
                showHideTransition = {'fade'}
            />
        );
    }

    setupButtonItem(textBtn, textBtnColor, ImgBtn) {
        if (textBtn) {
            return (
                <Text style = {[{color: textBtnColor}, styles.textBtnStyle]}>{textBtn}</Text>
            );
        } else {
            return (
                <Image style = {{width: ButtonSize, height: ButtonSize}} source = {ImgBtn}></Image>
            );
        }
    }

    setupTitleView() {
        return (
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00f', height: ButtonSize, marginLeft: 16, marginRight: 16, marginTop: 10}}>
                <Text style = {{fontSize: 20}} ellipsizeMode = 'tail' numberOfLines = {1}>i am the title title title</Text>
            </View>
        );
    }

    render () {
        return (
            <View style = {[styles.navContainer, {backgroundColor: this.props.naviBackgroundColor ? this.props.naviBackgroundColor : defaultBackgroundColor}]}>
                {this.setupStatusBar()}

                {this.props.leftTextBtn1 || this.props.leftImgBtn1 ? 
                    <TouchableOpacity style = {styles.leftbuttonContainer} activeOpacity = {1} onPress = {this.props.leftBtn1Action}>
                        {this.setupButtonItem(this.props.leftTextBtn1, this.props.leftTextBtn1Color, this.props.leftImgBtn1)}
                    </TouchableOpacity> 
                : null}

                {this.props.leftTextBtn2 || this.props.leftImgBtn2 ? 
                    <TouchableOpacity style = {styles.leftbuttonContainer} activeOpacity = {1} onPress = {this.props.leftBtn2Action}>
                        {this.setupButtonItem(this.props.leftTextBtn2, this.props.leftTextBtn2Color, this.props.leftImgBtn2)}
                    </TouchableOpacity> 
                : null}

                {this.setupTitleView()}

                {this.props.rightTextBtn1 || this.props.rightImgBtn1 ? 
                    <TouchableOpacity style = {styles.rightbuttonContainer} activeOpacity = {1} onPress = {this.props.rightBtn1Action}>
                        {this.setupButtonItem(this.props.rightTextBtn1, this.props.rightTextBtn1Color, this.props.rightImgBtn1)}
                    </TouchableOpacity> 
                : null}

                {this.props.rightTextBtn2 || this.props.rightImgBtn2 ? 
                    <TouchableOpacity style = {styles.rightbuttonContainer} activeOpacity = {1} onPress = {this.props.rightBtn2Action}>
                        {this.setupButtonItem(this.props.rightTextBtn2, this.props.rightTextBtn2Color, this.props.rightImgBtn2)}
                    </TouchableOpacity> 
                : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navContainer: {
        height: 64, 
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    leftbuttonContainer: {
        backgroundColor: '#a0a0a0', 
        height: ButtonSize, 
        marginLeft: 16, 
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightbuttonContainer: {
        backgroundColor: '#a0a0a0', 
        height: ButtonSize, 
        marginRight: 16, 
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtnStyle: {
        fontSize: 14,
    }
})