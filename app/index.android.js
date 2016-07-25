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

import { HomeScreen } from './HomeScreen';
import { SearchScreen } from './SearchScreen';

class app extends Component {
    RouteMapper(route, navigator) {
        if (route.name === 'home') {
            // todo: can not use navigator in HomeScreen ?
            return (<HomeScreen navigator={navigator} />);
        } else if (route.name === 'search') {
            return (<SearchScreen navigator={navigator}/>);
        } else {
            return (
                <View style={{flex: 1}}>
                    <Text onPress={() => {navigator.pop()}}>{route.name}</Text>
                </View>
            );
        }
    }
    render() {
        let initialRoute = { name: 'home' };
        return (
            <Navigator
                style={styles.container}
                initialRoute={initialRoute}
                configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                renderScene={this.RouteMapper}
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
