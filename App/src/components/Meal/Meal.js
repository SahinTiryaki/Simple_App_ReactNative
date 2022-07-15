import React from 'react';
import {View, Image, Text, Linking, Button, Dimensions} from 'react-native';

const Meal = ({meal}) => {
    
    return (
        <View style = {{margin:10}}>
            <Image  style={{  marginBottom: 10,borderTopLeftRadius: 10,borderTopRightRadius: 10, height: Dimensions.get('window').height/3, resizeMode:'cover'}} source = {{uri: meal.strMealThumb}} />
            
            <Text style = {{ color: '#c88719', borderBottomWidth: 1,paddingBottom: 10, marginBottom:10, borderColor: 'black',fontWeight: 'bold', fontSize: 30}} >{meal.strMeal} </Text>
            <Text style = {{marginBottom: 10,color:'black', textAlign: 'justify', fontSize: 15}} >
                {meal.strInstructions}
            </Text>
            <Button  color={'orange'}  title = {'Watch on Youtube'} onPress = {()=>console.log('watched')} />
        </View>

    )
}

export default Meal;
