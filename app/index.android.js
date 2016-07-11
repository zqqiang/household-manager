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
import { SearchBar } from './SearchBar';

class app extends Component {
    RouteMapper(route, navigator) {
        if (route.name === 'home') {
            return (
                <HomeScreen 
                    onSearchChange={(event: Object) => {
                        navigator.push({
                            name: 'search',
                            filter: event.nativeEvent.text
                        });
                    }}
                />
            );
        } else if (route.name === 'search') {
            return (
                <View style={styles.container}>
                    <SearchBar
                        onSearchChange={(event: Object) => {
                            navigator.push({
                                name: 'search',
                                filter: event.nativeEvent.text
                            });                            
                        }}
                    />
                    <View style={styles.separator} />
                    <ListView 
                        ref="listview"
                        
                    />
                </View>
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
