import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, Picker } from "react-native";
import * as Animatable from 'react-native-animatable';
import { color } from "react-native-reanimated";
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker';
import db from '../API/Firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Esse stack overflow talvez ajude com um erro no firestore https://stackoverflow.com/questions/46636255/firebase-firestore-is-not-a-function-when-trying-to-initialize-cloud-firestore
// Firestore link https://firebase.google.com/docs/firestore/quickstart?hl=pt#web-version-9
//Gerenciar Usuarios Firebase https://firebase.google.com/docs/auth/web/manage-users?hl=pt-br
// dúvida que pode ser útil https://github.com/firebase/quickstart-js/issues/12


//Não sei o que eu fiz mas ta pegando as informações perfeitamente, só tem que mudar a estética 
//(Diminuir o espaço do olho e check do email e senha, organizar data, genero e o cadastrar)

/*
data@gmail.com -> data.password
guilherme.cossu@aulno.ifsp.edu.br -> password

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
        ).then((response) => {
            console.log("Resposta:" + response.json())
            //pega o id do auth
            const auth = db.getAuth(); //Erro: Firebase.default.getAuth is not a function.
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const uid = user.uid;
                    console.log(uid);
                } else {
                    // User is signed out
                    // ...
                    console.log("user is signed out");
                }
            });
            
            //grava no firestore
            db.collection("Users").doc(uid).set({
                name: data.name,
                gender: data.gender,
                date: data.date,
                email: data.email,
                password: data.password,
            }).then(() => console.log("Usuario Cadastrado")).catch((erro) => console.log("Erro no Cadastro", erro))
        }).catch((error) => { console.log(error) })
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
Erro:
_Firebase.default.getAuth is not a function. (In '_Firebase.default.getAuth()', '_Firebase.default.getAuth' is undefined)
at src\screens\RegisterScreen2.js:112:25 in fetch.then$argument_0
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