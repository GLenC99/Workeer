import React from 'react';
import { Navigation } from 'react-feather';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../constants/Colors';
import { AntDesign, Feather } from '@expo/vector-icons';
const BasicScreen = (props) => {
    const text = '';
    const number = 9;
    return (
        <View style={styles.screen}>
            <TouchableOpacity onPress={() => { props.navigation.navigate('basicscreen2') }}>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Exemplo de botão </Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/*Exemplo de formulário*/}
            <View style={styles.formContainer}>
                <Text style={styles.standardTitle}>Exemplo de formulário</Text>
                <Text style={styles.text}>Digite o seu nome</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={() => { console.log('Texto foi alterado') }}
                    value={text}
                />
                <Text style={styles.text}>Digite a sua idade</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={console.log('Texto foi alterado')}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Gerente de Operações</Text>
                <Text style={styles.textDescription}>Posição para gerenciar as operaçõe logísticas de uma transportadora </Text>
            </View>
            <View>
                <Text>Exemplo de ícones</Text>
                <AntDesign name="home" size={36} color="white" />
                <AntDesign name="search1" size={36} color="white" />
                <Feather name="settings" size={36} color="white" />
            </View>
        </View >
    );
}

export const basicScreenOptions = (navData) => {
    return {
        headerTitle: () => (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Aqui vai o título</Text>
            </View>
        ),
        headerStyle: {
            backgroundColor: Colors.primary,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTintColor: 'white'
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.primary,
        padding: 10,
    },
    header: {

    },
    headerTitle: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'white',
        color: Colors.primary,
        borderRadius: 7,
        width: 343,
        height: 48,
        alignSelf: 'center',
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
    },
    formContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    input: {
        borderBottomWidth: 2,
        borderColor: Colors.primary
    },
    standardTitle: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
        color: Colors.primary
    },
    card:{
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 5,
        padding: 5,
        borderColor: '#931314',
        borderWidth: 2
    },
    cardTitle:{
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    textDescription:{
        color: 'black',
        fontSize: 14
    }

});

export default BasicScreen;