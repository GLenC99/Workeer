import React, { useEffect,useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Picker } from "react-native";
import * as Animatable from 'react-native-animatable';
import { color } from "react-native-reanimated";
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker';

//warning: Attempted import error: 'DatePickerAndroid' is not exported from 'react-native-web/dist/index'.
//Por algum motivo não consigo clicar no date picker no web e no emulador o Picker de genero não aparece

/*Warning: DatePickerAndroid has been merged with DatePickerIOS and will be removed in a future release. It can now be 
installed and imported from '@react-native-community/datetimepicker' instead of 'react-native'. See 
https://github.com/react-native-community/datetimepicker */
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

    const handleGenderSelect =(val) => {
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
    /*
        const postFirebase = (data) => {
            console.log("Email: " + data.email);
            console.log("Senha: " + data.password);
            Alert.alert("Enviando para o Firebase....")
            /*
            try{
                useEffect(() => {
                    fetch(
                      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpv3MTThp_aC0VbykbZa9VQP1gjKlv3uY',
                      {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                          email: "data.email",
                          password: "data.password",
                          returnSecureToken: true
                        })
                      }
                    ).then((response) => { console.log("Resposta:" + response.json()) }).catch((error) => { console.log(error) })
                
                  }, []);
            }catch(Exception){
                console.log("ERRO FIREBASE");
                console.log(Exception);
            }  
            
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
            <View >
            <DatePicker date={data.date} 
            onDateChange={handleDateSelect}
            />
            </View>        
            <View style={styles.picker}>
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
                <Text onPress={/*() => postFirebase(data)*/consoleLogs, () => navigation.navigate('Login')} style={styles.button}>Cadastrar</Text>
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
        marginRight: 50,
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
        marginRight: 50,
        borderWidth: 2,
    },

    passwStyle: {
        flexDirection: "row",
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'justify'
    },

    picker: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
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
})

export default RegisterScreen2;

/*
Can't find variable: useEffect
at src\screens\RegisterScreen2.js:58:21 in postFirebase
at src\screens\RegisterScreen2.js:115:49 in Text.props.onPress
>>>>>>> 4055c01e4d13f8bbb8b46d6f29f626badb13e9fa
at node_modules\react-native\Libraries\Text\Text.js:242:8 in touchableHandlePress
at node_modules\react-native\Libraries\Components\Touchable\Touchable.js:880:8 in TouchableMixin._performSideEffectsForTransition
at node_modules\react-native\Libraries\Components\Touchable\Touchable.js:779:6 in TouchableMixin._receiveSignal
at node_modules\react-native\Libraries\Components\Touchable\Touchable.js:491:4 in TouchableMixin.touchableHandleResponderRelease
at node_modules\react-native\Libraries\Text\Text.js:194:8 in onResponderRelease
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:265:4 in invokeGuardedCallbackImpl
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:476:2 in invokeGuardedCallback
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:500:2 in invokeGuardedCallbackAndCatchFirstError
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:597:41 in executeDispatch
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:621:19 in executeDispatchesInOrder
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:2521:28 in executeDispatchesAndRelease
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:836:4 in forEachAccumulated
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:2546:20 in runEventsInBatch
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:2702:18 in runExtractedPluginEventsInBatch
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:2639:35 in batchedUpdates$argument_0
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:17712:13 in batchedUpdates$1
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:2492:29 in batchedUpdates
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:2638:16 in _receiveRootNodeIDEvent
at node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:2767:27 in receiveTouches
at node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:416:4 in __callFunction
at node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:109:6 in __guard$argument_0
at node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:364:10 in __guard
at node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:108:4 in callFunctionReturnFlushedQueue
*/