import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    View,
    StyleSheet,
    Image,
    TextInput,
} from 'react-native';
import firebase from 'react-native-firebase'
import { primaryColorCore } from '../style';
class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
        isSigningIn: false,
        isSigningUp: false
    }
    renderLogo = () => (
        <View style={styles.logoStyleView}>
            <Text style={styles.imgStyle}>FLAT CARD</Text>
        </View>

    )

    renderLogin = () => (
        <View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.loginImg}
                        //resizeMode='contain'
                        source={require('../../imgs/ic_email.png')}
                        keyboardType={'email-address'}
                    />
                    <Text style={styles.txtInput}>Email</Text>
                </View>
                <TextInput
                    style={{ borderBottomWidth: 1, borderColor: 'brown' }}
                    onChangeText={(email) => this.setState({ email })}
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.loginImg}
                        //resizeMode='contain'
                        source={require('../../imgs/ic_password.png')}
                    />
                    <Text style={styles.txtInput}>Password</Text>
                </View>
                <TextInput
                    style={{ borderBottomWidth: 1, borderColor: 'brown' }}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
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
                    loadingProps={{ size: 'large', color: 'rgba(111, 202, 186, 1)' }}
                >
                    <Text style={styles.textButton}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonStyle}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#ff3300' }]}
                    onPress={this.onSignIn}
                    loading={this.state.isSigningIn}
                    loadingProps={{ size: 'large', color: 'rgba(111, 202, 186, 1)' }}
                >
                    <Text style={styles.textButton}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    renderError = () => (
        <Text style={{ color: 'red' }}>{this.state.err}</Text>
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
        // flexDirection: 'column',
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    logoStyleView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80,
    },
    imgStyle: {
        fontFamily: 'sans-serif',
        fontSize: 40,
        fontWeight: 'bold',
        color: primaryColorCore
    },
    loginStyleView: {
        backgroundColor: 'white',
    },
    loginImg: {
        height: 16,
        width: 16,
        marginStart: 10
    },
    txtInput: {
        color: '#663300',
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
        borderRadius: 16,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    textButton: {
        fontWeight: 'bold',
        color: '#f1f1f1'
    }
});
export default LoginScreen;
