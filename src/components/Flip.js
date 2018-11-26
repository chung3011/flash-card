import React, { Component } from 'react';
import {
    Text,
    View, Dimensions, StyleSheet, TouchableOpacity
} from 'react-native';
import FlipCard from 'react-native-flip-card'


class Flip extends Component {
    state = {}
    render() {
        return (
            <View style={styles.slide1}>
                <FlipCard
                    style={{ width: Dimensions.get("window").width * 0.9, height: Dimensions.get("window").width * 0.9, }}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
                >
                    <View style={styles.face}>
                        <Text style={styles.text} >Word</Text>
                        <View style={{ marginTop: 100 }}>
                            <TouchableOpacity style={{ borderColor: 'rgb(204, 0, 102)', backgroundColor: 'rgb(204, 0, 102)', borderRadius: 5, width: 100, height: 50, borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, }}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Remembered</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.face}>
                        <Text style={styles.meanText} >Mean</Text>
                        <View style={{ marginTop: 100 }}>
                            <TouchableOpacity style={{ borderColor: 'rgb(204, 0, 102)', backgroundColor: 'rgb(204, 0, 102)', borderRadius: 5, width: 100, height: 50, borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, }}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Remembered</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </FlipCard>
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

export default Flip;