import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
} from 'react-native';

class SearchBar extends React.Component {
    render() {
        return (
            <View style={styles.searchBar}>
                <TextInput 
                    placeholder="Search a house..." 
                    placeholderTextColor="rgba(155, 155, 155, 0.5)"
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
        backgroundColor: 'white',
        height: 56,
    },
    searchBarInput: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        height: 50,
        backgroundColor: 'transparent',
    },
});

export { SearchBar }
