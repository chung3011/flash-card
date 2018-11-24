import React, { Component } from 'react';
import {
    Text, TextInput, Dimensions,
    View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { primaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';

class Word extends Component {
    state = {}
    render() {
        return (
            <View style={[styles.container, { justifyContent: this.props.side == 'left' ? 'flex-end' : 'flex-start' }]}>
                <TextInput style={styles.text} placeholder={'Word'}/>
                {this.props.side == 'right'
                    && <TouchableOpacity style={styles.icon}>
                        <Icon name="plus-circle" size={30} color={primaryColorCore} />
                    </TouchableOpacity>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.get('window').width / 2,
        alignItems: 'center'
    },
    text: {
        borderWidth: 2,
        borderColor: primaryColorCore,
        width: 100,
        margin: 15,
        borderRadius: 10
    },
    icon: {
        elevation: 2
    }
})
export default Word;