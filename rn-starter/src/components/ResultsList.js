import React from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VacanciesObject from './VacanciesObject';

const ResultsList = ({ results, searchtype, search, navigation }) => {

    const subresults = results.filter((vaga) => {
        if (search != '') {
            switch (searchtype) {
                case 'cidade':
                    return (vaga.local.match(search.toUpperCase()));
                    break;

                case 'titulo':
                    return (vaga.titulo.match(search.toUpperCase()));
                    break;

                case 'area':
                    return (vaga.funcao.match(search.toUpperCase()));
                    break;

                default:
                    //Alert.alert("Tipo de pesquisa não encontrados");
                    break;
            }
        } else {
            return results;
        }
    });

    const navigate = (vaga) => {
        //navigation.navigate('Vacancies',{vaga})
        Alert.alert("Vaga Clicada");
    }

    return (
        <View>
            <FlatList
                data={subresults}
                keyExractor={(subresults) => subresults.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <VacanciesObject vaga={item} />
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