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
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }
    renderRow(rowData) {
        return (<Text>{rowData.title}</Text>);
    }
    getDataSource(movies: Array < any > ): ListView.DataSource {
        return this.state.dataSource.cloneWithRows(movies);
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
                                dataSource: this.getDataSource([{title:'one'},{title:'two'}])
                            });
                        })
                        .done();
                    }}
                    onFocus={() => this.refs.listview && this.refs.listview.getScrollResponder().scrollTo({ x: 0, y: 0 })}
                />
                <View style={styles.separator} />
                <ListView 
                    ref="listview"
                    dataSource={this.state.dataSource}
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
