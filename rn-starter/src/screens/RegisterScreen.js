import React, { Component,useState } from "react";
import {TextInput, StyleSheet, Text, Picker, View,Button, Image, Alert,Container,Content,Form } from "react-native"
//import DatePicker from '@react-native-community/datetimepicker';


const RegisterScreen = ({navigation}) => {
    navigation.onPress = false;
    const [selectedValue, setSelectedValue] = useState("mulher");
    const [name, setName] = useState('');
    const [bornDate, setBornDate] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    function checkToNavigate() {
        if((navigation.onPress) == false)
          navigation.onPress = true;
      };

    function consoleLogs(){
     console.log(name);
     console.log(email);
     console.log(password);

    }
    
      /*
    state = {
      data:'',
    };
    
    changeDate = (valor) => {
      yhis.setState({
          data: valor,
      })
      setBornDate(data);
    };
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
          email: 'guilherme.cossu@aulno.ifsp.edu.br',
          password: 'password',
          returnSecureToken: true
        })
      }
    ).then((response) => { console.log("Resposta:" + response.json()) }).catch((error) => { console.log(error) })

  }, []);
  */

  const onHandleChange = (event) => {
    console.log(event.target.id);
    console.log(event.target.value);
    /*
    if(event.target.id==="name" ){
      setBook({...book,name: event.target.value})
    }
    if(event.target.id==="author" ){
      setBook({...book,author: event.target.value})
    }
    if(event.target.id==="pages" ){
      setBook({...book,pages: event.target.value})
    }
    */
  };

  return(
        <View style={styles.container}>       
          <View style = {styles.inforows}>
          <Image source={require('../../assets/NameIcon.png')} style={styles.image}/>
          <Text>Nome(Nome Social)</Text>
          <TextInput placeholder = "Nome Completo" onValueChange = {name => setName(name)} style={styles.content} 
              id="name" value = {name} ></TextInput>
          </View>
          <View style = {styles.inforows}>
            <Image source={require('../../assets/DateIcon.png')} style={styles.image}/>         
            <Text style={styles.date}>Data de Nascimento:</Text>
          </View>
          <View style = {styles.inforows}>
            <Image source={require('../../assets/GenderIdentityIcon.png')} style={styles.image}/>
            <Text style={styles.content}>Genero</Text>
            <Picker selectedValue={selectedValue}  style={styles.pickers}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                  <Picker.Item label="Homem" value="homem" />
                  <Picker.Item label="Mulher" value="mulher" />
                  <Picker.Item label="Travesti" value="travesti" />
                  <Picker.Item label="Pessoa Não Binária" value="naobinaria" />
            </Picker>
          </View>
          <View style = {styles.inforows}>
            <Image source={require('../../assets/EmailIcon.png')} style={styles.image}/>
            <Text>Email</Text>
            <TextInput placeholder = "Email" style={styles.content} onValueChange = {email => setEmail(email)} id="email" 
              value={email}/>
          </View>    
          <View style = {styles.inforows}>
            <Image source={require('../../assets/PasswordIcon.png')} style={styles.image}/>
            <Text>Senha de Usuário</Text>
            <TextInput placeholder = "Senha de Usuário" onValueChange = {password => setPassword(password)} style={styles.content} 
              id="password" value = {password} ></TextInput>
          </View>
          <Button title="Cadastrar" onPress={consoleLogs,() => navigation.navigate('Home')} /*{() => navigation.navigate('Home')}*/ ></Button>
        </View>     
      );
    };

const styles = StyleSheet.create({
    image: {
      width: 20,
      height: 20,
      resizeMode: 'stretch',
      marginLeft: 40,
     marginRight:40,    
    },
    inforows: {
      flexDirection: "row",
      display: 'flex',
    },
    date: {
      flexDirection: "row",
    },
    dateComponent: {
      width: 200,
    },
    content : {
      marginLeft: 10,
    }
  }); 
      
export default RegisterScreen;


/*
            <DatePicker
              format="DD-MM-YYYY"
              style={styles.dateComponent}
              date={this.state.data}
              onDateChange={this.changeDate}
            />  
*/


/*
            <View style={styles.date}>
              <TextInput placeholder = "Dia" style={{width:30, marginLeft: 10}}></TextInput>
              <TextInput placeholder = "Mês" style={{width:30, marginLeft: 10}}></TextInput>
              <TextInput placeholder = "Ano" style={{width:30, marginLeft: 10}}></TextInput>
           </View>


*/

  /*
          <View style = {styles.inforows}>
            <Image source={require('../../assets/LoginIcon.png')} style={styles.image}/>
            <Text>Nome de Usuário</Text>
            <TextInput placeholder = "Nome de Usuário" style={styles.content}></TextInput>
          </View>




  */

      /*
          <Image/>    
          <Text style={styles.content}>Seus pronomes são:</Text>
          <View  style={styles.checkboxM}>
            <CheckBox/>
            <Text>Masculinos</Text>
          </View>
          <View style={styles.checkboxF}>
            <CheckBox/>
            <Text>Femininos</Text>
          </View>
          <View  style={styles.checkboxN}>
            <CheckBox/>
            <Text >Neutros</Text>
          </View>



          const styles = StyleSheet.create({
        checkboxM: {
          flexDirection: "row",
          alignSelf: "center",
        },
      
        checkboxF: {
          flexDirection: "row",
          alignSelf: "center",
        },
      
        checkboxN: {
          flexDirection: "row",
          alignSelf: "center",
        },
        container: {
      
        },
      }); 
      */