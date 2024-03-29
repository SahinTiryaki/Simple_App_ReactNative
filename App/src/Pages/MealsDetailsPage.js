import React, {useState, useEffect} from 'react';
import {View, StyleSheet,  ScrollView,ActivityIndicator} from 'react-native';
import axios from 'axios';
import Meal from '../components/Meal/Meal';
const MealsDetailsPage = ({route}) => {
    const [isLoading, setLoading] = useState(true);
    const [mealDetails, setMealsDetails] = useState([]);    

    async function fetchData() {
        const  {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+route.params.idMeal);
        setMealsDetails(data.meals[0]);
        setLoading(false)
    }

    useEffect(()=>{fetchData()},[]);

    return (
        <View style = {styles.container} >

        {
            isLoading ?
            <ActivityIndicator size='large' color = 'blue' />
            :
            <ScrollView>
            <Meal meal = {mealDetails} />

            </ScrollView>
        }

       </View> 

    )
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:'#ff8a65',
      flex: 1
    }
  })
  
export default MealsDetailsPage;