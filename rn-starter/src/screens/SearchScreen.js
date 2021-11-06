import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text, ScrollView, Picker, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import SearchBarScreen from "../components/SearchBarScreen.js";
import Feather from 'react-native-vector-icons/Feather';
import ResultsList from "../components/ResultsList";
import firebase from 'firebase';
import { Colors } from '../constants/Colors';
import { color } from "react-native-reanimated";
import OcorrenciesList from "../components/OcorrenciesList";
/*
const handleSearch = () => {
    this.setState({query: text});
}
*/

//Precisa reconhecer o que está sendo inserido e procurar por vagas no firebase que contenham o que é 
//pesquisado em alguma parte e retornar para o usuário em uma lista


const SearchScreen = ({ navigation, vacancies }) => {

    const genericUser = {
        name: 'Generic User Name',
        gender: 'naobinario',
        email: 'genericusname@email.com',
        password: 'password',
        date: '01-01-2001',
    };

    const user = navigation.state.params.user ? navigation.state.params.user : genericUser;
    const [vagas, setVagas] = useState([]);
    const [tipoPesq, setTipoPesq] = useState();
    const [searchValue, setSearchValue] = useState();

    useEffect(() => {
        setSearchValue('');
        setTipoPesq('titulo');
    }, []);
    
    const IniciarPesquisa = () => {
        let vagasAux = [];
        firebase.firestore().collection("Vagas").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const vaga = {
                        id: doc.id,
                        titulo: doc.data().Titulo,
                        link: doc.data().Link,
                        descricao: doc.data().Descricao,
                        local: doc.data().Local,
                        funcao: doc.data().Funcao,
                        numerodevagas: doc.data().NumerodeVagas
                    };
                    vagasAux.push(vaga);
                });
                console.log("Vagas", vagasAux);
                setVagas(vagasAux);
            })
            .catch(function (error) {
                console.error(error);
            });
            //setVagasPesq(vacancies)
    };
    
    const botaoPressionado = () => {
        Alert.alert("Pesquisa " + searchValue); // searchvalue = ''
        IniciarPesquisa();
    };

    const handleSearchSelect = (val) => {
        setTipoPesq(val);
        console.log(tipoPesq);
    };

    const updateSearch = (search) => {
        setSearchValue(search);
        console.log(searchValue);
    }

    return (
        <SearchBarScreen>
            <View style={styles.barraStyle}>
                <SearchBar value={searchValue} onValueChange={(search) => updateSearch(search)} />
                <View style={styles.pickerView}>
                    <Picker
                        selectedValue={tipoPesq}
                        style={styles.pickerStyle}
                        onValueChange={(itemValue, itemIndex) => handleSearchSelect(itemValue)}
                    >
                        <Picker.Item label="Tìtulo" value="titulo" style={styles.pickerItems} />
                        <Picker.Item label="Por Cidade" value="cidade" style={styles.pickerItems} />
                        <Picker.Item label="Por Área" value="area" style={styles.pickerItems} />
                        <Picker.Item label="Ocorrencias Reportadas" value="reclamacoes" style={styles.pickerItems} />
                    </Picker>
                </View>
                <TouchableOpacity onPress={botaoPressionado} style={styles.botaoPesq}>
                    <Feather style={styles.styleSearch}
                        name="search" size={40}
                    />
                </TouchableOpacity>
            </View>
            {tipoPesq == 'reclamacoes' ?
                <View style={styles.ocorrenciesList}>
                    <ScrollView>
                        <View>
                            <Text style={{ color: 'red', alignSelf: 'center' }}> Ocorrencias Reportadas </Text>
                            <OcorrenciesList/>
                        </View>
                    </ScrollView>
                </View>
                :
                <View style={styles.vacanciesFound}>
                    <ScrollView >
                        <View>
                            <Text style={{ color: Colors.text, alignSelf: 'center' }}> Vagas Pesquisadas </Text>
                            <ResultsList results={vagas} navigation={navigation}
                                search={searchValue} searchtype={tipoPesq}
                            />
                        </View>
                    </ScrollView>
                </View>
            }
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
        width: 57,
        borderWidth: 1,
    },

    vacanciesFound: {
        marginTop: 23,
        height: 400,
        width: 400,
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 1,
        marginBottom: 10,
        color: Colors.text,
        borderColor: Colors.text,
    },

    ocorrenciesList: {
        marginTop: 23,
        height: 400,
        width: 400,
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 1,
        marginBottom: 10,
        color: 'red',
        borderColor: 'red',
    },
    image: {
        //width: 133.3,
        //height: 76,
        borderWidth: 1,
        alignItems: "center",
    },
    pickerView: {
        alignItems: "flex-end",
        flexDirection: "row",
        alignSelf: "flex-end",
        backgroundColor: Colors.primary,
        borderWidth: 1,
    },
    pickerStyle: {
        color: Colors.text,
        height: 50,
        width: 150,
    },
    menuinferior: {
        backgroundColor: Colors.menuinferior,
        flexDirection: "row",
        alignSelf: "center",
        bottom: -35,
        borderWidth: 1,
    },
    pickerItems: {
        color: Colors.text,
        backgroundColor: Colors.text,
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

/*
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



                <View style={styles.vacanciesFound}>
                    <ScrollView >
                        {tipoPesq == 'reclamacoes' ?
                            <View>
                            <Text style={{ color: 'red', alignSelf: 'center' }}>Empresas acusadas por usuários</Text>
                            </View>
                            :
                            <View>
                                <Text style={{ color: Colors.text, alignSelf: 'center' }}> Vagas Pesquisadas </Text>
                                <ResultsList results={vagas} navigation={navigation}
                                    search={searchValue} searchtype={tipoPesq}
                                />
                            </View>
                        }
                    </ScrollView>
                </View>

*/
