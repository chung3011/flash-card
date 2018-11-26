import React, { Component } from 'react';
import {
    Text, Picker,
    View, Dimensions, StyleSheet,FlatList
} from 'react-native';
import firebase from 'react-native-firebase';

import Swiper from 'react-native-swiper';
import Flip from './Flip'



class Card extends Component {
    state = {
        box: []
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
        return <Flip item={data.item} />
    }

    render() {
        return (
            <View style={{ width: Dimensions.get("window").width * 0.9, height: Dimensions.get("window").width * 0.9, marginVertical: 30, }}>
                <Swiper style={styles.wrapper} showsButtons={false} dotColor={'rgb(179, 179, 204)'} activeDotColor={'rgb(204, 0, 102)'}>
                    <FlatList
                        style={{ flexGrow: 0 }}
                        data={this.state.box}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </Swiper>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'rgb(204, 0, 102)',
        fontSize: 30,
        fontWeight: 'bold',
    },
    face: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    meanText: {
        color: 'rgb(41, 41, 61)',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default Card;