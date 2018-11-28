import React, { Component } from 'react';
import {
    Text,
    View, FlatList, StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';
import FindTitle from '../components/FindTitle';
import PickLanguage from '../components/PickLanguage';
import firebase from 'react-native-firebase';

import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Topic from '../components/Topic';
import TopicDiscovery from '../components/TopicDiscovery';


class DiscoveryScreen extends Component {
    state = {
        box: []
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        this.props.navigation.getParam('listUserUid').map(item =>
            firebase.database().ref(`/users`)
                .child(item)
                .child('box')
                .on('value', res => {
                    this.setState({ box: res._value != null ? this.state.box.concat(res._value) : this.state.box })
                })
        )
    }

    renderItem = (data) => {
        return <TopicDiscovery
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
                <View style={{ marginVertical: 20, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Topics')}>
                        <Icon name="user-circle" size={40} color={secondaryColorCore} />
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 60,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: primaryColorCore
    },
    header: {
        backgroundColor: primaryColorCore,
        padding: 10,
        flexDirection: 'row',
    },
    language: {
        fontSize: 14,
        color: '#f2f2f2',
        flex: 1
    },
    topic: {
        fontSize: 20,
        margin: 10,
        color: '#262626'
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 8
    },
    flexRow: {
        flexDirection: 'row',
    }
})

export default DiscoveryScreen;