import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Button } from "react-native";
import VacanciesObjects from "../components/VacanciesObject";
import Feather from 'react-native-vector-icons/Feather';
import { FlatList } from "react-native-gesture-handler";
import ResultsList from "../components/ResultsList";
import firebase from 'firebase';
import { Colors } from '../constants/Colors';


const HomeScreen = ({ navigation }) => {
    console.log('[Home Screen inicializada]')
    const [vagas, setVagas] = useState([]);
    //const user = navigation.state.params.user;
    const user = navigation.state.params ? navigation.state.params.user : 'andre';

    useEffect(() => {
        /*
        setVagas(
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
            */
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

    }, []);

    console.log("Vagas: ", vagas);

    //user1@email.com user1passwrod

   

    return (
        <View style={styles.screen}>
            <View style={styles.faixaUserIcon}>
                    <Image source={require('../../assets/UserIcon.png')} style={styles.img} />
            </View>
            <View style={styles.faixasuperior}>
                <Text style={styles.text}>Olá, {"user.name"}!</Text>
            </View>
            <ScrollView style={styles.faixaVagas}>
                <ResultsList results={vagas}> </ResultsList>
            </ScrollView>
            <View style={styles.menuinferior}>
                <TouchableOpacity onPress={() => navigation.navigate('Home', { user: user })} style={styles.image}>
                    <Feather style={styles.styleFeather}
                        name="home" size={50}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Search', { user: user }, {vagas:vagas})} style={styles.image}>
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
        backgroundColor: 'white'
    },
    faixasuperior: {
        alignSelf: 'flex-start',
        marginBottom: 10,
        // borderWidth: 1,
    },
    text: {
        color: Colors.text,
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        marginRight: 20,
        alignSelf: 'flex-end',
    },

    faixaVagas: {
        // width: 410,
        // borderWidth: 1,
        alignContent: "center",
        marginBottom: 20,
    },
    image: {
        width: 133.3,
        height: 76,
        // borderWidth: 1,
        alignItems: "center",
    },

    scrollvagas: {
        width: 300,
        height: 350,
        alignSelf: 'center',
        display: 'flex',

    },
    menuinferior: {
        backgroundColor: Colors.menuinferior,
        flexDirection: "row",
        alignSelf: "center",
        position: 'absolute',
        bottom: 0,
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

/*
 const getVagasInfo = () => {
        console.log("Entrou na função");
        //console.log(firebase.firestore().collection("Vagas").get()); //n funfou
        /*
        const q = query(collection(db, "Vagas"), where("Local", "==", "CAMPINAS"));
    
        const querySnapshot = getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        

        // firebase.firestore().collection('Vagas').get().then(function (querySnapshot) {
        //     
        //     if (querySnapshot.data().foreach) {
        //         console.log(querySnapshot.data());
        //     } else {
        //         console.log("No such document!");
        //     }
        //     
        //     querySnapshot.foreach((doc) => {
        //         console.log("Documento: ", doc);

        //     })
        // }).catch(function (error) {
        //     console.error(error);
        // });
    }
*/