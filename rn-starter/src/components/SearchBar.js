import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { set } from 'react-native-reanimated';
import { Colors } from '../constants/Colors';

const SearchBar = () => {
    return(
        <View style = {styles.container}>
            <TextInput placeholder='Search here..' style={styles.searchInput}></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width: '45%',
        height: 52,
        backgroundColor: 'white',
        borderWidth:1,
        //borderRadius:8,
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16,
        color: Colors.text,   
    }  
});

export default SearchBar;