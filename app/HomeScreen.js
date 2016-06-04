import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Navigator,
    TouchableOpacity,
    ToolbarAndroid,
} from 'react-native';

import { SearchBar } from './SearchBar';

function ImageViewOne(navigator) {
    return (
        <TouchableOpacity 
            style={styles.iamgeContainer}
            onPress={() => navigator.push({ id: 2 })}
        >
            <Image 
                source={require('./img/house1.jpg')} 
            />
        </TouchableOpacity>
    );
}

function ImageViewTwo(navigator) {
    return (
        <TouchableOpacity 
            style={styles.iamgeContainer}
            onPress={() => navigator.pop()}
        >
            <Image 
                source={require('./img/house2.jpg')} 
            />
        </TouchableOpacity>
    );
}

class SearchSceen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.separator} />
                <SearchBar />
                <View style={styles.separator} />
            </View>
        );
    }
}

class HomeScreen extends React.Component {
    _renderScene(route, navigator) {
        if (1 === route.id) {
            return ImageViewOne(navigator);
        } else if (2 === route.id) {
            return ImageViewTwo(navigator);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid 
                    style={styles.toolbar}
                    title='HouseHold'
                    titleColor='white'
                    navIcon={require('./img/icon.png')}
                    actions={[{title: 'Settings'}]}
                />
                <Navigator 
                    style={styles.navigator}
                    initialRoute={{id:1}} 
                    renderScene={this._renderScene} 
                />
                <SearchSceen />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    navigator: {
        backgroundColor: 'green',
        height: 220,
        padding: 20
    },
    toolbar: {
        backgroundColor: 'red',
        height: 56,
    },
    iamgeContainer: {
        backgroundColor: 'yellow',
        height: 200
    },
    image: {
        width: 360,
        height: 220,
    },
    separator: {
        height: 1,
        backgroundColor: '#eeeeee',
    },
});

export { HomeScreen }
