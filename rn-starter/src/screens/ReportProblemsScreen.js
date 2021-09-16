import React, {useState} from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from "react-native";

const ReportProblemsScreen = ({ navigation,user }) => {
    const [problem, setProblem]  = React.useState({
        empresa: '',
        problema:'',
        datadaocorrencia: '',
      });

    const handleIncChange = (val) =>{
        if(val.length != 0){
            setProblem({
                ...problem,
                empresa: val,
            });
        };
      };

    const handleProblemChange = (val) =>{
        if(val.length != 0){
            setProblem({
                ...problem,
                problema: val,
            });
        };
      };

      const handleDateChange = (val) =>{
        if(val.length != 0){
            setProblem({
                ...problem,
                datadaocorrencia: val,
            });
        };
      };

    return(
        <View>
            <Text>Em caso de problemas com alguma das vagas por favor nos informe</Text>
            <Text>Caso o problema seja o sistema em si e não uma ocorrencia relacionada as vagas ou empresa recomendada por favor retorne a tela de Configurações e reporte na tela de Opinião sobre o sistema </Text>
            <TextInput placeholder="Empresa" onChangeText={handleIncChange}/>
            <TextInput placeholder="Problema" onChangeText={handleProblemChange}/>
            <TextInput placeholder="Data da ocorrencia 
            (O máximo de exatidão possivel, mas, ao menos o ano e mês se possível" onChangeText={handleDateChange}/>
            <TouchableOpacity>
                <Text>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ReportProblemsScreen;