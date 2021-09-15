import React from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from "react-native";

const UserOpinionScreen = ({ navigation }) => {
    const equipeemail = "emailworkeer@email.com"
    return(
        <View>
            <Text>Insira abaixo sua opinião sobre o sistema</Text>
            <textarea cols= "10" row= "2" />
            <TouchableOpacity>
                <Text>Enviar</Text>
            </TouchableOpacity>
            <Text>
                Caso de problemas urgentes por favor entre em contato através do email {equipeemail}
            </Text>
            <Text style={styles.textWarning}>
                (Caso tenha ocorrido algum tipo de problema ou descriminação relacionado a uma das empresas recomendadas pelo sistema
                por favor realize sua ocorrencia retornando a tela de configurações e nos informe através da opção reportar problemas)
            </Text>
            <Button title="VOLTAR" onPress={() => navigation.navigate('Settings')}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput : {
        height : 300,
        width : 300,
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    textWarning : {
        fontSize : 8,
        color: 'red',
    },
});

export default UserOpinionScreen;