import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesPage from './Pages/CategoriesPage';
import MealsPage from './Pages/MealsPage';
import MealsDetailsPage from './Pages/MealsDetailsPage';
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
      <TouchableOpacity
    onPress={()=>navigation.navigate('Categories')}
      >
      <Text style={{fontSize: 30, fontWeight: '700',color:'#1565c0'}}>Let's start</Text>

      </TouchableOpacity>

    </View>
  );
}

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <View style={{flex:1}}>
       <NavigationContainer>
      <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={
        {
          headerStyle: { backgroundColor: '#0077c2' },

        
          headerTintColor: 'white',

        }
      
      }
      >
        <Stack.Screen name="HomePage" component={HomeScreen} />
        <Stack.Screen name="Categories" component={CategoriesPage} />
        <Stack.Screen name="Meals" component={MealsPage} />
        <Stack.Screen name="MealDetails" component={MealsDetailsPage} />

      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

export default Router;