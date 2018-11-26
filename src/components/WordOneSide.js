import React, { Component } from 'react';
import {
    Text, TextInput, Dimensions,
    View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { primaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements'

import { connect } from 'react-redux'
import { delWord } from '../actions'

class WordOneSide extends Component {
    state = {
        status: this.props.remembered
    }

    delWord = () => {
        this.props.delWord({
            mean: this.props.text
        })
    }

    render() {
        return (
            <View style={[styles.container, { justifyContent: this.props.side == 'left' ? 'flex-end' : 'flex-start' }]}>
                {this.props.side == 'left' && this.props.screen == 'ownCard'
                    && <View style={{ justifyContent: 'center', alignItems: 'center', width: 45 }}>
                        <CheckBox
                            size={27}
                            checked={this.state.status}
                            onPress={() => this.setState({ status: !this.state.status })}
                        />
                    </View>}

                <Text style={styles.text} >{this.props.text}</Text>
                {this.props.side == 'right'
                    && <TouchableOpacity
                        style={styles.icon}
                        onPress={this.delWord}
                    >
                        <Icon name="minus-circle" size={35} />
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
        backgroundColor: primaryColorCore,
        width: 110,
        height: 40,
        marginVertical: 8,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        color: 'white',
        fontSize: 16,
        borderRadius: 10,
    },
    icon: {
        elevation: 2
    }
})
export default connect(null, { delWord })(WordOneSide);