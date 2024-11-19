import { View, Text ,Image,TouchableOpacity,navigation} from 'react-native'
import React from 'react'
import ReciepeListScreen from './ReciepeListScreen'

const WelcomeScreen = ({navigation}) => {
  return (
    <View style= {{flex:1, alignItems:"center"}}>
        <Image source={require("../../assets/images/foo-image.jpg")} style={{ width: 400, height: 500,marginTop:0 }} />
      <Text style={{color:"red", fontSize:22,fontWeight:"bold"}}>40K+ Premium Recipies</Text>
      <Text style={{color:"black", fontSize:42,fontWeight:"bold",marginTop:34,marginBottom:40}}>Cook Like A Chef</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("ReciepeList")} style={{backgroundColor:"#f96163",borderRadius:18,paddingVertical:18,width:"80%",alignItems:"center"}}>
        <Text style={{color:"white",fontSize:18,fontWeight:"500"}}> Let's Go </Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen