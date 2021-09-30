import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import VacanciesObjects from "../components/VacanciesObject";
import Feather from 'react-native-vector-icons/Feather';
import { FlatList } from "react-native-gesture-handler";
import ResultsList from "../components/ResultsList";
import firebase from 'firebase';

const nome = "Nome User"


// As informações das vagas não são apresentadas, precisa receber o user e pegar o nome dele
const HomeScreen = ({ navigation }) => {
    const [vagas, setvagas] = useState([]);
    const user = navigation.state.params.user;
    //console.log(navigation.state.params.user);

    useEffect(() => {
        firebase.firestore().collection('Vagas').get().then(function (querySnapshot) {
            querySnapshot.foreach((doc) => {
                console.log("Documento: ",doc);

            })
        }).catch(function (error) {
                console.error(error);
            });

    },[]);

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
        */

        firebase.firestore().collection('Vagas').get().then(function (querySnapshot) {
            /*
            if (querySnapshot.data().foreach) {
                console.log(querySnapshot.data());
            } else {
                console.log("No such document!");
            }
            */
            querySnapshot.foreach((doc) => {
                console.log("Documento: ",doc);

            })
        }).catch(function (error) {
                console.error(error);
            });

    }



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
            <View style={styles.faixaUserIcon}>
                <TouchableOpacity onPress={getVagasInfo}>
                    <Image source={require('../../assets/UserIcon.png')} style={styles.img} />
                </TouchableOpacity>
            </View>
            <View style={styles.faixasuperior}>
                <Text>Olá, {"user.name"}!</Text>
            </View>
            <View style={styles.faixaVagas}>
                <ResultsList results={vagas}> </ResultsList>
            </View>
            <View style={styles.menuinferior}>
                <TouchableOpacity onPress={() => navigation.navigate('Home'),{user : user}} style={styles.image}>
                    <Feather
                        name="home"
                        color="black"
                        size={80}
                        marginLeft={40}
                        marginRight={40}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Search'),{user : user}} style={styles.image}>
                    <Feather
                        name="search"
                        color="black"
                        size={80}
                        marginLeft={40}
                        marginRight={40}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings',{user : user})} style={styles.image}>
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
    faixaUserIcon: {
        borderWidth: 1,
    },
    faixasuperior: {
        alignSelf: 'flex-start',
        marginBottom: 10,
        borderWidth: 1,
    },

    img: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        marginRight: 20,
        alignSelf: 'flex-end',
    },

    faixaVagas: {
        width: 410,
        height: 350,
        borderWidth: 1,
        alignContent: "center",
        marginBottom: 20,

    },
    image: {
        width: 133.3,
        height: 76,
        borderWidth: 1,
        alignItems: "center",
        borderWidth: 1,
    },

    scrollvagas: {
        width: 300,
        height: 350,
        alignSelf: 'center',
        display: 'flex',

    },
    menuinferior: {
        backgroundColor: 'lime',
        flexDirection: "row",
        width: 400,
        alignSelf: "center",
        borderWidth: 1,
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