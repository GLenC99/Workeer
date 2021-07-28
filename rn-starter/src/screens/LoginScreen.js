import React, { Component } from "react";
import {TextInput, StyleSheet, Text, Button, View, Alert,ScrollView,TouchableOpacity} from "react-native";

let Cadastrar = false;
const msgLogin=()=>{
  Alert.alert('Msg','Efetuando Login');
}

const msgCadastro=()=>{
  Alert.alert('Msg','Abrindo Tela de Cadastro');
  Cadastrar = true;
}

const LoginScreen = ({navigation}) => {
  return(
    <ScrollView style={styles.scrollView}>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}> Workeer</Text>
        </View>
        <View style={styles.appscreen}>
          <Text style={styles.labels}>Login</Text>
          <TextInput placeholder = "Login" style={styles.content}></TextInput>
          <Text style={styles.labels}>Senha</Text>
          <TextInput placeholder = "Senha" style={styles.content}></TextInput>
          <TouchableOpacity>
            <Text onPress={() => navigation.navigate('Register')} style={styles.register}>Primeira Vez? Cadastre-se</Text>
          </TouchableOpacity>
          <View style={styles.view2}>
            <Button
              title = "login" style={styles.button} color="#9900cc"
              onPress={() => navigation.navigate('Start')}
            ></Button>
          </View>
        </View>
    </ScrollView>  
);
};

const styles = StyleSheet.create({
  scrowView: {
    backgroundColor: '#FFF5EE',    
  },

  appView: {
    backgroundColor: '#FFF5EE'
  },

  viewTitle: {
    backgroundColor: 'red',
  },

  textTitle: {
    fontSize: 50,
    textAlign: 'center',
    width : 300,
    justifyContent: 'center',
    marginLeft:50,
    marginTop:30,
    marginBottom:30,
  },
  appscreen: {
    marginTop: 120,
  },

  content: {
    marginTop: 20,
    textAlign: 'center',
    justifyContent: 'center',
    width : 100,
    height:50,
    marginLeft:150,
    backgroundColor: 'yellow',
  },
  labels:{
    marginTop: 30,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    width : 100,
    marginLeft:150,
  },

  view2:{
      width:200,
      alignSelf:'center'
  },
  button:{
    flexDirection: 'row',
    flex: 1,
    marginBottom:20,

  },
  register:{
    marginTop:30,
    marginBottom: 20,
    marginRight:10,
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: 15,
    color: '#9900cc',
  },
});

export default LoginScreen;
