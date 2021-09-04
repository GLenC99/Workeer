import React from "react";
import {StyleSheet,Text,View,TextInput,TouchableOpacity, Dimensions, Alert} from "react-native";
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

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
        Alert.alert({data});
    };
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
            <TouchableOpacity onPress={getInfo}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterScreen2;