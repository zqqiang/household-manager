import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ToolbarAndroid,
} from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid 
                    style={styles.toolbar}
                    logo={require('./img/icon.png')}
                    actions={[{title: 'Settings', icon: require('./img/setting.png'), show: 'always'}]}
                />
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
    }
});

export { HomeScreen }
