import React, { Component } from 'react';
import {
    Text, Picker,
    View, Dimensions, StyleSheet, FlatList
} from 'react-native';

import Swiper from 'react-native-swiper';
import Flip from './Flip'

import { connect } from 'react-redux'
import { updateTopic } from '../actions'

import firebase from 'react-native-firebase';

class Card extends Component {
    state = {
    }


    renderItem = (data) => {
        return <Flip
            item={data.item}
            topic={this.props.topic}
            status={this.props.status}
        />
    }

    render() {
        return (
            <View style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").width,
                marginVertical: 20
            }}>
                <Swiper
                    style={styles.wrapper}
                    showsButtons={false}
                    dotColor={'rgb(179, 179, 204)'}
                    activeDotColor={'rgb(204, 0, 102)'}>
                    <FlatList
                        style={{ flexGrow: 0 }}
                        data={this.props.words}
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

const mapStateToProps = ({ box }) => ({ box })
export default connect(mapStateToProps)(Card);