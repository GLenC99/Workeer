import React from "react";
import {StyleSheet,View,Image,TouchableOpacity} from "react-native";
import SearchBar from "../components/SearchBar";
import SearchBarScreen from "../components/SearchBarScreen.js";

const SearchScreen = (navigation) => {
    return(
        <SearchBarScreen>
            <SearchBar></SearchBar>  
        </SearchBarScreen>
        
        
    );
};

const styles = StyleSheet.create({
    menuinferior: {
        backgroundColor: 'lime',
        flexDirection: "row",
    },  
});

export default SearchScreen;