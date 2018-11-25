import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import firebase from 'react-native-firebase'

class SplashScreen
    extends Component {
    state = {}
    componentDidMount() {
        firebase.auth().onAuthStateChanged(res => res !== null
            ? setTimeout(() => this.props.navigation.navigate('HomeScreen'), 3000)
            : setTimeout(() => this.props.navigation.navigate('LoginScreen'), 3000))
    }
    renderLogo = () => (
        <Image
            style={styles.imgStyle}
            resizeMode='contain'
            source={require('../../imgs/logo.jpg')}
        />
    )

    render() {
        return (
            <View style={styles.container}>
                {this.renderLogo()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logoStyleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgStyle: {
        height: 300,
        width: 300,
        flex: 1
    },
});
export default SplashScreen;