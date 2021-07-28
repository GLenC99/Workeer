import React from "react";
import {StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import SearchBarScreen from "../components/SearchBarScreen";

const SearchScreen = () => {
    return(
        <SearchBarScreen>
            <SearchBar></SearchBar>
        </SearchBarScreen>
    );
};

const styles = StyleSheet.create({
    
});

export default SearchScreen;