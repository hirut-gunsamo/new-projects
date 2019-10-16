import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import img2 from '../img/coffee2.png'
import time from '../img/time.png'
import img3 from '../img/5.jpg'

export default class Services extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infos}>
                    <Text >what kind of coffee we serve for you</Text>
                    <Text>who are in extremely love with ETHIO-COFFEE </Text>
                    <Text>friendly system</Text>
                </View>
                <View style={styles.card}>
                    <Image source = {time} style = {styles.images}/>
                   <Text>Save Your Time</Text>
                   <Text>Time management is the coordination of tasks and activities to maximize the effectiveness of an individual's efforts. Ethio coffees developed to serve you in easiest and simple way to save your time!!!!!</Text> 
                </View>
                <View style={styles.card}>
                    <Image source = {img2} style = {styles.images}/>
                   <Text>Make your first choice Ethio-coffees</Text> 
                   <Text>Before you decide to buy a coffee visit Ethio coffees website to get a better one @Ethio Coffees</Text>
                </View>
                <View style={styles.card}>
                    <Image source = {img3} style = {styles.images}/>
                   <Text>Use Ethio-coffee site to </Text>
                   <Text>make your life easy!!</Text> 
                   <Text>Make your first choice ethio coffee to make your life easy and to get special coffee beans with high quality. we differ in@Ethio Coffees.</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    },
    infos:{
        alignItems: 'center',
        justifyContent:'center'
    },

    card:{
        marginTop:40,
        backgroundColor:'white',
        borderColor:'white',
        alignContent:"stretch",
        alignItems:"center",
        borderWidth:3,
        borderRadius:8,
        textDecorationColor:'white',
        height:200,
        width:300,


    },
    images:{
        height:100,
        width:100,
        alignItems:'center',

    },
  
})
