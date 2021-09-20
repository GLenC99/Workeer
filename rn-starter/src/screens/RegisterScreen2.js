import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, Picker } from "react-native";
import * as Animatable from 'react-native-animatable';
import { color } from "react-native-reanimated";
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker';

import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc } from "firebase/firestore"

/*
import firebase from "firebase/app";

import firebase from 'firebase/app';
import firestore from '@react-native-firebase/firestore';
*/

// Esse stack overflow talvez ajude com um erro no firestore https://stackoverflow.com/questions/46636255/firebase-firestore-is-not-a-function-when-trying-to-initialize-cloud-firestore
// Firestore link https://firebase.google.com/docs/firestore/quickstart?hl=pt#web-version-9

const firebaseApp = initializeApp({
    apiKey: 'AIzaSyDpv3MTThp_aC0VbykbZa9VQP1gjKlv3uY',
    authDomain: '"https://accounts.google.com/o/oauth2/auth',
    projectId: 'workeer-system'
});

const db = getFirestore();

const testFirestoreadd = () => {
    console.log("Abriu a função de adição no Firestore");
    //Código achado no stack overflow
    /*
    const config = {
        apiKey: "",
        authDomain: "a",
        databaseURL: "https://workeer-system.firebaseio.com",
        projectId: "a", //Id é o code ou o number do projeto
        storageBucket: "a",
        messagingSenderId: "a"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
        let firestore = firebase.firestore();
    };
    */
    //Código achado no Primeiros passos com o Cloud Firestore 
    /*firestore()
        .collection('Users')
        .add({
            name: 'data',
            gender: 'naobinario',
            email: 'data@gmail.com',
            password: 'data.password',
            date: '17/09/2021',

        })
        .then(() => {
            console.log('User added!');
        });

    */

    try {
        const docRef = async () => await addDoc(collection(db, "users"), {
            name: 'data',
            gender: 'naobinario',
            email: 'data@gmail.com',
            password: 'data.password',
            date: '17/09/2021',
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

//warning: Attempted import error: 'DatePickerAndroid' is not exported from 'react-native-web/dist/index'.
//Por algum motivo não consigo clicar no date picker no web e no emulador o Picker de genero não aparece

/*Warning: DatePickerAndroid has been merged with DatePickerIOS and will be removed in a future release. It can now be 
installed and imported from '@react-native-community/datetimepicker' instead of 'react-native'. See 
https://github.com/react-native-community/datetimepicker */


//Não sei o que eu fiz mas ta pegando as informações perfeitamente, só tem que mudar a estética 
//(Diminuir o espaço do olho e check do email e senha, organizar data, genero e o cadastrar)


/*
data@gmail.com -> data.password
guilherme.cossu@aulno.ifsp.edu.br -> password



const setFirebase = () => {
    // Add a new document in collection "cities"
    db.collection("cities").doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}
*/
const RegisterScreen2 = ({ navigation }) => {
    const [data, setData] = React.useState({
        name: '',
        gender: '',
        email: '',
        password: '',
        date: null,
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const emailInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
            });
        };
    };

    const handlePasswordChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                password: val,
            });
        };
    };

    const handleNameChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                name: val,
            });
        };
    };

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    };

    const handleGenderSelect = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                gender: val,
            });
        };
    };
    const handleDateSelect = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                date: val,
            });
        };
    };

    const postFirebase = (data) => {
        console.log("Email: " + data.email);
        console.log("Senha: " + data.password);
        Alert.alert("Enviando para o Firebase....")
        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpv3MTThp_aC0VbykbZa9VQP1gjKlv3uY',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                    returnSecureToken: true
                })
            }
        ).then((response) => { console.log("Resposta:" + response.json()) }).catch((error) => { console.log(error) })
    };

    const consoleLogs = () => {
        console.log("Nome: " + data.name);
        console.log("Email: " + data.email);
        console.log("Senha: " + data.password);
    };

    return (
        <View>
            <Text>Registration</Text>
            <View style={styles.nameStyles}>
                <Image source={require('../../assets/NameIcon.png')} style={styles.image} />
                <TextInput placeholder="Nome Completo" underlineColorAndroid={'transparent'} onChangeText={(val) => handleNameChange(val)} style={styles.nameInputStyle} />
            </View>
            <View style={styles.emailStyles}>
                <Image source={require('../../assets/EmailIcon.png')} style={styles.image} />
                <TextInput placeholder="Email" underlineColorAndroid={'transparent'} onChangeText={(val) => emailInputChange(val)} style={styles.emailInputStyle} />
                {data.check_textInputChange ?
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </Animatable.View>
                    : null}
            </View>
            {data.email.match("@") ?
                <Text></Text>
                :
                <Text style={styles.warnings}>O valor inserido não é reconhecido como um email</Text>
            }
            <View style={styles.passwStyle}>
                <Image source={require('../../assets/PasswordIcon.png')} style={styles.image} />
                <TextInput placeholder="Senha" underlineColorAndroid={'transparent'} secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText={(val) => handlePasswordChange(val)} style={styles.passwInputStyle} />
                <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather
                            name="eye"
                            color="grey"
                            size={20}
                        />

                    }
                </TouchableOpacity>
            </View>
            {data.password.length < 6 ?
                <Text style={styles.warnings}>A senha deve ter ao menos 6 caracteres</Text>
                :
                <Text></Text>
            }
            <View style={styles.date}>
                <Image source={require('../../assets/DateIcon.png')} style={styles.image} />
                <Text marginRight={20}>Data de nascimento: </Text>
                <DatePicker date={data.date}
                    onDateChange={handleDateSelect}
                />
            </View>
            <View style={styles.picker}>
                <Image source={require('../../assets/GenderIdentityIcon.png')} style={styles.image} />
                <Picker
                    selectedValue={data.gender}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => handleGenderSelect(itemValue)}
                >
                    <Picker.Item label="Mulher" value="mulher" />
                    <Picker.Item label="Travesti" value="travesti" />
                    <Picker.Item label="Pessoa não-binária" value="naobinario" />
                    <Picker.Item label="Homem" value="homem" />
                </Picker>
            </View>

            <TouchableOpacity>
                <Text onPress={() => postFirebase(data) /*consoleLogs, () => navigation.navigate('Login')*/} style={styles.button}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text onPress={testFirestoreadd} style={styles.button}>Teste Firestore</Text>
            </TouchableOpacity>


            <Text>{data.name}</Text>
            <Text>{data.email}</Text>
            <Text>{data.password}</Text>
            <Text>{data.gender}</Text>
            <Text>{data.date}</Text>

        </View>
    );
};

