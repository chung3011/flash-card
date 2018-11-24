import React, { Component } from 'react';
import {
    Text, FlatList,
    View, Dimensions, TouchableOpacity
} from 'react-native';
import FindTitle from '../components/FindTitle';
import PickLanguage from '../components/PickLanguage';
import Topic from '../components/Topic';
import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                    style={{ flexGrow: 0, height: Dimensions.get("window").height * 0.63 }}
                    data={data}
                    renderItem={this.renderItem}
                // keyExtractor={item => item.toString()}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                    <TouchableOpacity>
                        <Icon name="globe" size={50} color={secondaryColorCore} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Icon name="plus-circle" size={50} color={secondaryColorCore} />
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
export default MyCardScreen;
