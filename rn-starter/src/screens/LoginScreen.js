import React, { useEffect } from "react";
import { TextInput, StyleSheet, Text, Button, View, ScrollView, TouchableOpacity } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import firebase from 'firebase';
import { Colors } from "../constants/Colors";
/*
Emails e Senhas Cadastrados
guilherme.cossu@aluno.ifsp.edu.br -> password
user1@email.com --> user1passwrod
oraelay@gmail.com --> juvcon17
*/

const LoginScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    secureTextEntry: true,
  });

  const handleEmailChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
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

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    })
  };

  const goToHome = () => {
    navigation.navigate('Home', { user: 'user' });
  };

  const signinFirebase = (data) => {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((userCredential) => {
      const user = userCredential.user;
      firebase.firestore().collection("Users").doc(user.uid).get().then((firebasedata) => {
        //console.log(firebasedata.data());
        //console.log(firebasedata.data().gender);
        let user = firebasedata.data();
        console.log(user);
        goToHome();
      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.log("Falha no Login");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}> Workeer</Text>
      </View>
      <View style={styles.appscreen}>
        <Text style={styles.labels}>Email</Text>
        <TextInput placeholder="Email" onChangeText={(val) => handleEmailChange(val)} style={styles.content} />
        <Text style={styles.labels}>Senha</Text>
        <View style={styles.passwordLine}>
          <TextInput placeholder="Senha" underlineColorAndroid={'transparent'} secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)} style={styles.content} />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ?
              <Feather style={styles.featherStyle}
                name="eye-off" size={20}
              />
              :
              <Feather style={styles.featherStyle}
                name="eye" size={20}
              />
            }
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate('Register2')} style={styles.register}>Primeira Vez? Cadastre-se</Text>
        </TouchableOpacity>
        <View style={styles.view2}>
        <TouchableOpacity onPress={() => signinFirebase(data)}>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Login </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },

  appView: {
    backgroundColor: '#FFF5EE'
  },

  viewTitle: {
    backgroundColor: Colors.primary,
  },

  textTitle: {
    fontSize: 50,
    textAlign: 'center',
    width: 300,
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 30,
    marginBottom: 30,
    color: Colors.text,
  },
  appscreen: {
    marginTop: 80,
  },

  content: {
    marginRight: 10,
    textAlign: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    marginLeft: 150,
    backgroundColor: Colors.text,
    color: Colors.primary,
  },
  labels: {
    marginTop: 30,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    width: 100,
    marginLeft: 150,
    color: Colors.primary
  },

  passwordLine: {
    flexDirection: 'row',
  },

  view2: {
    width: 200,
    alignSelf: 'center',
  },

  register: {
    marginTop: 30,
    marginBottom: 20,
    marginRight: 10,
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: 15,
    color: Colors.text,
  },
  buttonContainer: {
    alignItems: 'center'
},
button: {
    backgroundColor: Colors.primary,
    color: Colors.primary,
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
    color: Colors.text,
},
featherStyle: {
  color: Colors.primary,
},
});

export default LoginScreen;

/*
  fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpv3MTThp_aC0VbykbZa9VQP1gjKlv3uY',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'guilherme.cossu@aulno.ifsp.edu.br',
        password: 'password',
        returnSecureToken: true
      })
    }
  ).then((response) => { console.log("Login:" + response) }).catch((error) => { console.log(error) });
*/

/*
 async function signupHandler() {

   console.log("Cheguei no sigupHandler");
   // // dispatch(authActions.signup(formState.inputValues.email, formState.inputValues.password));
   // dispatch(authActions.login('andre@gmail.com', 'ifsp@1234'));
   const response = await fetch(
     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpv3MTThp_aC0VbykbZa9VQP1gjKlv3uY',
     {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         //email: 'guilherme.cossu@aulno.ifsp.edu.br',
         //password: 'password',
         email: data.email,
         password: data.password,
         returnSecureToken: true,
       })
     }
   );
   const resData = await response.json();
   console.log(resData);
 }
 */