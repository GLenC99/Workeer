import React from "react";
import { StyleSheet, Text, Image, View, ScrollView, Button, Alert, TouchableOpacity } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from "../constants/Colors";
const nome = "Nome da Pessoa";

//precisa receber as informações do usuario para poder associar reclamações e alterá-las nessa tela, 
const SettingsScreen = ({ navigation, user, vacancies }) => {

    /*
    const genericUser = {
        name: 'Generic User Name',
        gender: 'naobinario',
        email: 'genericusname@email.com',
        password: 'password',
        date: '01-01-2001',
    };
    */
    const usuario = navigation.state.params.user;
    const vagas = navigation.state.params.vacancies;

    return (
        <View>
            <View style={styles.Iconimg}>
                <Feather style={styles.styleFeather}
                    name="user" size={40}
                />
            </View>
            <View style={styles.faixasuperior}>
                <Text style={{ marginBottom: 20 }, { color: Colors.text }}>{usuario.name}</Text>
            </View>
            <View style={styles.conteudo}>
                <View style={styles.inforows}>
                    <Feather style={styles.styleFeather}
                        name="info" size={20}
                    />
                    <Text onPress={() => Alert.alert('Sobre Workeer', 'Versão Alpha 0.0.1')} style={styles.optionsText}>Sobre o aplicativo</Text>
                </View>
                <View style={styles.inforows}>
                    <Feather style={styles.styleFeather}
                        name="clipboard" size={20}
                    />
                    <Text onPress={() => navigation.navigate('UserOpinion', { user: usuario, vacancies: vagas })} style={styles.optionsText}>Opine sobre o sistema</Text>
                </View>
                <View style={styles.inforows}>
                    <Feather style={styles.styleFeather}
                        name="edit" size={20}
                    />
                    <Text onPress={() => navigation.navigate('AlterInfo', { user: usuario, vacancies: vagas })} style={styles.optionsText}>Alterar informações pessoais</Text>
                </View>
                <View style={styles.inforows}>
                    <Feather style={styles.styleFeather}
                        name="frown" size={20}
                    />
                    <Text onPress={() => navigation.navigate('ReportProblems', { user: usuario, vacancies: vagas })} style={styles.optionsText}>Reportar problemas</Text>
                </View>
            </View>
                <View style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}> Sair </Text>
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

export const settingScreenOptions = () => {
    return {
        headerTitle: () => (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Settings</Text>
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
    faixasuperior: {
        alignSelf: 'center',
        marginBottom: 70,
    },
    Iconimg: {
        width: 40,
        height: 40,
    },
    img: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
        marginRight: 15,
        marginLeft: 5,
    },
    inforows: {
        marginTop: 10,
        flexDirection: "row",
        display: 'flex',
        marginBottom: 10,
        marginLeft: 10,
    },

    optionsText: {
        marginLeft: 5,
        color: Colors.text,
    },

    image: {
        borderWidth: 1,
        alignItems: "center",

    },

    conteudo: {
        marginTop:50,
        alignItems: "flex-start",
        marginHorizontal: 5,
    },

    button: {
        marginTop:80,
        backgroundColor: 'white',
        color: Colors.primary,
        borderRadius: 7,
        width: 343,
        height: 48,
        alignSelf: 'center',
        backgroundColor: Colors.text,
    },

    buttonText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        color: Colors.menuinferior,
    },

    menuinferior: {
        backgroundColor: Colors.menuinferior,
        flexDirection: "row",
        alignSelf: "center",
        position: 'absolute',
        bottom: -200,
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

export default SettingsScreen;