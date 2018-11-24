import React, { Component } from 'react';
import {
    Text, StyleSheet, Dimensions,
    View, TouchableOpacity, TextInput
} from 'react-native';
import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements'

class EditWord extends Component {
    state = {
        status: this.props.item.remembered
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <View style={{justifyContent:'center',alignItems:'center',width:45}}>
                    <CheckBox
                        size={27}
                        checked={this.state.status}
                        onPress={() => this.setState({ status: !this.state.status })}
                    />
                </View>

                <TextInput style={{
                    borderWidth: 2,
                    borderColor: primaryColorCore,
                    width: 100,
                    marginVertical: 15,
                    marginLeft:15,
                    marginRight: 20,
                    borderRadius: 10,
                }}>{this.props.item.word}</TextInput>
                <TextInput style={{
                    borderWidth: 2,
                    borderColor: primaryColorCore,
                    width: 100,
                    marginVertical: 15,
                    marginRight: 15,
                    borderRadius: 10,
                }}>{this.props.item.mean}</TextInput>
                <TouchableOpacity style={{ marginEnd: 10 }}>
                    <Icon name="minus-circle" size={30} color={secondaryColorCore} />

                </TouchableOpacity>
            </View>
        );
    }
}

export default EditWord;