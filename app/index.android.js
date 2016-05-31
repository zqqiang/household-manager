/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid
} from 'react-native';

class app extends Component {
    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
        return (
            <ToolbarAndroid 
                navIcon={require('./flux.png')} 
                style={styles.toolbar} 
                subtitle={'Example app with toolbar component - subtitle'}
                title="Toolbar"
            />
        );
    }
}

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
});

AppRegistry.registerComponent('app', () => app);
