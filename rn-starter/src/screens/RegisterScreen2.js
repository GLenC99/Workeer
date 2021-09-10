import React from "react";
import {StyleSheet,Text,View,TextInput,TouchableOpacity, Dimensions, Alert} from "react-native";
import * as Animatable from 'react-native-animatable';
import { color } from "react-native-reanimated";
import Feather from 'react-native-vector-icons/Feather';

//Erro rodao envio para o firebase sempre que eu clico ou escrevo no TextInput mas quando clico no Touchable Opacity não roda
const RegisterScreen2 = ({navigation}) => {
    const [data, setData] = React.useState({
        name: '',
        email: '',
        password:'',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const emailInputChange = (val) => {
        if(val.length != 0){
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            });
        }else{
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
            });
        };
    };

    const handlePasswordChange = (val) =>{
        if(val.length != 0){
            setData({
                ...data,
                password: val,
            });
        };
    };

    const handleNameChange = (val) =>{
        if(val.length != 0){
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
    }

    const getInfo = ()=> {
        //Alert.alert(data.email);
        console.log(data.email);
    };

    const postFirebase = (data) => {
        console.log("Email: " + data.email);
        console.log("Senha: " + data.password);
        Alert.alert("Enviando para o Firebase....")

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
                      email: data.email,
                      password: data.password,
                      returnSecureToken: true
                    })
                  }
                ).then((response) => { console.log("Resposta:" + response.json()) }).catch((error) => { console.log(error) })
            
              }, []);
        }catch(error){
            console.log("ERRO FIREBASE");
            console.log(error);
        }  
    }

    function consoleLogs(){
        console.log("Nome: " + data.name);
        console.log("Email: " + data.email);
        console.log("Senha: " + data.password);
   
       }
    
    return(
        <View>
            <Text>Registration</Text>
            <TextInput placeholder="Nome Completo" underlineColorAndroid={'transparent'} onChangeText={(val) => handleNameChange(val)}/>
            <TextInput placeholder="Email" underlineColorAndroid={'transparent'} onChangeText={(val)=> emailInputChange(val)}/>
            {data.check_textInputChange ?
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather
                        name="check-circle"
                        colour="green"
                        size={20}
                    />
                </Animatable.View>
            : null}
            <TextInput placeholder="Senha" underlineColorAndroid={'transparent'} secureTextEntry={data.secureTextEntry ? true : false} 
                onChangeText={(val) => handlePasswordChange(val)}/>
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
            <TouchableOpacity>
                <Text onPress={/*() => postFirebase(data)*/consoleLogs,() => navigation.navigate('Register')} style={styles.button}>Cadastrar</Text>
            </TouchableOpacity>
            <Text>{data.name}</Text>
            <Text>{data.email}</Text>
            <Text>{data.password}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
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