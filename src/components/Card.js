import React, { Component } from 'react';
import {
    Text, Picker,
    View, Dimensions, StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
import FlipCard from 'react-native-flip-card'
class Card extends Component {
  state = {  }
  render() {
    return (
        <View style={{ width: Dimensions.get("window").width * 0.9, height: Dimensions.get("window").width * 0.9, marginVertical: 30,}}>
                    <Swiper style={styles.wrapper} showsButtons={false} dotColor={'rgb(179, 179, 204)'} activeDotColor={'rgb(204, 0, 102)'}>
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
                                </View>
                                <View style={styles.face}>
                                    <Text style={styles.meanText} >Mean</Text>
                                </View>
                            </FlipCard>
                        </View>
                        <View style={styles.slide2}>
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
                                    <Text style={styles.text}>Word</Text>
                                </View>
                                <View style={styles.face}>
                                    <Text style={styles.meanText}>Mean</Text>
                                </View>
                            </FlipCard>
                        </View>
                        <View style={styles.slide3}>
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
                                    <Text style={styles.text}>Word</Text>
                                </View>
                                <View style={styles.face}>
                                    <Text style={styles.meanText}>Mean</Text>
                                </View>
                            </FlipCard>
                        </View>
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