import React from "react";
import { StyleSheet, Text, Image, View, ScrollView, Button, Alert, TouchableOpacity } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
const nome = "Nome da Pessoa";

//precisa receber as informações do usuario para poder associar reclamações e alterá-las nessa tela, 
//precisa passar as informações do usuario pras proximas telas e não tenho certeza de como fazer isso
const SettingsScreen = ({ navigation}) => {

    // = navigation.state.params.user;
    const user = "";
    return (
        <ScrollView>
            <View style={styles.Iconimg}>
                <Feather
                    name="user"
                    color="black"
                    size={40}
                    />
            </View>
            <View style={styles.faixasuperior}>
                <Text style={{marginBottom:20}}>{nome}</Text>
            </View>
            <View style={styles.conteudo}>
                <View style = {styles.inforows}>
                    <Feather
                    name="info"
                    color="black"
                    size={20}
                    />
                <Text onPress={() => Alert.alert('Sobre Workeer', 'Versão Beta 0.0.1')} style={styles.optionsText}>Sobre o aplicativo</Text>
                </View>
                <View style = {styles.inforows}>
                <Feather
                    name="clipboard"
                    color="black"
                    size={20}
                    />
                <Text onPress={() => navigation.navigate('UserOpinion',{user : user})} style={styles.optionsText}>Opine sobre o sistema</Text>
                </View>
                <View style = {styles.inforows}>
                <Feather
                    name="edit"
                    color="black"
                    size={20}
                    />
                <Text onPress={() => navigation.navigate('AlterInfo',{user : user})} style={styles.optionsText}>Alterar informações pessoais</Text>
                </View>
                <View style = {styles.inforows}>
                <Feather
                    name="frown"
                    color="black"
                    size={20}
                    />
                <Text onPress={() => navigation.navigate('ReportProblems',{user : user})} style={styles.optionsText}>Reportar problemas</Text>
                </View>                
            </View>
            <View style = {styles.button}>
                    <Button 
                        title="sair"
                        color='#9900cc'
                        onPress={() => navigation.navigate('Login',{user : user})}        
                    ></Button>
                </View>
            <View style={styles.menuinferior}>
            <TouchableOpacity onPress={() => navigation.navigate('Home',{user : user})} style= {styles.image}>
                    <Feather
                        name="home"
                        color="black"
                        size={80}
                        marginLeft={40}
                        marginRight={40}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} style= {styles.image}>
                    <Feather
                        name="search"
                        color="black"
                        size={80}
                        marginLeft={40}
                        marginRight={40}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings',{user : user})} style= {styles.image}>
                    <Feather
                        name="settings"
                        color="black"
                        size={80}
                        marginLeft={40}
                        marginRight={40}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    faixasuperior: {
        alignSelf: 'center',
        marginBottom:70,
        borderWidth: 1,
    },
    Iconimg:{
        width:40,
        height:40,
        borderWidth:1,
    },  
    img: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
        marginRight: 15,
        marginLeft: 5,
    },
    inforows: {
        marginTop:10,
        flexDirection: "row",
        display: 'flex',
        marginBottom:10,
        marginLeft:10,
        borderWidth:1,
      },

    optionsText: {
        marginLeft:5,
    },    
    image: {
        width: 133.3,
        height: 76,
        borderWidth: 1,
        alignItems: "center",
    },

    conteudo: {
        backgroundColor: 'gray',
        borderWidth: 1,
        alignItems: "flex-start",
        marginHorizontal:5,
    },

    button: {
        width: "40%", 
        margin: 10, 
        backgroundColor: "red", 
        alignContent: "center", 
        alignSelf:"center", 
        marginTop:150,
        borderWidth: 1,
    },

    menuinferior: {
        backgroundColor: 'lime',
        flexDirection: "row",
        width: 400,
        alignSelf: "center",
        borderWidth: 1,
    },
});

export default SettingsScreen;