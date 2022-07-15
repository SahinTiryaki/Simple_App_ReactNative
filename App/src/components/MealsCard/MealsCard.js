import React from 'react';
import {View, Text, Image, ImageBackground, TouchableWithoutFeedback, Dimensions} from 'react-native';

const MealsCard = ({item, inspectMeals}) => {
    const inspectMeal=()=>inspectMeals(item.idMeal)
    return (
<TouchableWithoutFeedback onPress={inspectMeal} >

<View style={{marginBottom: 20, borderRadius: 10, minHeight:Dimensions.get('window').height/4 ,flexDirection:'column'}} > 

                <ImageBackground source = {{uri: item.strMealThumb}} style = {{borderRadius:20, minHeight:Dimensions.get('window').height/4, resizeMode:'cover'}} />
                <View style={{position: 'absolute', backgroundColor:  'rgba(52, 52, 52, 0.8)', maxHeight: 100,maxWidth: Dimensions.get('window').width,left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'flex-end'}}>

            <Text  adjustsFontSizeToFit={false} numberOfLines={1}
 style={{color: 'white',fontWeight: 'bold', fontSize: 30}}
 >{item.strMeal}</Text>
</View>
            </View>
            </TouchableWithoutFeedback>

    )
}

export default MealsCard;