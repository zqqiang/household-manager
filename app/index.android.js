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

var RouteMapper = function(route, navigator) {
    if (route.name === 'search') {
        return (
            <View style={{flex: 1}}>
                <Text onPress={() => navigator.push({name:'other'})} >Search</Text>
            </View>
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
        var initialRoute = { name: 'search' };
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

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

AppRegistry.registerComponent('app', () => app);
