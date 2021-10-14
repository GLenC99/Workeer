import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VacanciesObject from '../components/VacanciesObject';

const VacanciesScreen = ({ navigation }) => {
    const vaga = navigation.state.params.vaga ? navigation.state.params.user : 'vaga1';
    const id: "doc.id";
    const titulo: "doc.data().titulo";
    const link: "doc.data().link";
    const descricao: "doc.data().descricao";
    const local: "doc.data().local";
    const funcao: "doc.data().funcao";
    const numerodevagas: "doc.data().numerodevagas";


    return (
        <View>
            <Text style={styles.title}>Tela das Vagas</Text>
            <View style={styles.vacancytitle}>
            <Text>{id}</Text>
            </View>   
            <View style={styles.vacancydescript}>
            <Text>{descricao}</Text>
            </View>         
            <View style={styles.vacancyinfo}>
            <Text>{funcao}</Text>
            <Text>{local}</Text>
            <Text>{numerodevagas}</Text>
            </View>
            <View style={styles.vacancylink}>
                <Text>{link}</Text>
            </View>

        </View>
    );
};

export const vacanciesScreenOptions = () => {
    return {
        headerTitle: () => (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{titulo}</Text>
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    vacancytitle: {

    },
    vacancydescript: {

    },
    vacancyinfo: {

    },
    vacancylink: {

    },
    header: {

    },
    headerTitle: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: 'bold',
    },

});
export default VacanciesScreen;
