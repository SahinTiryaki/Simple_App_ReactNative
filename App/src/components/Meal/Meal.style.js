import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const device = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        margin:10
    },
    image: {
        marginBottom: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10, 
        height: device.height/3, 
        resizeMode:'cover'
    },
    title:{
        color: '#263238',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom:10,
        borderColor: 'black',
        fontWeight: 'bold',
        fontSize: 30
    },
    description:{
        marginBottom: 10,
        color:'black',
        textAlign: 'justify',
        fontWeight: '10000',
        fontSize: 15
    },
});