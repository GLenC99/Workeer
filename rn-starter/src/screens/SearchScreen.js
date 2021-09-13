import React from "react";
import {StyleSheet,View,Image,TouchableOpacity, Alert} from "react-native";
import SearchBar from "../components/SearchBar";
import SearchBarScreen from "../components/SearchBarScreen.js";
import Feather from 'react-native-vector-icons/Feather';
const SearchScreen = (navigation) => {
    const botaoPressionado= () => {
        Alert.alert("Botão Pressionado")
    }


    return(
        <SearchBarScreen >
            <View style={styles.barraStyle}>
            <SearchBar/>
            <TouchableOpacity onPress={botaoPressionado} style={styles.botaoPesq}>
                    <Feather
                        name="search"
                        color="black"
                        size={40}
                        marginLeft={40}
                        marginRight={40}
                    />
            </TouchableOpacity>
            </View>
        </SearchBarScreen>
        
        
    );
};

const styles = StyleSheet.create({
    menuinferior: {
        backgroundColor: 'lime',
        flexDirection: "row",
    },
    barraStyle: {
        flexDirection: "row",
    },
    botaoPesq: {
        alignItems: "center",
        marginLeft: 10,
    }  
});

export default SearchScreen;