import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


const Weather = () =>{
    return(
        <View style = {styles.weatherContainer}>
        //css for header and body
            <View style = {styles.headerContainer}>
                <MaterialCommunityIcons size ={48} name = "weather-sunny" color={'#fff'}/>
                <Text style = {styles.tempText}>Temperature</Text>
            </View>
            <View style = {styles.bodyContainer}>
                <Text style = {styles.title}>{Weather}</Text>
                <Text style = {styles.subtitle}>It hurts My Eyes!!</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    weatherContainer:{
        flex:1,
        backgroundColor: '#f7b733'
    },
    headerContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempText:{
        fontSize: 48,
        color: '#fff'
    },
    bodyContainer:{
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    title:{
        fontSize: 48,
        color:'#fff'
    },
    subtitle:{
        fontSize: 20,
        color:'#fff'
    }
});

export default Weather;