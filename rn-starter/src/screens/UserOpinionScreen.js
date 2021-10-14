import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity } from "react-native";
import firebase from 'firebase';
import { Colors } from "../constants/Colors";

const UserOpinionScreen = ({ navigation }) => {
    const user = navigation.state.params ? navigation.state.params.user : 'andre';
    const equipeemail = "emailworkeer@email.com";
    const [opinion, setOpinion] = useState();

    useEffect(() => {
        Alert.alert('OBS', 'Caso tenha ocorrido algum tipo de problema ou discriminação relacionado a uma das empresas recomendadas pelo sistema, realize sua ocorrencia retornando a tela de configurações e nos informe através da opção reportar problemas');
    }, []);

    const gotoSettings = () => {
        navigation.navigate('Settings', { user: user });
    }
    const handleOpinion = (val) => {
        if (val.length != 0) {
            setOpinion(val);
        };
    };

    const sendOpinion = () => {
        console.log(opinion);
        firebase.firestore().collection("UserOpinions").doc().set({
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
            <TextInput
                multiline={false}
                onChangeText={handleOpinion}
                placeholder={"Por favor, compartilhe conosco sua opinião sobre o sistema! Apresente seu ponto de vista quanto ao que pode ser melhorado e o que deve ser mantido!"}
            />
            <View style={styles.textInput}>
                <textarea onChangeText={handleOpinion} rows="20" cols="50" >

                </textarea>
            </View>
            <TouchableOpacity onPress={sendOpinion}>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Enviar </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings', { user: user })}>
                <View style={styles.buttonContainer,{marginTop:20}}>
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
        autoCapitalize: "words",
    },

    buttonContainer: {
        alignItems: 'center'
    },
    button: {
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
        //borderWidth: 1,
    },

    textWarning: {
        fontSize: 10,
        color: 'red',
        //borderWidth: 1,
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


/*

<TextInput
                    multiline={false}
                    onChangeText={handleOpinion}
                    placeholder={"Por favor, compartilhe conosco sua opinião sobre o sistema! Apresente seu ponto de vista quanto ao que pode ser melhorado e o que deve ser mantido!"}
                />

                */