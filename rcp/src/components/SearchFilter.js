import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const SearchFilter = ({icon, placeholder}) => {
  return (
    <View style={{
    backgroundColor:"#fff",
    flexDirection:"row",
    paddingVertical:10,
    borderRadius:8,
    marginVertical:16,
    paddingHorizontal:14,
    shadowColor:"#000",
    shadowOffset: {width:0,height:4},
    shadowOpacity: 0.1,
    shadowRadius:7, 
    }}>
      {/* <FontAwesome name={icon} size={18} color="#f96613" /> */}
      <TextInput style={{paddingLeft:8,fontSize:16,color:"#808080"}}> 
       {placeholder}</TextInput>
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({})