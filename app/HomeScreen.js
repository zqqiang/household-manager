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
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from './SearchBar';

class ModuleView extends React.Component {
    render() {
        return (
            <View style={this.props.style}>
                <Icon style={styles.icon} name={this.props.name} size={this.props.size} color={this.props.color} />
                <Text style={styles.text}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

class MainModule extends React.Component {
    render() {
        return (
            <View style={styles.moduleContainer}>
                <View style={styles.moduleRow}>
                    <ModuleView name="home" text="New" size={50} color="#F85944" style={styles.moduleView} />
                    <ModuleView name="user-plus" text="Used" size={50} color="#F85944" style={styles.moduleView} />
                    <ModuleView name="graduation-cap" text="School" size={50} color="#F85944" style={styles.moduleView} />
                </View>
                <View style={styles.moduleRow}>
                    <ModuleView name="usd" text="Rent" size={50} color="#F85944" style={styles.moduleView} />
                    <ModuleView name="credit-card" text="Sold" size={50} color="#F85944" style={styles.moduleView} />
                    <ModuleView name="question" text="Problem" size={50} color="#F85944" style={styles.moduleView} />
                </View>
            </View>
        );
    }
}

class Tools extends React.Component {
    render() {
        return (
            <View style={styles.tools}>
                <ModuleView name="home" text="Home" size={25} color="#F85944" style={styles.toolView} />
                <ModuleView name="calculator" text="Calc" size={25} color="#F85944" style={styles.toolView} />
                <ModuleView name="folder-open" text="Save" size={25} color="#F85944" style={styles.toolView} />
                <ModuleView name="comment" text="Message" size={25} color="#F85944" style={styles.toolView} />
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
                <Swiper style={styles.swiper} showsButtons={true} height={220} >
                    <View style={styles.slide}>
                        <Image style={styles.image} source={require('./img/house1.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image} source={require('./img/house2.jpg')} />
                    </View>
                </Swiper>
                <SearchBar />
                <MainModule />
                <Tools />
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
    icon: {
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchContainer: {

    },
    moduleContainer: {
        backgroundColor: 'white',
    },
    moduleRow: {
        flexDirection: 'row',
    },
    moduleView: {
        flex: 0.3,
        borderWidth: 1,
        borderColor: '#ff0000'
    },
    tools: {
        flexDirection: 'row',
    },
    toolView: {
        flex: 0.25,
        paddingTop: 15
    }
});

export { HomeScreen }
