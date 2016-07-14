import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ListView,
    StyleSheet,
} from 'react-native';

import { SearchBar } from './SearchBar';

class SearchScreen extends React.Component {
    renderRow(rowData) {
        return (<Text>{rowData}</Text>);
    }
    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    onSearchChange={(event: Object) => {
                        this.props.navigator.push({
                            name: 'search',
                            filter: event.nativeEvent.text
                        });
                        fetch('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=7waqfqbprs7pajbz28mqf6vz&q=pet&page_limit=20&page=1')
                        .then((response) => response.json())
                        .catch((error) => {
                            console.error(error);
                        })
                        .then((responseData) => {
                            this.setState({
                                dataSource: responseData.movies
                            });
                        })
                        .done();
                    }}
                />
                <View style={styles.separator} />
                <ListView 
                    ref="listview"
                    dataSource={['one', 'two']}
                    renderRow={this.renderRow}
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
    separator: {
        height: 1,
        backgroundColor: '#eeeeee',
    },
});

export { SearchScreen }
