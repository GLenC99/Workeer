import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VacanciesObject from './VacanciesObject';

const ResultsList = ({results}) => {
    /*
    console.log("Results: " + results[0]);
    
    const subresults = results.filter((vaga) => {
        return(vaga.localvaga === "Campinas");
    });

    const funcaotitulo = results.filter((vaga) => {

    });

    const funcaodescricao = results.filter((vaga) => {

    });

    console.log(subresults);
    */
    return(
        <View>
            <FlatList 
                data = {results}
                keyExractor={(result) => result.id}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity /*onPress={results.navigate('Vacancies')}*/>
                            <VacanciesObject vaga = {item}/>
                        </TouchableOpacity>                  
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