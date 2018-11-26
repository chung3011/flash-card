import React, { Component } from 'react';
import {
    Text, TextInput, StyleSheet,
    View, TouchableOpacity, Dimensions, FlatList
} from 'react-native';
import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddWord from '../components/AddWord'
import Word from '../components/Word';


class OwnCardScreen extends Component {
    state = {}

    renderEditTitle = () => (
        <View style={{ marginTop: 5, width: Dimensions.get("window").width * 0.95 }}>
            <Text style={styles.title}>Title: {this.props.navigation.getParam("topic").title}</Text>
        </View>
    )

    renderEditLanguage = () => (
        <View style={{ width: Dimensions.get("window").width * 0.95 }}>
            <Text style={styles.title}>Language: {this.props.navigation.getParam("topic").language}</Text>
        </View>
    )

    renderSearch = () => (
        <View style={{
            width: Dimensions.get("window").width * 0.6,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TextInput
                style={[styles.title, { flex: 1, }]}
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
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
            width: Dimensions.get("window").width * 0.7
        }}>
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
        return <Word item={data.item} screen={'ownCard'} />
    }

    renderWord = () => (
        <AddWord />
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
                {this.renderWord()}
                <View style={{ height: Dimensions.get("window").height * 0.36, alignItems: 'center' }}>
                    <FlatList
                        style={{ flexGrow: 0 }}
                        data={this.props.navigation.getParam("topic").words}
                        renderItem={this.renderList}
                        keyExtractor={item => item.toString()}
                    />
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
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: secondaryColorCore,
        marginHorizontal: 20,
        fontSize: 15,
        color: 'black'
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