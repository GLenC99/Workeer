import React, { Component,useState } from "react";
import {TextInput, StyleSheet, Text, CheckBox, Picker, View,Button, Alert,Image,Navigation } from "react-native";


//descobirir como faço pra criar aqueles negócios de cadastro de data
//pegar as imagens
//Fazer a margem das coisas
//diminuir as imagens 
//Antes tava abrindo sozinho direto na tela Start sem passar por essa antes

const RegisterScreen = ({navigation}) => {
    navigation.onPress = false;
    const [selectedValue, setSelectedValue] = useState("mulher");
    function checkToNavigate() {
        if((navigation.onPress) == false)
          navigation.onPress = true;
          navigation.navigate('Home');
      }
    return(
        <View style={styles.container}>
          <Text style={styles.textTitle}> Workeer</Text>  
          <Text style={styles.content}>Por Favor Insira Seu Nome(Nome Social)</Text>
          <Image/>
          <TextInput placeholder = "Nome Completo" style={styles.content} title= "name"></TextInput>
          <Image/>
          <Text style={styles.date}>Insira sua Data de Nascimento:</Text>
          <View style={styles.date}>
            <TextInput placeholder = "Dia" style={{width:100}}></TextInput>
            <TextInput placeholder = "Mês" style={{width:100}}></TextInput>
            <TextInput placeholder = "Ano" style={{width:100}}></TextInput>
          </View>
          <Image/>
          <Text style={styles.content}>Se identifica como</Text>
          <Picker selectedValue={selectedValue}  style={styles.pickers}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                  <Picker.Item label="Homem" value="homem" />
                  <Picker.Item label="Mulher" value="mulher" />
                  <Picker.Item label="Travesti" value="travesti" />
                  <Picker.Item label="Pessoa Não Binária" value="naobinaria" />
          </Picker>
          <Image/>    
          <Text style={styles.content}>Seus pronomes são:</Text>
          <View  style={styles.checkboxM}>
            <CheckBox/>
            <Text>Masculinos</Text>
          </View>
          <View style={styles.checkboxF}>
            <CheckBox/>
            <Text>Femininos</Text>
          </View>
          <View  style={styles.checkboxN}>
            <CheckBox/>
            <Text >Neutros</Text>
          </View>
  
          <Image/>
          <Text>Por Favor Cadastre um Nome de Usuário</Text>
          <TextInput placeholder = "Nome de Usuário" style={styles.container}></TextInput>
          <Image/>
          <Text>Por Favor Cadastre uma Senha de Usuário</Text>
          <TextInput placeholder = "Senha de Usuário" style={styles.container}></TextInput>
  
          <Image/>
          <Text>Por Favor Cadastre seu Email</Text>
          <TextInput placeholder = "Email" style={styles.container}></TextInput>
  
          <Image/>
          <Text>Por Favor Confirme seu Email</Text>
          <TextInput placeholder = "Email" style={styles.container}></TextInput>
  
          <Button title="Cadastrar" onPress={checkToNavigate()}></Button>
        </View>     
      );
    };

const styles = StyleSheet.create({
        checkboxM: {
          flexDirection: "row",
          alignSelf: "center",
        },
      
        checkboxF: {
          flexDirection: "row",
          alignSelf: "center",
        },
      
        checkboxN: {
          flexDirection: "row",
          alignSelf: "center",
        },
        container: {
      
        },
      }); 
      
      
      export default RegisterScreen;
