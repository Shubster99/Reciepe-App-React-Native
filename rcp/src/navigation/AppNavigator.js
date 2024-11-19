import { View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Correct import
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Correct import
import WelcomeScreen from '../screens/WelcomeScreen';
import ReciepeListScreen from '../screens/ReciepeListScreen';
import RecipeDetails from '../screens/RecipeDetails';


const Stack = createNativeStackNavigator(); // Initialize Stack Navigator

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="ReciepeList" component={ReciepeListScreen} />
        <Stack.Screen name="ReciepeDetails" component={RecipeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
