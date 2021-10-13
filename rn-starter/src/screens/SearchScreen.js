import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text, ScrollView, Picker } from "react-native";
import SearchBar from "../components/SearchBar";
import SearchBarScreen from "../components/SearchBarScreen.js";
import Feather from 'react-native-vector-icons/Feather';
import ResultsList from "../components/ResultsList";
import firebase from 'firebase';
import { Colors } from '../constants/Colors';
import { color } from "react-native-reanimated";
/*
const handleSearch = () => {
    this.setState({query: text});
}
*/

//Precisa reconhecer o que está sendo inserido e procurar por vagas no firebase que contenham o que é 
//pesquisado em alguma parte e retornar para o usuário em uma lista


const SearchScreen = ({ navigation }) => {
    const [tipoPesq, setTipoPesq] = useState([]);
    //setTipoPesq("titulo");
    const botaoPressionado = () => {
        Alert.alert("Botão Pressionado")
    };

    const handleSearchSelect = (val) => {
        setTipoPesq(val);
        console.log(tipoPesq);
    };

    const user = navigation.state.params.user;

    return (
        <View style={styles.screenStyle}>
            <SearchBarScreen >
                <View style={styles.barraStyle}>
                    <SearchBar />
                    <TouchableOpacity onPress={botaoPressionado} style={styles.botaoPesq}>
                        <Feather style={styles.styleFeather}
                            name="search" size={40}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.pickerStyle}>
                    <Picker
                        selectedValue={tipoPesq}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => handleSearchSelect(itemValue)}
                    >
                        <Picker.Item label="Tìtulo" value="titulo" />
                        <Picker.Item label="Por Cidade" value="cidade" />
                        <Picker.Item label="Por Área" value="area" />                   
                        <Picker.Item label="Empresas com Reclamações" value="reclamacoes" />
                    </Picker>
                </View>
                <View style={styles.vacanciesFound}>
                    <ScrollView>
                        <Text style={{color: Colors.text}}> Vagas Pesquisadas </Text>
                        <ResultsList> </ResultsList>
                    </ScrollView>
                </View>
                <View style={styles.menuinferior}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home', { user: user })} style={styles.image}>
                        <Feather style={styles.styleFeather}
                            name="home" size={50}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Search', { user: user })} style={styles.image}>
                        <Feather style={styles.styleFeather}
                            name="search" size={50}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings', { user: user })} style={styles.image}>
                        <Feather style={styles.styleFeather}
                            name="settings" size={50}
                        />
                    </TouchableOpacity>
                </View>
            </SearchBarScreen>
        </View>


    );
};

export const searchScreenOptions = () => {
    return {
        headerTitle: () => (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Search</Text>
            </View>
        ),
        headerStyle: {
            backgroundColor: Colors.primary,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTintColor: 'white'
    };
};

const styles = StyleSheet.create({
    screenStyle: {
        backgroundColor: Colors.whitefilling,
    },
    barraStyle: {
        flexDirection: "row",
        borderWidth: 1,
        backgroundColor: Colors.menuinferior,
    },
    botaoPesq: {
        alignItems: "center",
        marginLeft: 15,
        //borderWidth: 1,
    },

    vacanciesFound: {
        marginTop: 10,
        height: 430,
        width: 400,
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 1,
        marginBottom: 10,
        color: Colors.text,
        borderColor: Colors.text,
    },

    image: {
        //width: 133.3,
        //height: 76,
        //borderWidth: 1,
        alignItems: "center",
    },
    pickerStyle: {
        paddingTop: 40,
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center",
    },
    menuinferior: {
        backgroundColor: Colors.menuinferior,
        flexDirection: "row",
        alignSelf: "center",
        position: 'absolute',
        bottom: 0,
        // borderWidth: 1,
    },
    header: {

    },
    headerTitle: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: 'bold',
    },
    styleFeather: {
        color: Colors.text,
        marginLeft: 40,
        marginRight: 40,
    },
});

export default SearchScreen;

