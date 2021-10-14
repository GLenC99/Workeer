import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VacanciesObject from './VacanciesObject';

//results.navigate is not a function
const ResultsList = ({results}) => {
    //const filtervalue = /*results.state.params ? results.state.params.vaga :*/ 'Campinas';
    //const filter = /*results.state.params ? result.state.params.vaga :*/ 'Titulo';
    //console.log("Results: " + results[0]);
    const subresults = results.filter((vaga) => {
        return(vaga.local === "Campinas");
    });

    /*
    if (filter){
        subresults = results.filter((vaga) => {
            return(vaga.local === filtervalue);
        });
        
    }
    */
    /*
    const funcaotitulo = results.filter((vaga) => {

    });

    const funcaodescricao = results.filter((vaga) => {

    });
    */
    return(
        <View>
            <FlatList 
                data = {subresults}
                keyExractor={(result) => result.id}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity /*onPress={results.navigate('Vacancies'),{vaga}}*/>
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