import React from "react";
import { StyleSheet, Text, Image, View, ScrollView, Button, Alert, TouchableOpacity } from "react-native";

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
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../../assets/HomeIcon.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Image source={require('../../assets/SearchIcon.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <Image source={require('../../assets/SettingsIcon.png')} style={styles.image} />
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
        width: 50,
        height: 50,
        resizeMode: 'stretch',
        marginLeft: 40,
        marginRight: 40,
        marginBottom:50,
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