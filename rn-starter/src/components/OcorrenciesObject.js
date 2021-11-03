import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from '../constants/Colors';

const OcorrenciesObject = ({ocorrencia}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{ocorrencia.empresa}</Text>
            <Text>{ocorrencia.datadaocorrencia}</Text>
            <Text style={styles.textDescription}>{ocorrencia.ocorrencia}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 5,
        padding: 5,
        borderColor: '#931314',
        borderWidth: 2,
        borderColor: 'red',
    },
    cardTitle: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardinfo: {
        color: 'black',
        fontSize: 14,
    },
    textDescription: {
        color: 'black',
        fontSize: 14
    },

});

export default OcorrenciesObject;