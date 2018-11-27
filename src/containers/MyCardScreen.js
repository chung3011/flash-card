import React, { Component } from 'react';
import {
    Text, FlatList,
    View, Dimensions, TouchableOpacity
} from 'react-native';

import firebase from 'react-native-firebase';

import FindTitle from '../components/FindTitle';
import PickLanguage from '../components/PickLanguage';
import Topic from '../components/Topic';
import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';



class MyCardScreen extends Component {
    state = {
        box: [],
    }


    componentDidMount() {
        this.loadData()
    }

    loadData() {
        firebase.database().ref(`/users`)
            .child(firebase.auth().currentUser.uid)
            .child('box')
            .on('value', res => {
                this.setState({ box: res._value != null ? res._value : [] })
            })
    }

    renderItem = (data) => {
        return <Topic
            screen={'Topics'}
            item={data.item}
            navigation={this.props.navigation} />
    }

    render() {
        return (
            <View>
                <FindTitle />
                <PickLanguage />
                <FlatList
                    style={{ flexGrow: 0, height: Dimensions.get("window").height * 0.60 }}
                    data={this.state.box}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.toString()}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Discovery')}>
                        <Icon name="globe" size={40} color={secondaryColorCore} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard')}>
                        <Icon name="plus-circle" size={40} color={secondaryColorCore} />
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
export default MyCardScreen;
