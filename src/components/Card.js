import React, { Component } from 'react';
import {
    Text, Picker,
    View, Dimensions, StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
import FlipCard from 'react-native-flip-card'
import Flip from './Flip'

class Card extends Component {
    state = {}
    render() {
        return (
            <View style={{ width: Dimensions.get("window").width * 0.9, height: Dimensions.get("window").width * 0.9, marginVertical: 30, }}>
                <Swiper style={styles.wrapper} showsButtons={false} dotColor={'rgb(179, 179, 204)'} activeDotColor={'rgb(204, 0, 102)'}>
                    <Flip></Flip>
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