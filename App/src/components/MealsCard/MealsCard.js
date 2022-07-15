import React from 'react';
import {View, Text, ImageBackground, TouchableWithoutFeedback, Dimensions} from 'react-native';
import styles from './MealsCard.style'
const MealsCard = ({item, inspectMeals}) => {
    const inspectMeal=()=>inspectMeals(item.idMeal)
    return (
<TouchableWithoutFeedback onPress={inspectMeal} >

<View style={styles.container} > 

                <ImageBackground source = {{uri: item.strMealThumb}} style = {styles.image} />
                <View style={styles.inner_container}>

            <Text  adjustsFontSizeToFit={false} numberOfLines={1}
 style={styles.inner_text}
 >{item.strMeal}</Text>
</View>
            </View>
            </TouchableWithoutFeedback>

    )
}

export default MealsCard;