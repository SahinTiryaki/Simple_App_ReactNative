import React, {useState, useEffect}  from "react";
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import axios from "axios";
import MealsCard from "../components/MealsCard/MealsCard";
const MealsPage = ({route, navigation}) => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setLoading] = useState(true);

    async function fetchData() {
        const  response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+route.params.strCategory);
        setMeals(response.data.meals);
        setLoading(false);
       
    }
    
    const inspectMeals = (strIdMeal)=>navigation.navigate('MealDetails', {idMeal: strIdMeal})

    useEffect(()=>{fetchData();},[]);
    return (
        <View style={styles.container}>
         {
        isLoading ?
        <ActivityIndicator  size = 'large' color= 'white' />
        :
        <FlatList
        data = {meals}
        keyExtractor={(item)=>item.idMeal}
        renderItem={({item, index})=> <MealsCard inspectMeals={inspectMeals} item={item} />}
      />
      }
    
        </View>
    
    )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'orange',
      flex: 1,
      padding:10
    }
  })
  

export default MealsPage;