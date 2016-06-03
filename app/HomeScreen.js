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

function ImageViewOne(navigator) {
    return (
        <TouchableOpacity onPress={() => navigator.push({ id: 2 })}>
            <Image style={styles.image} source={require('./img/house1.jpg')} />
        </TouchableOpacity>
    );
}

function ImageViewTwo(navigator) {
    return (
        <TouchableOpacity onPress={() => navigator.pop()}>
            <Image style={styles.image} source={require('./img/house2.jpg')} />
        </TouchableOpacity>
    );
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
                <Navigator initialRoute={{id:1}} renderScene={this._renderScene} />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    toolbar: {
        backgroundColor: 'red',
        height: 56,
    },
    image: {
        width: 360,
        height: 200,
    }
});

export { HomeScreen }
