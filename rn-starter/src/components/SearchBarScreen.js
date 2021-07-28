import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView,TouchableOpacity, Image} from 'react-native';

const SearchBarScreen = ({children}) => {
    return (
        <View style = {styles.container}>
            {children}
            <ScrollView>  
                <View style={styles.menuinferior}>
                    <TouchableOpacity onPress={() => Alert.alert('Indo para Home')}>
                        <Image source={require('../../assets/UserIcon.png')}/>
                    </TouchableOpacity>    
                    <TouchableOpacity onPress   ={() => Alert.alert('Indo para Buscar Vagas')}>
                        <Image  source={require('../../assets/UserIcon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Indo para ???????')}>
                        <Image  source={require('../../assets/UserIcon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Indo para Configurações')}>
                        <Image source={require('../../assets/UserIcon.png')}/>
                    </TouchableOpacity>
                </View>    
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
    },
    menuinferior: {
        backgroundColor: 'lime',
    },  
});

export default SearchBarScreen;