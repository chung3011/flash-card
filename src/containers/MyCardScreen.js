import React, { Component } from 'react';
import {
    Text, FlatList,
    View,
} from 'react-native';
import FindTitle from '../components/FindTitle';
import PickLanguage from '../components/PickLanguage';
import Topic from '../components/Topic';

const data = [
    {
        language: 'English',
        title: 'animal'
    },
    {
        language: 'Japanese',
        title: 'gain'
    },
    {
        language: 'Tuckey',
        title: 'sport'
    },
    {
        language: 'Japanese',
        title: 'gain'
    },
    {
        language: 'Tuckey',
        title: 'sport'
    },
    {
        language: 'Japanese',
        title: 'gain'
    },
    {
        language: 'Tuckey',
        title: 'sport'
    },

]

class MyCardScreen extends Component {
    state = {}

    renderItem = (data) => {
        return <Topic item={data.item} />
    }

    render() {
        return (
            <View>
                <FindTitle />
                <PickLanguage />
                <FlatList
                    style={{ flexGrow: 0 }}
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.toString()}
                />
            </View>
        );
    }
}
export default MyCardScreen;
