import React from "react";
import { StyleSheet, Text, Image, View, ScrollView, Button, Alert, TouchableOpacity } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
const nome = "Nome da Pessoa";
const imageSource = '../../assets/UserIcon.png';

const SettingsScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.Iconimg}>
                <Image source={require('../../assets/UserIcon.png')} style={styles.image} />
            </View>
            <View style={styles.faixasuperior}>
                <Text style={{marginBottom:20}}>{nome}</Text>
            </View>
            <View style={styles.conteudo}>
                <View style = {styles.inforows}>
                <Image source={require('../../assets/AboutAppIcon.png')} style={styles.img}/>
                <Text onPress={() => Alert.alert('Sobre Workeer', 'Versão Beta 0.0.1')}>Sobre o aplicativo</Text>
                </View>
                <View style = {styles.inforows}>
                <Image source={require('../../assets/OpinionIcon.png')} style={styles.img}/>
                <Text onPress={() => navigation.navigate('UserOpinion')}>Opine sobre o sistema</Text>
                </View>
                <View style = {styles.inforows}>
                <Image source={require('../../assets/ChangeUserInfoIcon.png')} style={styles.img}/>
                <Text onPress={() => navigation.navigate('AlterInfo')}>Alterar informações pessoais</Text>
                </View>
                <View style = {styles.inforows}>
                <Image source={require('../../assets/ReportProblemIcon.png')} style={styles.img}/>
                <Text onPress={() => navigation.navigate('ReportProblems')}>Reportar problemas</Text>
                </View>                
            </View>
            <View style={[{ width: "40%", margin: 10, backgroundColor: "red", alignContent: "center", alignSelf:"center", marginTop:150}]}>
                    <Button style = {styles.button}
                        title="sair"
                        color='#9900cc'
                        onPress={() => navigation.navigate('Login')}        
                    ></Button>
                </View>
            <View style={styles.menuinferior}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style= {styles.image}>
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
                <TouchableOpacity onPress={() => navigation.navigate('Settings')} style= {styles.image}>
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
    },
    Iconimg:{
        width:40,
        height:40,
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
      },
    image: {
        width: 131,
        height: 80,
        borderWidth:1,
        alignItems: "center",
    },

    conteudo: {
        backgroundColor: 'gray',
    },

    menuinferior: {
        backgroundColor: 'lime',
        flexDirection: "row",
    },
});

export default SettingsScreen;