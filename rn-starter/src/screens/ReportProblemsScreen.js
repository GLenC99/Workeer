import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native";
import firebase from 'firebase';

const ReportProblemsScreen = ({navigation}) => {
    const [problem, setProblem] = React.useState({
        empresa: '',
        ocorrencia: '',
        datadaocorrencia: '',
    });

    const handleIncChange = (val) => {
        if (val.length != 0) {
            setProblem({
                ...problem,
                empresa: val,
            });
        };
    };

    const handleProblemChange = (val) => {
        if (val.length != 0) {
            setProblem({
                ...problem,
                ocorrencia: val,
            });
        };
    };

    const handleDateChange = (val) => {
        if (val.length != 0) {
            setProblem({
                ...problem,
                datadaocorrencia: val,
            });
        };
    };

    const sendReport = () => {
        console.log(problem);
        //Problema vai ser parecido com o do Users Opinion
        firebase.firestore().collection("ProblemsReported").doc().set({
            company: problem.empresa,
            occurrence: problem.ocorrencia,
            date: problem.datadaocorrencia,
        }).then(() => { 
            console.log("Opinião Inserida");
        }).catch((erro) => {
            console.log("Erro no envio", erro);
        });
    };

    return (
        <View>
            <View style={styles.faixaSuperior}>
                <Text fontSize = {10}>Por favor nos apresente problemas e situações desconfortáveis similares, abaixo, junto das informações do ocorrido</Text>
            </View>
            <View style={styles.companyLine}>
                <TextInput placeholder="Empresa" onChangeText={handleIncChange} />
            </View>
            <View style={styles.occurrencyLine}>
                <TextInput placeholder="Ocorrência" onChangeText={handleProblemChange} />
            </View>
            <View style={styles.dateLine}>
                <TextInput placeholder="Data da ocorrencia (O máximo de exatidão possivel na data)" onChangeText={handleDateChange}/>
            </View>
            <View style={styles.sendButton}>
                <TouchableOpacity onPress={sendReport}>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.warningStyle}>
                <Text>Caso o problema seja o sistema em si e não uma ocorrencia relacionada as vagas ou empresa recomendada por favor retorne a tela de Configurações e reporte na tela de Opinião sobre o sistema </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    faixaSuperior:{
        marginVertical: 10,
        alignItems: 'center',
        fontSize: 15,
    },
    companyLine: {

    },
    occurrencyLine: {

    },
    dateLine:{

    },
    sendButton:{

    },
    warningStyle: {

    },
});

export default ReportProblemsScreen;