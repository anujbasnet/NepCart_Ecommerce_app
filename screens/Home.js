import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'

const { height,width } = Dimensions.get("window");
const Home = () => {
  
  return (
    
    <View>
      <Image source={require("../assets/images/supreme.jpg")} style={styles.image}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  image: {
    width: width *0.15,
    height: height *0.2,
    borderRadius: 50,
    marginVertical:"10%",
    marginHorizontal:"2%"
  },
  
})