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

import Swiper from 'react-native-swiper';
import { SearchBar } from './SearchBar';

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
                <Swiper style={styles.swiper} showsButtons={true} height={220} >
                    <View style={styles.slide}>
                        <Image style={styles.image} source={require('./img/house1.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image} source={require('./img/house2.jpg')} />
                    </View>
                </Swiper>
                <SearchBar />
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
    separator: {
        height: 1,
        backgroundColor: '#eeeeee',
    },
    swiper: {},
    slide: {
        height: 200
    },
    image: {
        height: 220,
        width: 360
    },
    searchContainer: {

    },
});

export { HomeScreen }
