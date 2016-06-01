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
    Navigator
} from 'react-native';

import {HomeScreen} from './HomeScreen';

let RouteMapper = function(route, navigator) {
    if (route.name === 'home') {
        return (
            <HomeScreen navigator={navigator} />
        );
    } else if (route.name === 'other') {
        return (
            <View style={{flex: 1}}>
                <Text onPress={() => {navigator.pop()}}>Other</Text>
            </View>
        );
    }
};

class app extends Component {
    render() {
        let initialRoute = { name: 'home' };
        return (
            <Navigator
                style={styles.container}
                initialRoute={initialRoute}
                configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                renderScene={RouteMapper}
            />
        );
    }
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

AppRegistry.registerComponent('app', () => app);
