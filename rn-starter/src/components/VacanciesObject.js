import React from "react";
import {View, Text, StyleSheet} from "react-native";

const VacanciesObjects = (props) => {
    return(
        <View style = {{height:85, width:85, alignItems:'center', backgroundColor:'#99bbff', marginBottom:10, fontSize : 20, alignSelf:'center' }}>
            <Text>{props.nomevaga}</Text>
            <Text>{props.link}</Text>
            <Text>{props.localvaga}</Text>
            <Text>{props.numvagas}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default VacanciesObjects;