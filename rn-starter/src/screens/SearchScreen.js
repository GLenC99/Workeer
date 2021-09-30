import React, {useState} from "react";
import {StyleSheet,View,Image,TouchableOpacity, Alert, Text} from "react-native";
import SearchBar from "../components/SearchBar";
import SearchBarScreen from "../components/SearchBarScreen.js";
import Feather from 'react-native-vector-icons/Feather';
import ResultsList from "../components/ResultsList";

/*
const handleSearch = () => {
    this.setState({query: text});
}
*/
 //Precisa reconhecer o que está sendo inserido e procurar por vagas no firebase que contenham o que é 
 //pesquisado em alguma parte e retornar para o usuário em uma lista


const SearchScreen = ({navigation}) => {
    const botaoPressionado= () => {
        Alert.alert("Botão Pressionado")
    }
    const user = navigation.state.params.user;

    return(
        <View>
        <SearchBarScreen >
            <View style={styles.barraStyle}>
            <SearchBar/>
            <TouchableOpacity onPress={botaoPressionado} style={styles.botaoPesq}>
                    <Feather
                        name="search"
                        color="black"
                        size={40}
                        marginLeft={40}
                        marginRight={40}
                    />
            </TouchableOpacity>
            </View>
            <View style={styles.vacanciesFound}>
                <Text> Vagas Pesquisadas </Text>
                <ResultsList> </ResultsList>
            </View>
            <View style={styles.menuinferior}>
                <TouchableOpacity onPress={() => navigation.navigate('Home',{user : user})} style={styles.image}>
                    <Feather
                        name="home"
                        color="black"
                        size={75}
                        marginLeft={40}
                        marginRight={40}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Search',{user : user})} style={styles.image}>
                    <Feather
                        name="search"
                        color="black"
                        size={75}
                        marginLeft={40}
                        marginRight={40}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings',{user : user})} style={styles.image}>
                    <Feather
                        name="settings"
                        color="black"
                        size={75}
                        marginLeft={40}
                        marginRight={40}
                    />
                </TouchableOpacity>
            </View>
        </SearchBarScreen>
        </View>
        
        
    );
};

const styles = StyleSheet.create({
    menuinferior: {
        backgroundColor: 'lime',
        flexDirection: "row",
        width: 400,
        alignSelf: "center",
        borderWidth: 1,
    },
    barraStyle: {
        flexDirection: "row",
        borderWidth: 1,
    },
    botaoPesq: {
        alignItems: "center",
        marginLeft: 15,
        borderWidth: 1,
    },
    
    vacanciesFound:{
        marginTop: 10,
        height: 430,
        width: 400,
        alignItems: "center",
        //alignContent: "center",
        alignSelf: "center",
        borderWidth: 1,
        marginBottom:10,
    },

    image: {
        width: 133.3,
        height: 76,
        borderWidth: 1,
        alignItems: "center",
    },

});

export default SearchScreen;