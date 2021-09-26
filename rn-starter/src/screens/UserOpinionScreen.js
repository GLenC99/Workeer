import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native";
import firebase from 'firebase';

const UserOpinionScreen = ({ navigation, user }) => {
    const equipeemail = "emailworkeer@email.com";
    const [opinion, setOpinion] = useState();

    const handleOpinion = (val) => {
        if (val.length != 0) {
            setOpinion(val);
        };
    };

    const sendOpinion = () => {
        console.log(opinion);
        // Erro: _firebase.default.firestore().collection("Users Opinion").setDoc(Ir só com o set tbm não funciona)
        /*
        firebase.firestore().collection("Users Opinion").set({
            content: opinion,
        }).then(() => { 
            console.log("Opinião Inserida");
        }).catch((erro) => {
            console.log("Erro no envio", erro);
        });
        */
    };

    return (
        <View>
            <View style= {styles.title}>
                <Text>Opinião sobre o Sistema</Text>
            </View>
            <View style= {styles.textInput}>
                <TextInput
                    multiline={true}
                    onChangeText={handleOpinion}
                    placeholder={"Por favor, compartilhe conosco sua opinião sobre o sistema! Apresente seu ponto de vista quanto ao que pode ser melhorado e o que deve ser mantido!"}
                />
            </View>
            <View style= {styles.sendButton}>
                <TouchableOpacity onPress={sendOpinion}>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>
            <View style= {styles.warning1}>
                <Text>
                    Caso de problemas urgentes por favor entre em contato através do email {equipeemail}
                </Text>
            </View>
            <Text style={styles.textWarning}>
                (Caso tenha ocorrido algum tipo de problema ou descriminação relacionado a uma das empresas recomendadas pelo sistema
                por favor realize sua ocorrencia retornando a tela de configurações e nos informe através da opção reportar problemas)
            </Text>
            <View style={styles.button}>
                <Button
                    title="VOLTAR"
                    onPress={() => navigation.navigate('Settings')}
                ></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        marginVertical: 10,
        borderWidth: 1,
    },

    textInput: {
        height: 300,
        width: 400,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderWidth: 1,
    },

    sendButton: {
        alignSelf: 'center',
        height: 20,
        width: 100,
        backgroundColor: 'green',
        marginVertical: 10,
        alignContent:'center',
        alignItems: 'center',
        borderWidth: 2,
    },

    warning1: {
        marginVertical: 10,
        borderWidth: 1,
    },

    textWarning: {
        fontSize: 8,
        color: 'red',
        borderWidth: 1,
    },
    button: {
        width: "40%",
        margin: 10,
        backgroundColor: "red",
        alignContent: "center",
        alignSelf: "center",
        marginTop: 10,
        borderWidth: 1,
    },
});

export default UserOpinionScreen;