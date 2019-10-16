import React from 'react'
import {  Image, View , Dimensions} from 'react-native'
import img1 from './img/coffee7.jpg'

const { height, width} = Dimensions.get('window')
const ImagesExample = () => (
   <View style ={{borderColor: '#ddddd',width:width-10, height:280, marginTop:5,}}>
          <Image style= {{flex:1, height:null, width:null,resizeMode: 'cover', marginLeft:20,
             borderRadius: 5, borderWidth: 1}}

         source = {require('./img/1.jpg')} />
   </View>
)
export default ImagesExample