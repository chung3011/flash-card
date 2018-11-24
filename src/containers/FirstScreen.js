import React, { Component } from 'react';
import {
    Text,
    View, StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';
import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';


class FirstScreen extends Component {
    state = {}
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 45 }}>
                <View style={styles.container}>
                    <Text style={styles.text1}>User Mail</Text>
                    <Text style={styles.text2}>________</Text>
                    <Text style={styles.text1} >Number of Box</Text>
                    <Text style={styles.text2}>________</Text>
                    <Text style={styles.text1} >Like</Text>
                    <Text style={styles.text2}>________</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity style={styles.box}>
                        <Icon name="user" size={20} color={secondaryColorCore} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <Icon name="users" size={20} color={secondaryColorCore} />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: primaryColorCore,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        height: Dimensions.get("window").height * 0.5,
        width: Dimensions.get("window").width * 0.8
    },
    text1: {
        color: secondaryColorCore,
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 10
    },
    text2: {
        fontSize: 15,
        marginVertical: 5
    },
    box: {
        borderColor: primaryColorCore,
        borderRadius: 12,
        borderWidth: 1,
        marginVertical: 15,
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FirstScreen;