import React, { Component } from 'react'
import { Text,
         View,
        StyleSheet,
        SafeAreaView,
        ScrollView,
        Image,
        TextInput,
        Platform, StatusBar } from 'react-native'
import Category from './Category'

export default class SlideServices extends Component {
    componentWillMount(){
        this.startHeaderHeight =80
        if(Platform.OS=='android'){
            this.startHeaderHeight =100 + StatusBar.currentHeight
        }
    }
    render() {
        return (
           <SafeAreaView style={{flex:1}}>
              <View style={{flex:1}}>
                  <View style={{height:this.startHeaderHeight,
                         backgroundColor:'white',
                         borderBottomColor:1,
                         borderBottomColor:'#dddddd'}}>
                      
                      <View style={{flexDirection:'row',
                               padding:10,
                               backgroundColor:'white',
                               marginHorizontal:20,
                               shadowOffset:{width:0,height:0},
                               shadowColor:'black',
                               shadowOpacity:0.2,
                               elevation:1,
                               marginTop:Platform.OS == 'android'? 30:null}}>
                         


                         <TextInput 
                              underlineColorAndroid="transparent"
                              placeholder="Try New Information"
                              placeholderTextColor="grey"
                              style={{flex:1,fontWeight:'700',
                                   backgroundColor:'white'}}/>
                      </View>
                  </View>


               <ScrollView
               scrollEventThrottle={16}
               >
                 <View style={{flex:1,backgroundColor:'white',paddingTop:20}}>
                     <Text style={{fontSize:24, fontWeight:'700',
                           paddingHorizontal:20}}>
                        What can we help you find ?
                     </Text>
                     <View style={{height:130, marginTop:20}}>
                        <ScrollView style={{}}
                               horizontal={true}
                               showsHorizontalScrollIndicator={false} >
                            <Category imageUri={require('../img/time.png')}
                                    name="what kind of coffee we serve for you"/>
                            <Category imageUri={require('../img/2.jpg')}
                                    name="Time "/>
                            <Category imageUri={require('../img/3.jpg')}
                                    name="Sidam Coffee"/>
                            <Category imageUri={require('../img/5.jpg')}
                                    name="Life with Coffees"/>
                        </ScrollView>
                     </View>
                 </View>
               </ScrollView>

              </View>
           </SafeAreaView>
        )
    }
}
