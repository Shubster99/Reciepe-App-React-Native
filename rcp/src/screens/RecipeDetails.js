import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const RecipeDetails = ({navigation, route}) => {
  const {item} = route.params;
  console.log(item);

  return (
    <ScrollView style={{backgroundColor: item.color, flex: 1}}>
      <SafeAreaView style={{flexDirection: 'row', marginHorizontal: 16}}>
        <Pressable style={{flex: 1}} onPress={() => navigation.goBack()}>
          <FontAwesome
            name={'arrow-circle-left'}
            size={28}
            color="white"
            style={{flex: 1}}
          />
        </Pressable>
        <Pressable>
          <FontAwesome name={'arrow-circle-right'} size={28} color="white" />
        </Pressable>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            height: 300,
            width: 300,
            position: 'absolute',
            top: -150,
          }}>
          <Image
            source={item.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'stretch',
              borderRadius: 20,
            }}
          />
        </View>

        {/* Reciepe Name */}
        <Text
          style={{
            color: 'black',
            marginTop: 160,
            fontWeight: 'bold',
            fontSize: 28,
          }}>
          {item.name}
        </Text>
        {/* Reciepe Description  */}
        <Text style={{color: 'black', fontSize: 20, marginVertical: 16}}>
          {item.description}
        </Text>

        {/* Recipe Extra Details  */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View
            style={{
              backgroundColor: 'rgba(255,0,0,0.38)',
              padding: 16,
              borderRadius: 8,
              paddingVertical: 26,
              borderRadius: 12,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 40}}>⌚</Text>
            <Text style={{fontSize: 20, fontWeight: '400'}}> {item.time}</Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(135,206,235,0.8)',
              padding: 16,
              borderRadius: 8,
              paddingVertical: 26,
              borderRadius: 12,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 40}}>🥣</Text>
            <Text style={{fontSize: 20, fontWeight: '400'}}>
              {' '}
              {item.difficulty}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'rgba(255,165,0,0.48)',
              padding: 16,
              borderRadius: 8,
              paddingVertical: 26,
              borderRadius: 12,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 40}}>🔥</Text>
            <Text style={{fontSize: 20, fontWeight: '400'}}>
              {' '}
              {item.calories}
            </Text>
          </View>
        </View>

        <View style={{alignSelf: 'flex-start', marginVertical: 22}}>
          <Text
            style={{
              color: 'black',
              fontWeight: '600',
              fontSize: 22,
              marginBlock:6
            }}>
            Ingredients :
          </Text>
          {item.ingredients.map(ingredients => {
            return(
            <View style={{flexDirection:"row",alignItems:"center", marginVertical:4}}>
              <View
                style={{
                  backgroundColor: 'red',
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                }}></View>
                <Text style={{fontSize:18,marginVertical:2}}> {ingredients}</Text>
            </View>
            );
          })}
        </View>
        <View style={{alignSelf: 'flex-start', marginVertical: 22}}>
          <Text
            style={{
              color: 'black',
              fontWeight: '600',
              fontSize: 22,
              marginBlock:6
            }}>
            Steps :
          </Text>
          {item.steps.map((steps,index) => {
            return(
            <View style={{flexDirection:"row",alignItems:"center", marginVertical:4}}>
             
                <Text style={{fontSize:18,marginVertical:6,marginLeft:6}}> {`${index+1}). ${steps}`}</Text>
            </View>
            );
          })}
        </View>
        
      </View>
    </ScrollView>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({});
