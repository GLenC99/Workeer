import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const VacanciesObjects = (props) => {
    return (
        <View style={styles.objectStyle}>
            <TouchableOpacity>
                <Text>{props.nomevaga}</Text>
                <Text>{props.link}</Text>
                <Text>{props.localvaga}</Text>
                <Text>{props.numvagas}</Text>
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