import React, { Component } from 'react';
import { View, Text,Dimensions, Image, ScrollView, Linking, Animated,Platform} from 'react-native';
import Footer from '../HomeInfo/footer'


const { height, width} = Dimensions.get('window')
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    title:'About'
    } 

  render() {
    
    return (
   <View>

     <ScrollView>    
      <View style ={{borderColor: '#ddddd',width:width-3, height:300, marginTop:5, marginLeft:1, marginRight:1}}>
          <Image style= {{flex:1, height:null, width:null,resizeMode: 'cover',
             borderRadius: 5, borderWidth: 1}}

         source = {require('../HomeInfo/img/header-bg.jpg')} />
        
      </View>

      {/**===================================================== */}
      {/**          Titles     */}
      {/**====================================================== */}


     
{/**===================================================== */}
{/**          the product is list below here      */}
{/**====================================================== */}

       
        <View style={{marginTop:10, paddingHorizontal:20}}>
            <Text style={{fontWeight:'700', fontSize:24}}>
               Coffees product 
            </Text>
            <Text style={{fontWeight:'100', marginTop:10}}>
           Ethio Coffee website is easier for customers to order and buy type of coffee they want. you can simply use the link @Ethio Coffees and order for a coffee type you wish to buy. Let's use Ethio Coffees $ have a bright day!!
            </Text>
            <View style ={{borderColor: '#ddddd',width:width-40, height:280, marginTop:5,}}>
          <Image style= {{flex:1, height:null, width:null,resizeMode: 'cover', marginLeft:20,
             borderRadius: 5, borderWidth: 1}}

         source = {require('../HomeInfo/img/logos.png')} />
        
      </View>
             
         </View>



        <Footer />

      </ScrollView>   
      </View>
    );
  }
}

export default Cart;
