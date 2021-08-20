import React from "react";
import { StyleSheet, Text, View, Button} from "react-native";


const UserOpinionScreen = ({ navigation }) => {
    return(
        <View>
            <Button title="VOLTAR" onPress={() => navigation.navigate('Settings')}></Button>
            <Text>User Opinion Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default UserOpinionScreen;