import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from '../constants/Colors';

const VacanciesObjects = ({ vaga }) => {
    //console.log("Vaga:" + vaga);
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{vaga.nome}</Text>
            <Text>{vaga.link}</Text>
            <Text>{vaga.localvaga}</Text>
            <Text>{vaga.numvagas}</Text>
            <Text style={styles.textDescription}>Posição para gerenciar as operaçõe logísticas de uma transportadora </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    objectStyle: {
        height: 85,
        width: 85,
        alignItems: 'center',
        backgroundColor: '#99bbff',
        marginBottom: 10,
        fontSize: 20,
        alignSelf: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        marginVertical: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 5,
        padding: 5,
        borderColor: '#931314',
        borderWidth: 2
    },
    cardTitle: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    textDescription: {
        color: 'black',
        fontSize: 14
    }
});

export default VacanciesObjects;