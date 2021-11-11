import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Button } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import ResultsList from "../components/ResultsList";
import firebase from 'firebase';
import { Colors } from '../constants/Colors';


const HomeScreen = ({ navigation, user, vacancies }) => {

    const genericUser = {
        name: 'Generic User Name',
        gender: 'naobinario',
        email: 'genericusname@email.com',
        password: 'password',
        date: '01-01-2001',
    };
    const vagas = navigation.state.params.vacancies;
    const usuario = navigation.state.params.user;
    
    return (
        <View style={styles.screen}>
            <View style={styles.faixaUserIcon}>
                <Image source={require('../../assets/UserIcon.png')} style={styles.img} />
            </View>
            <View style={styles.faixasuperior}>
                <Text style={styles.text}>Olá, {usuario.name}!</Text>
            </View>
            <View style={styles.vacancies}>
                <ScrollView style={styles.faixaVagas}>
                    <ResultsList results={vagas} navigation={navigation} search={''} searchtype={''} > </ResultsList>
                </ScrollView>
            </View>
            <View style={styles.menuinferior}>
                <TouchableOpacity onPress={() => navigation.navigate('Home', { user: usuario, vacancies: vagas })} style={styles.image}>
                    <Feather style={styles.styleFeather}
                        name="home" size={50}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Search', { user: usuario, vacancies: vagas })} style={styles.image}>
                    <Feather style={styles.styleFeather}
                        name="search" size={50}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings', { user: usuario, vacancies: vagas })} style={styles.image}>
                    <Feather style={styles.styleFeather}
                        name="settings" size={50}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export const homeScreenOptions = () => {
    return {
        headerTitle: () => (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Home</Text>
            </View>
        ),
        headerStyle: {
            backgroundColor: Colors.primary,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTintColor: Colors.whitefilling
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.primary,
        padding: 10,
    },
    faixaUserIcon: {
        backgroundColor: Colors.primary,
    },
    faixasuperior: {
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    text: {
        color: Colors.text,
    },
    img: {
        width: 70,
        height: 70,
        resizeMode: 'stretch',
        marginRight: 20,
        alignSelf: 'flex-end',
    },

    faixaVagas: {
        alignContent: "center",
    },
    vacancies: {
        marginTop: 5,
        height: 420,
        width: 400,
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 1,
        marginBottom: 5,
        color: Colors.text,
        borderColor: Colors.text,
    },
    image: {
        borderWidth: 1,
        alignItems: "center",
    },

    scrollvagas: {
        width: 300,
        height: 340,
        alignSelf: 'center',
        display: 'flex',
    },
    menuinferior: {
        backgroundColor: Colors.menuinferior,
        flexDirection: "row",
        alignSelf: "center",
        position: 'absolute',
        bottom: 2,
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
    }
});

export default HomeScreen;