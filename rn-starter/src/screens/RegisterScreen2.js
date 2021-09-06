import React from "react";
import {StyleSheet,Text,View,TextInput,TouchableOpacity, Dimensions, Alert} from "react-native";
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

//Erro rodao envio para o firebase sempre que eu clico ou escrevo no TextInput mas quando clico no Touchable Opacity não roda
const RegisterScreen2 = ({navigation}) => {
    const [data, setData] = React.useState({
        email: '',
        password:'',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const textInputChange = (val) => {
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
        }catch(Exception){
            console.log("ERRO FIREBASE");
        }  
    }
    return(
        <View>
            <Text>Registration</Text>
            <TextInput placeholder="Nome Completo" underlineColorAndroid={'transparent'}/>
            <TextInput placeholder="Email" underlineColorAndroid={'transparent'} onChangeText={(val)=> textInputChange(val)}/>
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
                <Text onPress={() => postFirebase(data)}>Registrar</Text>
            </TouchableOpacity>
            <Text>{data.email}</Text>
            <Text>{data.password}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default RegisterScreen2;