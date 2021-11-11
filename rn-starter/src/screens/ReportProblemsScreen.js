import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert} from "react-native";
import firebase from 'firebase';
import { Colors } from "../constants/Colors";

const ReportProblemsScreen = ({navigation, user, vacancies}) => {
    //Não está enviando as ocorrencias, nem dando um retorno pra explicar
    const usuario = navigation.state.params.user;
    const vagas = navigation.state.params.vacancies;
    
    useEffect(() => {
        Alert.alert('OBS', 'Caso o problema seja o sistema em si e não uma ocorrencia relacionada as vagas ou empresa recomendada por favor retorne a tela de Configurações e reporte na tela de Opinião sobre o sistema');
    }, []);
    
    const gotoSettings = () => {
        navigation.navigate('Settings',{ user: usuario , vacancies: vagas });
    }

    const [problem, setProblem] = React.useState({
        empresa: '',
        ocorrencia: '',
        datadaocorrencia: '',
        localocorrencia: '',
        descricaodetalhada: '',
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

    const handlePlaceChange = (val) => {
        if (val.length != 0) {
            setProblem({
                ...problem,
                localocorrencia: val,
            });
        };
    };

    const handleDescriptionChange = (val) => {
        if (val.length != 0) {
            setProblem({
                ...problem,
                descricaodetalhada: val,
            });
        };
    };

    const sendReport = () => {
        firebase.firestore().collection("ProblemsReported").doc().set({
            company: problem.empresa,
            date: problem.datadaocorrencia,
            location: problem.localocorrencia,
            occurrence: problem.ocorrencia,
            descript: problem.descricaodetalhada,
        }).then(() => { 
            Alert.alert("Ocorrência Reportada");
            gotoSettings();

        }).catch((erro) => {
            console.log("Erro no envio", erro);
        });
    };

    return (
        <View style={styles.screen}> 
            <View style={styles.formContainer}>
                <Text style={styles.standardTitle}>Ocorrencia</Text>
                <Text style={styles.text}>Nome da Empresa</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleIncChange}
                />
                <Text style={styles.text}>Data da Ocorrencia (Dia/Mês/Ano ou Mês/Ano)</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleDateChange}
                />
                <Text style={styles.text}>Local (Cidade - Estado) da ocorrência</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handlePlaceChange}
                />
                <Text style={styles.text}>Ocorrencia</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleProblemChange}
                />
                <Text style={styles.text}>Descreva com mais detalhes, se quiser, o ocorrido: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleDescriptionChange}
                />
            </View>
            <TouchableOpacity onPress={sendReport}>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Enviar </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings', { user: usuario , vacancies: vagas })}>
                <View style={styles.buttonContainer,{marginTop:20}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Voltar </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export const reportProblemsScreenOptions = () => {
    return {
        headerTitle: () => (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Report Problems</Text>
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
        backgroundColor: Colors.whitefilling,
        padding: 10,
    },
    header: {

    },
    headerTitle: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: Colors.primary,
        color: Colors.primary,
        borderRadius: 7,
        width: 200,
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
    formContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    input: {
        borderBottomWidth: 2,
        borderColor: Colors.primary,
        color: Colors.primary,
        fontWeight: 'bold',
    },
    standardTitle: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    text: {
        color: Colors.text,
        fontWeight: 'bold',
    },
    card:{
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 5,
        padding: 5,
        borderColor: '#931314',
        borderWidth: 2
    },
    cardTitle:{
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    textDescription:{
        color: 'black',
        fontSize: 14
    }

});

export default ReportProblemsScreen;

/*
<View style={styles.faixaSuperior}>
                <Text fontSize = {10}>Por favor nos apresente problemas e situações desconfortáveis similares, abaixo, junto das informações do ocorrido</Text>
            </View>
            <View style={styles.companyLine}>
                <TextInput placeholder="Empresa" onChangeText={handleIncChange} />
            </View>
            <View style={styles.dateLine}>
                <TextInput placeholder="Data da ocorrencia (Dia/Mês/Ano ou Mês/Ano)" onChangeText={handleDateChange}/>
            </View>
            <View style={styles.occurrencyLine}>
                <TextInput placeholder="Ocorrência" onChangeText={handleProblemChange} />
            </View>
            <View style={styles.sendButton}>
                <TouchableOpacity onPress={sendReport}>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.warningStyle}>
                <Text>Caso o problema seja o sistema em si e não uma ocorrencia relacionada as vagas ou empresa recomendada por favor retorne a tela de Configurações e reporte na tela de Opinião sobre o sistema </Text>
            </View>
*/