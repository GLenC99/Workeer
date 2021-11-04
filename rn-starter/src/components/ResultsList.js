import React from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VacanciesObject from './VacanciesObject';

const ResultsList = ({results,searchtype,search,navigation}) => {
    //const filtervalue = /*results.state.params ? results.state.params.vaga :*/ 'Campinas';
    //const filter = /*results.state.params ? result.state.params.vaga :*/ 'Titulo';
    //console.log("Results: " + results[0]);

    

    console.log("Results: ", searchtype);

    const subresults = results.filter((vaga) => {
        if(search != ''){
            switch(searchtype) {
                case 'cidade':
                    return(vaga.local === search);
                  break;
                
                case 'titulo':
                    return(vaga.titulo === search);
                  break;
          
                case 'area':
                    return(vaga.funcao === search);
                  break;
          
                case 'reclamacoes':
                    //inserir as reclamações
                    //return(vaga.funcao) 
                  break;
          
                default:
                  Alert.alert("Tipo de pesquisa não encontrados");
              
                }

            if(searchtype === 'cidade'){
                return(vaga.local === search);
            }
        }else{
            return results;
        }
    });

    const navigate = () => {
        navigation.navigate('Vacancies',{vaga})
    }
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
                        <TouchableOpacity onPress={/*navigate*/console.log("Touchable CLicado")}>
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