import React, { Component } from 'react';
import {
    Text, TextInput, StyleSheet,
    View, TouchableOpacity, Dimensions, FlatList
} from 'react-native';
import { primaryColorCore, secondaryColorCore } from '../style';
import EditWord from './../components/EditWord'
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
    {
        mean: 'đỏ',
        word: 'red',
        remembered: false
    },
    {
        mean: 'xanh dương',
        word: 'blue',
        remembered: true
    },
    {
        mean: 'xanh lá',
        word: 'green',
        remembered: true
    },
    {
        mean: 'vàng',
        word: 'yellow',
        remembered: false
    },
]

class OwnCardScreen extends Component {
    state = {}

    renderEditTitle = () => (
        <View style={{ marginTop: 10, width: Dimensions.get("window").width * 0.95 }}>
            <TextInput
                style={styles.title}
                placeholder={'Edit title'}
                onChangeText={(text) => this.setState({ text })}
                underlineColorAndroid={'transparent'}
            >
            </TextInput>
        </View>
    )

    renderEditLanguage = () => (
        <View style={{ width: Dimensions.get("window").width * 0.95 }}>
            <TextInput
                style={styles.title}
                placeholder={'Edit language'}
                onChangeText={(text) => this.setState({ text })}
                underlineColorAndroid={'transparent'}
            >
            </TextInput>
        </View>
    )

    renderSearch = () => (
        <View style={{ width: Dimensions.get("window").width * 0.6, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                style={[styles.title, { flex: 1 }]}
                placeholder={'Search'}
                onChangeText={(text) => this.setState({ text })}
                underlineColorAndroid={'transparent'}
            >
            </TextInput>
            <TouchableOpacity style={{ marginTop: 8 }} >
                <Icon name="question-circle" size={40} color={primaryColorCore} />
            </TouchableOpacity>

        </View>
    )

    renderDetail = () => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, width: Dimensions.get("window").width * 0.7 }}>
            <View style={{ marginHorizontal: 15, flexDirection: 'row' }}>
                <Icon style={{ marginEnd: 5 }} name="heart" size={20} />
                <Text style={{ marginLeft: 5 }}>10</Text>
            </View>
            <View style={{ marginHorizontal: 15, flexDirection: 'row' }}>
                <Icon style={{ marginEnd: 5 }} name="graduation-cap" size={20} />
                <Text style={{ marginLeft: 5 }}>40/50</Text>
            </View>
            <View style={{ marginHorizontal: 15, flexDirection: 'row' }}>
                <Icon style={{ marginEnd: 5 }} name="gamepad" size={20} />
                <Text style={{ marginLeft: 5 }}>9</Text>
            </View>
        </View>
    )

    renderList = (data) => {
        return <EditWord item={data.item} />
    }

    renderWord = () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 45 }}>
            <TextInput style={{
                borderWidth: 2,
                borderColor: primaryColorCore,
                width: 100,
                marginVertical: 15,
                marginRight: 20,
                borderRadius: 10,
                paddingLeft: 5
            }}
                placeholder={'word'}
            ></TextInput>
            <TextInput style={{
                borderWidth: 2,
                borderColor: primaryColorCore,
                width: 100,
                marginVertical: 15,
                marginRight: 15,
                borderRadius: 10,
                paddingLeft: 5
            }}
                placeholder={'mean'}
            ></TextInput>
            <TouchableOpacity style={{ marginEnd: 10 }}>
                <Icon name="plus-circle" size={30} color={secondaryColorCore} />

            </TouchableOpacity>
        </View>
    )

    renderDeleteButton = () => (
        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.textButton}>Delete</Text>
            <Icon name="trash" size={30} color={'white'} />
        </TouchableOpacity>
    )

    render() {
        return (

            <View style={styles.container}>
                <View style={{ height: Dimensions.get("window").height * 0.31, alignItems: 'center' }}>
                    {this.renderEditTitle()}
                    {this.renderEditLanguage()}
                    {this.renderSearch()}
                    {this.renderDetail()}
                </View>
                <View style={{ height: Dimensions.get("window").height * 0.36, alignItems: 'center' }}>
                    <FlatList
                        style={{ flexGrow: 0, width: Dimensions.get("window").width * 0.95 }}
                        data={data}
                        renderItem={this.renderList}
                        keyExtractor={item => item.toString()}
                    />
                </View>

                <View style={{ height: Dimensions.get("window").height * 0.12 }}>
                    {this.renderWord()}
                </View>
                <View style={{ height: Dimensions.get("window").height * 0.1 }}>
                    {this.renderDeleteButton()}
                </View>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginTop: 10,
        borderRadius: 10,
        padding: 5,
        borderWidth: 2,
        borderColor: secondaryColorCore,
        marginHorizontal: 20
    },
    addButton: {
        width: 200,
        height: 50,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: primaryColorCore,
        borderRadius: 15,
        elevation: 2
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default OwnCardScreen;