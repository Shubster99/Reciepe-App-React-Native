import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import {ReciepeList, colors} from '../screens/Constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const RecipeCard = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <FlatList
        data={ReciepeList}
        renderItem={({item}) => (   
          <Pressable
              onPress={()=> navigation.navigate("ReciepeDetails", {item : item })}
              style={{
              backgroundColor: colors.COLOR_LIGHT,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 4},
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 16,
              marginVertical: 26,
              paddingHorizontal: 12,
              alignItems: 'center',
            }}>
            <Image
              source={item.image}
              style={{width: 150, height: 150, resizeMode: 'center'}}
            />
            <Text>{item.name}</Text>
            <View style={{flexDirection:"row", marginTop:8}}>
              <Text>{item.time}</Text>
              <Text>| </Text>
              <View style={{flexDirection:"row"}}>
              <Text style={{marginRight: 4}}>{item.rating}</Text>
              <FontAwesome name="star" size ={16} color={colors.COLOR_PRIMARY}/>
              </View>
            </View>
          </Pressable>
  
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({});
