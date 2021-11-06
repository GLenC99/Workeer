import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from '../constants/Colors';

const OcorrenciesObject = ({ocorrencia}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{ocorrencia.company}</Text>
            <Text style={styles.textDescription}>{ocorrencia.date}</Text>
            <Text style={styles.textDescription}>{ocorrencia.location}</Text>
            <Text style={styles.textDescription}>{ocorrencia.occurrence}</Text>
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
        height: 100,
        width: 300,
    },
    cardTitle: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    cardinfo: {
        color: 'black',
        fontSize: 14,
        alignSelf: 'center'
    },
    textDescription: {
        color: 'black',
        fontSize: 14,
        alignSelf: 'center',
    },

});

export default OcorrenciesObject;