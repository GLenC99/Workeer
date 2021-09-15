import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import VacanciesObjects from "../components/VacanciesObject";
import Feather from 'react-native-vector-icons/Feather';
import { FlatList } from "react-native-gesture-handler";
import ResultsList from "../components/ResultsList";

const nome = "Nome User"



const HomeScreen = ({ navigation }) => {
    const [vagas, setvagas] = useState([]);

    useEffect(() => {
        console.log("[VacanciesTest]");
        setvagas(
            [
                {
                    id: 0,
                    nome: "Vaga1",
                    link: "http://vaga1",
                    localvaga: "Campinas",
                    numvagas: 2,
                },
                {
                    id: 1,
                    nome: "Vaga2",
                    link: "http://vaga2",
                    localvaga: "Hortolandia",
                    numvagas: 1,
                },
                {
                    id: 2,
                    nome: "Vaga3",
                    link: "http://vaga3",
                    localvaga: "Campinas",
                    numvagas: 5,
                },
            ]
        )
    }, []);

    return (
        <ScrollView>
            <View>
                <Image source={require('../../assets/UserIcon.png')} style={styles.img} />
            </View>
            <View style={styles.faixasuperior}>
                <Text>Olá, {nome}!</Text>
            </View>
                <ResultsList results = {vagas}> </ResultsList>
            <View style={styles.menuinferior}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style= {styles.image}>
                    <Feather
                        name="home"
                        color="black"
                        size={80}
                        marginLeft={40}
                        marginRight={40}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} style= {styles.image}>
                    <Feather
                        name="search"
                        color="black"
                        size={80}
                        marginLeft={40}
                        marginRight={40}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')} style= {styles.image}>
                    <Feather
                        name="settings"
                        color="black"
                        size={80}
                        marginLeft={40}
                        marginRight={40}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        marginRight: 20,
        alignSelf: 'flex-end',
    },
    faixasuperior: {
        alignSelf: 'flex-start',
        marginBottom: 30,
    },
    image: {
        width: 131,
        height: 80,
        borderWidth:1,
        alignItems: "center",
    },

    scrollvagas: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        display: 'flex',
    },
    menuinferior: {
        backgroundColor: 'lime',
        flexDirection: "row",
    },
});

export default HomeScreen;

/*
<ScrollView style={styles.scrollvagas, { backgroundColor: '#a3a3c2', width: 300, height: 300, alignSelf: "center", marginBottom: 30 }}>
<VacanciesObjects nomevaga="vaga1" link="http://vaga1" localvaga="Campinas SP" numvagas={1} />
                <VacanciesObjects nomevaga="vaga2" link="http://vaga2" localvaga="Sumaré SP" numvagas={2} />
                <VacanciesObjects nomevaga="vaga3" link="http://vaga3" localvaga="Hortolandia SP" numvagas={3} />
                <VacanciesObjects nomevaga="vaga4" link="http://vaga4" localvaga="Campinas SP" numvagas={4} />
                <VacanciesObjects nomevaga="vaga5" link="http://vaga5" localvaga="Campinas SP" numvagas={5} />
                <VacanciesObjects nomevaga="vaga6" link="http://vaga6" localvaga="Campinas SP" numvagas={6} />
                <VacanciesObjects nomevaga="vaga7" link="http://vaga7" localvaga="Sumaré SP" numvagas={7} />
</ScrollView>
*/