const styles = StyleSheet.create({

    image: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
        marginLeft: 5,
        marginRight: 10,
    },

    nameInputStyle: {
        width: 300,
        borderWidth: 2,
    },

    nameStyles: {
        flexDirection: "row",
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
    },

    emailInputStyle: {
        width: 300,
        marginRight: 30,
        borderWidth: 2,
    },

    emailStyles: {
        flexDirection: "row",
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
    },

    passwInputStyle: {
        width: 300,
        marginRight: 30,
        borderWidth: 2,
    },

    passwStyle: {
        flexDirection: "row",
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'justify',
    },

    date: {
        flexDirection: "row",
    },

    picker: {
        paddingTop: 40,
        alignItems: "center",
        flexDirection: "row",
    },

    warnings: {
        color: "red",
        fontSize: 8,
        fontWeight: "bold",
    },

    button: {
        marginTop: 20,
        height: 30,
        width: 150,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'red',
        backgroundColor: 'blue',

    },
});

export default RegisterScreen2;

/*
TypeError: undefined is not a function (near '...(0, _app.initializeApp)...')
at node_modules\react-native\Libraries\LogBox\LogBox.js:148:8 in registerError
at node_modules\react-native\Libraries\LogBox\LogBox.js:59:8 in errorImpl
at node_modules\react-native\Libraries\LogBox\LogBox.js:33:4 in console.error
at node_modules\expo\build\environment\react-native-logs.fx.js:27:4 in error
at node_modules\react-native\Libraries\Core\ExceptionsManager.js:104:6 in reportException
at node_modules\react-native\Libraries\Core\ExceptionsManager.js:171:19 in handleException
at node_modules\react-native\Libraries\Core\setUpErrorHandling.js:24:6 in handleError
at node_modules\expo-error-recovery\build\ErrorRecovery.fx.js:12:21 in ErrorUtils.setGlobalHandler$argument_0
at node_modules\regenerator-runtime\runtime.js:63:36 in tryCatch
at node_modules\regenerator-runtime\runtime.js:294:29 in invoke
at node_modules\regenerator-runtime\runtime.js:63:36 in tryCatch
at node_modules\regenerator-runtime\runtime.js:155:27 in invoke
at node_modules\regenerator-runtime\runtime.js:165:18 in PromiseImpl.resolve.then$argument_0
at node_modules\react-native\node_modules\promise\setimmediate\core.js:37:13 in tryCallOne
at node_modules\react-native\node_modules\promise\setimmediate\core.js:123:24 in setImmediate$argument_0
at node_modules\react-native\Libraries\Core\Timers\JSTimers.js:130:14 in _callTimer
at node_modules\react-native\Libraries\Core\Timers\JSTimers.js:181:14 in _callImmediatesPass
at node_modules\react-native\Libraries\Core\Timers\JSTimers.js:441:30 in callImmediates
at node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:387:6 in __callImmediates
at node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:135:6 in __guard$argument_0
at node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:364:10 in __guard
at node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:134:4 in flushedQueue
*/


/*

        useEffect(() => {
            console.log("Abre Login Screen");
            fetch(
              'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpv3MTThp_aC0VbykbZa9VQP1gjKlv3uY',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email: 'guilherme.cossu@aluno.ifsp.edu.br',
                  password: 'senha',
                  returnSecureToken: true
                })
              }
            ).then((response) => { console.log("Resposta:" + response.json()) }).catch((error) => { console.log(error) })
          }, []);
    };

useEffect(() => {
    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpv3MTThp_aC0VbykbZa9VQP1gjKlv3uY',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'guilherme.cossu@aluno.ifsp.edu.br',
          password: 'senha',
          returnSecureToken: true
        })
      }
    ).then((response) => { console.log("Resposta:" + response.json()) }).catch((error) => { console.log(error) })
  }, []);
*/