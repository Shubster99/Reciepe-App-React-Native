import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header'; // Adjust the import path as needed
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RecipeCard from '../components/RecipeCard';

const ReciepeListScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1 ,marginHorizontal:12}}>
        {/* render header */}
      <Header headerText="Hi, John" headerIcon="bell-o" />
      <SearchFilter icon="search" placeholder={"Enter your favourite recipe"}/>

      {/* Category filter */}
      <View style={{marginTop:15}}>
      <Text style={styles.category}>Categories</Text>
      {/* Categories List  */}
      <CategoriesFilter/>
      </View>

      {/* Reciepe List Filter  */}
      <View style={{marginTop:2, flex:1}}>
       <Text style={styles.category}>Recipes</Text>
        {/* Reciepes List  */}
      <RecipeCard />
       </View>

    </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  screenText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  category:{
    fontWeight:"bold",
    marginTop: 20,
    fontSize: 22,
  }
});

export default ReciepeListScreen;
