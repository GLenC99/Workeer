import React, { Component } from "react";
import {TextInput, StyleSheet, Text, Button, View, Alert,ScrollView,TouchableOpacity,Platform,Image} from "react-native";

const nome = "Nome User"

const HomeScreen = () => {
  return(
    <ScrollView>
       <View>
           <Image source={require('../../assets/UserIcon.png')}style={styles.img}/>  
       </View>
       <View style={styles.faixasuperior}>
           <Text>Olá, {nome}!</Text>  
       </View>
       <ScrollView>
           <Text>Novas Vagas</Text> 
           <TouchableOpacity>
               <Text>É pra ter as coisas das Vagas aqui</Text>
               <Text>É preciso criar diferentes touchable opacities</Text>
           </TouchableOpacity>
       </ScrollView>
       <View style={styles.menuinferior}>
       <TouchableOpacity onPress={() => Alert.alert('Indo para Home')}>
           <Image source={require('../../assets/HomeIcon.png')} style={styles.image}/>
       </TouchableOpacity>    
       <TouchableOpacity onPress   ={() => Alert.alert('Indo para Buscar Vagas')}>
           <Image  source={require('../../assets/SearchIcon.png')} style={styles.image}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => Alert.alert('Indo para Configurações')}>
           <Image source={require('../../assets/SettingsIcon.png')} style={styles.image}/>
       </TouchableOpacity>
       </View>
   </ScrollView>
);
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    marginRight: 20,
    alignSelf: 'flex-end',
},
faixasuperior: {
    alignSelf: 'flex-start',
},
image: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    marginLeft: 40,
    marginRight:40,    
},
menuinferior:{
    backgroundColor: 'lime',
    flexDirection: "row",
},
});

export default HomeScreen;