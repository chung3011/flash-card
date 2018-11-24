import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    View,
    StyleSheet,
    Image,
    TextInput, Dimensions
} from 'react-native';
import firebase from 'react-native-firebase'
import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';

class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
        isSigningIn: false,
        isSigningUp: false
    }

    renderLogo = () => (
        <View style={styles.logoStyleView}>
            <Image
                style={styles.imgStyle}
                resizeMode='contain'
                source={require('../../imgs/Logo.jpg')}
            />
        </View>
    )

    renderLogin = () => (
        <View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="user" size={20} color={secondaryColorCore} style={{marginStart:10}}/>
                    <Text style={styles.txtInput}>Email</Text>
                </View>
                <TextInput
                    onChangeText={(email) => this.setState({ email })}
                    underlineColorAndroid={primaryColorCore}
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="unlock-alt" size={20} color={secondaryColorCore} style={{marginStart:10}}/>
                    <Text style={styles.txtInput}>Password</Text>
                </View>
                <TextInput
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                    underlineColorAndroid={primaryColorCore}
                />
            </View>
        </View>
    )

    onSignIn = () => {

        if (this.state.email === '') {
            this.setState({ err: 'Pls enter email' })
            return
        }
        if (this.state.password === '') {
            this.setState({ err: 'Pls enter password' })
            return
        }

        this.setState({ isSigningIn: true })

        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                this.setState({
                    err: '',
                    isSigningIn: false
                })
            })
            .catch(err => this.setState({
                err: err.toString(),
                isSigningIn: false
            }))
    }

    onSignUp = () => {

        if (this.state.email === '') {
            this.setState({ err: 'Pls enter email' })
            return
        }
        if (this.state.password === '') {
            this.setState({ err: 'Pls enter password' })
            return
        }

        this.setState({ isSigningUp: true })

        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                this.setState({
                    err: '',
                    isSigningUp: false
                })
            })
            .catch(err => this.setState({
                err: err.toString(),
                isSigningUp: false
            }))
    }

    renderSignUp = () => (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.buttonStyle}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: primaryColorCore }]}
                    onPress={this.onSignUp}
                    loading={this.state.isSigningUp}
                    loadingProps={{ size: 'large', color: 'rgb(236, 248, 246)' }}
                >
                    <Text style={styles.textButton}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonStyle}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: secondaryColorCore }]}
                    onPress={this.onSignIn}
                    loading={this.state.isSigningIn}
                    loadingProps={{ size: 'large', color: 'rgb(236, 248, 246)' }}
                >
                    <Text style={styles.textButton}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    renderError = () => (
        <Text style={{ color: primaryColorCore }}>{this.state.err}</Text>
    )
    render() {
        return (
            <View style={styles.container}>
                {this.renderLogo()}
                {this.renderLogin()}
                {this.renderError()}
                {this.renderSignUp()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    logoStyleView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgStyle: {
        height: Dimensions.get("window").width * 0.8,
        width: Dimensions.get("window").width
    },
    loginImg: {
        height: 16,
        width: 16,
        marginStart: 10
    },
    txtInput: {
        color: secondaryColorCore,
        marginStart: 10
    },
    buttonStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 100,
        height: 45,
        borderWidth: 0,
        borderRadius: 12,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    textButton: {
        fontWeight: 'bold',
        color: 'white'
    }
});
export default LoginScreen;
