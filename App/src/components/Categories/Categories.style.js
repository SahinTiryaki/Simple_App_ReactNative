import React from 'react';
import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        
        borderTopStartRadius: 50,
        borderBottomStartRadius: 50,

        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        minHeight: 100
    },
 
    title:{
        color: 'black',
        letterSpacing: 3,
        fontWeight: 'bold',
        fontSize: 15
    },
    image:{
        minWidth: 100,
        resizeMode:'contain',
        marginRight:10,
        marginLeft: 10,
    
    }
})