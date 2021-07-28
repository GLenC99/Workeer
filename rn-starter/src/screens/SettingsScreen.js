import React from "react";
import {StyleSheet, Text, Image, View, ScrollView, Button, Alert, TouchableOpacity} from "react-native";

const nome = "Nome da Pessoa";
const imageSource = '../../assets/UserIcon.png';
//descobrir como alterar o tamanho da imagem
//colocar as imagens da faixa inferior na mesma linha
//fazer uma transição leve nas telas

const SettingsScreen = ({navigation}) => {
return(
    <ScrollView>
        <View style={styles.img}>
                <Image source={require('../../assets/UserIcon.png')} style={styles.image}/>     
        </View>
        <View style={styles.faixasuperior}>
            <Text>{nome}</Text>  
        </View>
        <View style={styles.conteudo}>
            <Image/>
            <Text onPress={() => Alert.alert('Sobre Workeer','Versão Beta 0.0.1')}>Sobre o aplicativo</Text>
            <Image/>
            <Text onPress={() => navigation.navigate('UserOpinion')}>Opine sobre o sistema</Text>
            <Image/>
            <Text onPress={() => Alert.alert('Abrindo Alterar informações pessoais...')}>Alterar informações pessoais</Text>
            <Image/>
            <Text onPress={() => navigation.navigate('ReportProblems')}>Reportar problemas</Text>
            <Button title="sair"
            color="#9900cc"
            onPress={() => Alert.alert('Saindo')}
            ></Button>
        </View>
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
faixasuperior: {
    alignSelf: 'center',
},
img: {

},
image: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    marginLeft: 40,
    marginRight:40,    
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