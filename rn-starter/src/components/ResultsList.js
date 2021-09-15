import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import VacanciesObject from './VacanciesObject';

const ResultsList = ({results}) => {
    return(
        <View>
            <FlatList 
                data = {results}
                keyExractor={(result) => result.id}
                renderItem={({item}) => {
                    return(
                        <VacanciesObject props = {item}/>
                    );               
                }}
                />
                   
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default ResultsList;