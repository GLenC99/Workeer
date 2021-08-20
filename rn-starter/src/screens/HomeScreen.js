import React, { Component } from "react";
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image} from "react-native";
import VacanciesObjects from "../components/VacanciesObject";
const nome = "Nome User"

const HomeScreen = ({navigation}) => {
  return(
    <ScrollView>
       <View>
           <Image source={require('../../assets/UserIcon.png')}style={styles.img}/>  
       </View>
       <View style={styles.faixasuperior}>
           <Text>Olá, {nome}!</Text>  
       </View>
       <ScrollView style = {styles.scrollvagas,{backgroundColor: '#a3a3c2', width:300, height: 300, alignSelf:"center", marginBottom:30}}>
            <VacanciesObjects nomevaga="vaga1" link="http://vaga1" localvaga = "Campinas SP" numvagas = {1}/>
            <VacanciesObjects nomevaga="vaga2" link="http://vaga2" localvaga = "Sumaré SP" numvagas = {2}/>
            <VacanciesObjects nomevaga="vaga3" link="http://vaga3" localvaga = "Hortolandia SP" numvagas = {3}/>
            <VacanciesObjects nomevaga="vaga4" link="http://vaga4" localvaga = "Campinas SP" numvagas = {4}/>
            <VacanciesObjects nomevaga="vaga5" link="http://vaga5" localvaga = "Campinas SP" numvagas = {5}/>
            <VacanciesObjects nomevaga="vaga6" link="http://vaga6" localvaga = "Campinas SP" numvagas = {6}/>
            <VacanciesObjects nomevaga="vaga7" link="http://vaga7" localvaga = "Sumaré SP" numvagas = {7}/>
       </ScrollView>
       <View style={styles.menuinferior}>
       <TouchableOpacity onPress={() => navigation.navigate('Home')}>
           <Image source={require('../../assets/HomeIcon.png')} style={styles.image}/>
       </TouchableOpacity>    
       <TouchableOpacity onPress={() => navigation.navigate('Search')}>
           <Image  source={require('../../assets/SearchIcon.png')} style={styles.image}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
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

scrollvagas: {
    width:300,
    height:300,
    alignSelf: 'center',
    display: 'flex',
},
menuinferior:{
    backgroundColor: 'lime',
    flexDirection: "row",
},
});

export default HomeScreen;