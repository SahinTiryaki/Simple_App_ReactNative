import React from 'react';
import {View, Image, Text, Button, Dimensions} from 'react-native';
import styles from './Meal.style';
const Meal = ({meal}) => {
        
    return (
        <View style = {styles.container}>
            <Image  style={styles.image } source = {{uri: meal.strMealThumb}} />
            
            <Text style = {styles.title} >{meal.strMeal} </Text>
           <Text style = {styles.description} >
                {meal.strInstructions}
            </Text>
            <Button  color={'#ba68c8'}  title = {'Watch on Youtube'} onPress = {()=>console.log('watched')} />
        </View>

    )
}

export default Meal;
