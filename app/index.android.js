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



class app extends Component {
    RouteMapper(route, navigator) {
        if (route.name === 'home') {
            return (
                <HomeScreen 
                    navigator={navigator}
                    onSearchChange={(event: Object) => {
                        let filter = event.nativeEvent.text.toLowerCase();
                        navigator.push({
                            name: filter
                        });
                    }}
                />
            );
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
