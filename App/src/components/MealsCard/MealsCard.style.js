import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const device = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        marginBottom: 20,
        borderRadius: 10,
        minHeight:device.height/4,
        flexDirection:'column'
    },
    image:{
        borderRadius:20,
        minHeight:device.height/4,
        resizeMode:'cover'
    },
    inner_container:{
        position: 'absolute',
        backgroundColor:  'rgba(52, 52, 52, 0.8)',
        maxHeight: 100,
        maxWidth: device.width,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    inner_text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },

})