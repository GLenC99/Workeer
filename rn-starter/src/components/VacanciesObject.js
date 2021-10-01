import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const VacanciesObjects = ({vaga}) => {
    console.log("Vaga:" + vaga);
    return (
        <View style={styles.objectStyle}>
            <TouchableOpacity>
                <Text>{vaga.nomevaga}</Text>
                <Text>{vaga.link}</Text>
                <Text>{vaga.localvaga}</Text>
                <Text>{vaga.numvagas}</Text>
            </TouchableOpacity>
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
});

export default VacanciesObjects;