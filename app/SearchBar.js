import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    Platform,
    TouchableNativeFeedback
} from 'react-native';

var IS_RIPPLE_EFFECT_SUPPORTED = Platform.Version >= 21;

class SearchBar extends React.Component {
    onChangeText(text) {
        // todo: need to separate home search bar and search screen bar
        if ('HomeScreen' === this.props.parent) {
            // this.props.navigator.push({
            //     name: 'search',
            //     filter: text
            // });
        }
        console.log(text);
    }
    render() {
        var background = IS_RIPPLE_EFFECT_SUPPORTED ?
            TouchableNativeFeedback.SelectableBackgroundBorderless() :
            TouchableNativeFeedback.SelectableBackground();
        return (
            <View style={styles.searchBar}>
                <TouchableNativeFeedback
                    background={background}
                    onPress={() => this.refs.input && this.refs.input.focus()}>
                    <View>
                        <Image
                          source={require('./img/android_search_white.png')}
                          style={styles.icon}
                        />
                    </View>
                </TouchableNativeFeedback>
                <TextInput 
                    ref="input"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoFocus={true}
                    onChangeText={this.onChangeText.bind(this)}
                    placeholder="Search a house..." 
                    placeholderTextColor="rgba(155, 155, 155, 0.5)"
                    onFocus={this.props.onFocus}
                    style={styles.searchBarInput}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#a9a9a9',
        height: 56,
    },
    searchBarInput: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        height: 50,
        padding: 0,
        backgroundColor: 'transparent',
    },
    icon: {
        width: 24,
        height: 24,
        marginHorizontal: 8,
    },
});

export { SearchBar }
