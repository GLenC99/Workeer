import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VacanciesObject from '../components/VacanciesObject';

const VacanciesScreen = ({ navigation }) => {
    title = "Título";
    job = "Função";
    local = "Local";
    numvac = "Numero de Vagas";
    description = "Descrição";
    link = "Link";


    return (
        <View>
            <Text style={styles.title}>Tela das Vagas</Text>
            <View style={styles.vacancytitle}>
            <Text>{title}</Text>
            </View>   
            <View style={styles.vacancydescript}>
            <Text>{description}</Text>
            </View>         
            <View style={styles.vacancyinfo}>
            <Text>{job}</Text>
            <Text>{local}</Text>
            <Text>{numvac}</Text>
            </View>
            <View style={styles.vacancylink}>
                <Text>{link}</Text>
            </View>

        </View>
    );
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

});
export default VacanciesScreen;
