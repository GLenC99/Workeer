import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Picker } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker';
import * as Animatable from 'react-native-animatable';

//Precisa conseguir reconhecer o usuario e postar as informações novas, substituindo as antigas, 
//o valor por default pode ser o que já esta gravado no firebase do usuario
const AlterInfoScreen = ({ navigation }) => {
    const [data, setData] = React.useState({
        name: '',
        gender: '',
        email: '',
        password: '',
        date: null,
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const auth = getAuth();

    const user = auth.currentUser;
    const newPassword = data.password;
    const newEmail = data.email;


    updateEmail(user, newEmail).then(() => {
        console.log("Email updated!");
        // ...
    }).catch((error) => {
        console.log("An error occurred");
    });

    updatePassword(user, newPassword).then(() => {
        console.log("Password update successful");
    }).catch((error) => {
        // An error ocurred
        // ...
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

    const updateInfo = () => {
        updateEmail(user, newEmail);
        updatePassword(user, newPassword);

    };

    return (
        <View>
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
            <View marginTop={20}>
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
            <View>
                <TouchableOpacity>
                    <Text /*onPress={() => postFirebase(data)consoleLogs}*/>Atualizar</Text>
                </TouchableOpacity>
            </View>
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
        paddingTop: 40,
        alignItems: "center"
    },

    warnings: {
        color: "red",
        fontSize: 10,
        fontWeight: "bold",
    },
});

export default AlterInfoScreen;