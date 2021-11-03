import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import OcorrenciesObject from './OcorrenciesObject';
import firebase from 'firebase';

const OcorrenciesList = () => {
    const [ocorrencies, setOcorrencies] = useState([]);

    useEffect(() => {
        let ocorrenciesAux = [];
        firebase.firestore().collection("ProblemsReported").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    //console.log('id', doc.id);
                    //console.log(doc.data().empresa);
                    //console.log(doc.data().datadaocorrencia);
                    const ocorrencie = {
                        id: doc.id,
                        empresa: doc.data().empresa,
                        datadaocorrencia: doc.data().datadaocorrencia,
                        textDescription: doc.data().textDescription,
                    };
                    ocorrenciesAux.push(ocorrencie);
                });
                console.log("Ocorrencias", ocorrenciesAux);
                setOcorrencies(ocorrenciesAux);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return(
        <View>
            <FlatList 
                data = {ocorrencies}
                keyExractor={(result) => result.id}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity>
                            <OcorrenciesObject ocorrencia = {item}/>
                        </TouchableOpacity>                  
                    );               
                }}
                />
                   
        </View>
    )
};

export default OcorrenciesList;