import React, {useEffect} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Picker, Alert } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker';
import * as Animatable from 'react-native-animatable';
import { Colors } from "../constants/Colors";

//Precisa conseguir reconhecer o usuario e postar as informações novas, substituindo as antigas, 
//o valor por default pode ser o que já esta gravado no firebase do usuario
const AlterInfoScreen = ({ navigation, user, vacancies }) => {

    const usuario = navigation.state.params.user;
    const vagas = navigation.state.params.vacancies;
    
    const [data, setData] = React.useState({
        name: '',
        gender: '',
        email: '',
        password: '',
        date: null,
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const newPassword = data.password;
    const newEmail = data.email;

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

    useEffect(() => {
        Alert.alert("Aviso", "A tela a seguir ainda não se encontra funcional, devendo ser implementada no futuro, por favor, clique em voltar para retornar a tela de configurações")
    }, []);

    return (
        <View>
            <View style={styles.contentStyles}>
                <Image source={require('../../assets/NameIcon.png')} style={styles.image} />
                <TextInput placeholder="Nome Completo" underlineColorAndroid={'transparent'} onChangeText={(val) => handleNameChange(val)} style={styles.inputStyle} />
            </View>
            <View style={styles.contentStyles}>
                <Image source={require('../../assets/EmailIcon.png')} style={styles.image} />
                <TextInput placeholder="Email" underlineColorAndroid={'transparent'} onChangeText={(val) => emailInputChange(val)} style={styles.inputStyle} />
                {data.check_textInputChange ?
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather
                            name="check-circle"
                            color={Colors.primary}
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
            <View style={styles.contentStyles}>
                <Image source={require('../../assets/PasswordIcon.png')} style={styles.image} />
                <TextInput placeholder="Senha" underlineColorAndroid={'transparent'} secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText={(val) => handlePasswordChange(val)} style={styles.inputStyle} />
                <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ?
                        <Feather style={styles.featherStyle}
                            name="eye-off"
                            size={20}
                        />
                        :
                        <Feather style={styles.featherStyle}
                            name="eye"
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
            <View marginTop={20}>
                <DatePicker  style={{borderColor: Colors.primary},{borderWidth: 2},{color:Colors.primary}}
                    date={data.date}
                    onDateChange={handleDateSelect}
                />
            </View>
            <View style={styles.picker}>
                <Image source={require('../../assets/GenderIdentityIcon.png')} style={styles.image} />
                <Picker style={{ borderColor: Colors.primary }, { borderWidth: 2 }, { color: Colors.text }}
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
            <TouchableOpacity /*onPress={() => postFirebase(data)consoleLogs}*/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Atualizar </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings', { user: usuario , vacancies: vagas })}>
                <View style={styles.buttonContainer, {marginTop:20}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Voltar </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export const alterInfoScreenOptions = () => {
    return {
        headerTitle: () => (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Alter Info</Text>
            </View>
        ),
        headerStyle: {
            backgroundColor: Colors.primary,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTintColor: Colors.whitefilling,
    };
};

const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
        marginLeft: 5,
        marginRight: 10,
    },

    inputStyle: {
        width: 300,
        borderWidth: 2,
        borderColor: Colors.text,
        color: Colors.primary,
    },

    contentStyles: {
        flexDirection: "row",
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'justify',
    },
    picker: {
        paddingTop: 40,
        alignItems: "center",
        flexDirection: "row",
    },

    warnings: {
        color: "red",
        fontSize: 10,
        fontWeight: "bold",
    },
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: Colors.text,
        color: Colors.text,
        borderRadius: 7,
        width: 200,
        height: 48,
        alignSelf: 'center',
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        color: Colors.primary,
    },
    featherStyle: {
        color: Colors.text,
    },
    header: {

    },
    headerTitle: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default AlterInfoScreen;