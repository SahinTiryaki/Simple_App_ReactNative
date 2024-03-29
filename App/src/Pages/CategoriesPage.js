import React, {useState, useEffect} from 'react';
import {View, Text, FlatList , ActivityIndicator, StyleSheet} from 'react-native';
import axios from 'axios';
import Categories from '../components/Categories/';
const CategoriesPage = ({navigation}) =>{

     const [categories, setCategories] = useState([])
     const [isLoading, setLoading] = useState(true)

     async function getCategories() {
      const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setCategories(data.categories);
      setLoading(false);
    };
     function inspectCategory(strCategory){
               navigation.navigate('Meals', {strCategory:strCategory});
     }
     
     const renderCategories = ({item}) => <Categories inspectCategory = {inspectCategory} category = {item} /> 
     useEffect(()=>{getCategories()},[]);
     return (
         <View style = {styles.container}>
           {
        isLoading ?

        <ActivityIndicator  size = 'large' color= 'white' />
        :
       
        <FlatList
        data = {categories}
        keyExtractor={(item)=>item.idCategory}
        renderItem={renderCategories}
      />
      }
    
         </View>

)
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'orange',
    padding: 10,
    flex: 1
  }
})


export default CategoriesPage;