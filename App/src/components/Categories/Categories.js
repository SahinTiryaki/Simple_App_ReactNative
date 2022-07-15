import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './Categories.style'

const Categories = (props) => {
    return (

<TouchableWithoutFeedback onPress={()=>props.inspectCategory(props.category.strCategory)} >

<View style={styles.container}>

           <Image  style={styles.image} source={{uri:props.category.strCategoryThumb}} />
            <View style = {styles.inner_container}>
            <Text style = {styles.title} >{props.category.strCategory}</Text>
            </View>

        </View>
        </TouchableWithoutFeedback>

 
    )
}

export default Categories;