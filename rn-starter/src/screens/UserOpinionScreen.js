import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity, TextArea } from "react-native";
import firebase from 'firebase';
import { Colors } from "../constants/Colors";

const UserOpinionScreen = ({ navigation, user, vacancies}) => {
    
    const usuario = navigation.state.params.user;
    const vagas = navigation.state.params.vacancies;
    const equipeemail = "emailworkeer@email.com";
    const [opinion, setOpinion] = useState();

    useEffect(() => {
        Alert.alert('OBS', 'Caso tenha ocorrido algum tipo de problema ou discriminação relacionado a uma das empresas recomendadas pelo sistema, realize sua ocorrencia retornando a tela de configurações e nos informe através da opção reportar problemas');
    }, []);

    const gotoSettings = () => {
        navigation.navigate('Settings', { user: usuario , vacancies: vagas });
    }
    const handleOpinion = (val) => {
        if (val.length != 0) {
            setOpinion(val);
        };
    };

    const sendOpinion = () => {
        firebase.firestore().collection("UserOpinions").doc().set({
            id: usuario.id,
            opinion: opinion,
        }).then(() => {
            console.log("Opinião Inserida");
            gotoSettings();

        }).catch((erro) => {
            console.log("Erro no envio", erro);
        });
    };
    
    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.title}>Opine sobre o Sistema</Text>
            </View>
            
            <View style={styles.textInput}>
                <TextInput
                    multiline={false}
                    numberOfLines={5}
                    onChangeText={handleOpinion}
                    placeholder={"Por favor, compartilhe conosco sua opinião sobre o sistema!"}
                />
            </View>
            
            <TouchableOpacity onPress={sendOpinion}>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Enviar </Text>
                    </View>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={gotoSettings}>
                <View style={styles.buttonContainer, { marginTop: 20 }}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Voltar </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <Text>{opinion}</Text>
        </View>
    );
};

export const userOpinionScreenOptions = () => {
    return {
        headerTitle: () => (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>User Opinion</Text>
            </View>
        ),
        headerStyle: {
            backgroundColor: Colors.primary,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTintColor: Colors.whitefilling,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.whitefilling,
        padding: 10,
    },
    title: {
        alignSelf: 'center',
        marginVertical: 10,
        color: Colors.text,
    },

    textInput: {
        height: 300,
        width: 400,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: Colors.text,
    },

    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        marginTop: 20,
        backgroundColor: Colors.primary,
        borderRadius: 7,
        width: 343,
        height: 48,
        alignSelf: 'center',
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        color: Colors.text,
    },

    warning1: {
        marginVertical: 12,
        color: Colors.text,
    },

    textWarning: {
        fontSize: 10,
        color: 'red',
    },
    header: {

    },
    headerTitle: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default UserOpinionScreen;