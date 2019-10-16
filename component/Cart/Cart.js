import React, { Component } from 'react';
import { View, Text,Dimensions, Image, ScrollView, Linking, Animated,Platform} from 'react-native';
import Footer from '../HomeInfo/footer'
import Product from './ProductsList'


const { height, width} = Dimensions.get('window')
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    title:'Coffee Product'
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


      <View style={{marginTop:40, paddingHorizontal:20}}>
          <Text style={{fontSize:24, fontWeight:'700',alignContent:'center', justifyContent:'center',alignItems:'center',marginLeft:100}}>Ethio-Coffees</Text>
          <Text></Text>
      </View>

{/**===================================================== */}
{/**          the product is list below here      */}
{/**====================================================== */}

        <View style={{height:130, marginTop:20}}>
             <ScrollView
            
             horizontal={true}
             showsVerticalScrollIndicator={true}
             showsHorizontalScrollIndicator={false}>
                 <Product imageUri={require('../img/1.jpg')} name="Sidama" price="10" />
                 <Product imageUri={require('../img/2.jpg')} name="Jimma" price="120" />
                 <Product imageUri={require('../img/3.jpg')} name="Kartume" price="100" />
                 <Product imageUri={require('../img/4.jpg')} name="Borana" price="78" />
                 
             </ScrollView>
        </View>
        <View style={{marginTop:40, paddingHorizontal:20}}>
            <Text style={{fontWeight:'700', fontSize:24}}>
               Coffees product 
            </Text>
            <Text style={{fontWeight:'100', marginTop:10}}>
               A new coffees is posted here and you can select form this to add in packet
            </Text>
            <View style ={{borderColor: '#ddddd',width:width-40, height:250, marginTop:5,}}>
          <Image style= {{flex:1, height:null, width:null,resizeMode: 'cover',
             borderRadius: 5, borderWidth: 1}}

         source = {require('../HomeInfo/img/6.jpg')} />
        
      </View>
             
         </View>



        <Footer />

      </ScrollView>   
      </View>
    );
  }
}

export default Cart;
