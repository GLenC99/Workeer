import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VacanciesObject from '../components/VacanciesObject';

const VacanciesScreen = ({ navigation, user }) => {
    const usuario = navigation.state.params.user;

    return (
        <View>
           {/* <Text style={styles.title}>Tela das Vagas</Text>
            <View style={styles.vacancytitle}>
            <Text>{vaga.id}</Text>
            </View>   
            <View style={styles.vacancydescript}>
            <Text>{vaga.descricao}</Text>
            </View>         
            <View style={styles.vacancyinfo}>
            <Text>{vaga.funcao}</Text>
            <Text>{vaga.local}</Text>
            <Text>{vaga.numerodevagas}</Text>
            </View>
            <View style={styles.vacancylink}>
                <Text>{vaga.link}</Text>
            </View>*/}

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
