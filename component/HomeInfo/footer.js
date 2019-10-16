import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class footer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{marginLeft:10}}>
                    <Text style={{fontSize:13, fontWeight:'400',fontFamily:'Times Roman',marginRight:20, color:'white'}}>Type of Coffee</Text>
                     <Text style={{fontSize:9, fontWeight:'100',fontFamily:'Times Roman',marginRight:20, color:'white'}}>Ethiopian Yirgacheffe Coffee.</Text>
                     <Text style={{fontSize:9, fontWeight:'100',fontFamily:'Times Roman',marginRight:20, color:'white'}}>Ethiopain Jimma Coffee</Text>
                     <Text></Text>
                     <Text></Text>
                     <Text></Text>
                </View>
                <View>
                    <Text style={{fontSize:13, fontWeight:'400',fontFamily:'Times Roman',marginRight:20, color:'white'}}>contact us</Text>
                     <Text style={{fontSize:9, fontWeight:'100',fontFamily:'Times Roman',marginRight:20, color:'white'}}>Ethio Coffee.</Text>
                     <Text style={{fontSize:9, fontWeight:'100',fontFamily:'Times Roman',marginRight:20, color:'white'}}>Addis Ababa, Ethiopia</Text>
                </View>
                <View>
                    <Text>Follow Us </Text>
                    <Text style={{fontSize:9, fontWeight:'100',fontFamily:'Times Roman',marginRight:20, color:'white'}}> Via EthioCoffee Links.</Text>
                  
                </View>
                </View>
            
        )
    }
}
const styles = StyleSheet.create({
  container:{ 
      flex:1,
      flexDirection:'row',
      backgroundColor:'rgb(170, 113, 7)',
      color:'white',
      textShadowColor:'black',
      fontStyle:'italic',
      marginTop:100,
      color:'#f3f3f3',
      resizeMode:'cover'
      
  }
  
})
