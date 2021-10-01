import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import VacanciesObject from './VacanciesObject';

const ResultsList = ({results}) => {
    console.log("Results: " + results[0]);

    const subresults = results.filter((vaga) => {
        return(vaga.localvaga === "Campinas");
    });

    const funcaotitulo = results.filter((vaga) => {

    });

    const funcaodescricao = results.filter((vaga) => {

    });

    console.log(subresults);
    return(
        <View>
            <FlatList 
                data = {results}
                keyExractor={(result) => result.id}
                renderItem={({item}) => {
                    return(
                        <VacanciesObject vaga = {item}/>
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