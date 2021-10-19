import React, { useState, useEffect } from "react";
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
    const user = navigation.state.params.user ? navigation.state.params.user : 'andre';
    const [vagas, setVagas] = useState([]);
    const [tipoPesq, setTipoPesq] = useState([]);
    const searchvalue = '';

    const getFirebaseVagas = () => {
        let vagasAux = [];
        firebase.firestore().collection("Vagas").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log('id', doc.id);
                    console.log(doc.data().titulo);
                    console.log(doc.data().descricao);
                    const vaga = {
                        id: doc.id,
                        titulo: doc.data().titulo,
                        link: doc.data().link,
                        descricao: doc.data().descricao,
                        local: doc.data().local,
                        funcao: doc.data().funcao,
                        numerodevagas: doc.data().numerodevagas
                    };
                    vagasAux.push(vaga);
                });
                console.log("Vagas", vagasAux);
                setVagas(vagasAux);
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    
    //const vagas = navigation.state.params.vagas ? navigation.state.params.vagas:'';
    console.log("Tela Pesquisa");
    console.log("Vagas: ",{vagas});

    const botaoPressionado = () => {
        Alert.alert("Botão Pressionado");
        getFirebaseVagas();
    };

    const handleSearchSelect = (val) => {
        setTipoPesq(val);
        console.log(tipoPesq);
    };

    

    return (
        <View style={styles.screenStyle}>
            <SearchBarScreen value={searchvalue}>
                <View style={styles.barraStyle}>
                    <SearchBar />
                    <TouchableOpacity onPress={botaoPressionado} style={styles.botaoPesq}>
                        <Feather style={styles.styleSearch}
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
                        <Text style={{color: Colors.text, alignSelf: 'center'}}> Vagas Pesquisadas </Text>
                        <ResultsList results={vagas} navigation={navigation}> </ResultsList>
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
        height: 350,
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
        bottom: -50,
        borderWidth: 1,
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
    styleSearch: {
        color: Colors.text,
    },
});

export default SearchScreen;

