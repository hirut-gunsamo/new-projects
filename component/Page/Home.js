import React, { Component } from 'react'
import { View, Text, StatusBar,Image,ScrollView,
    StyleSheet, 
    TextInput,
    TouchableOpacity} from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Service from './Services'
import Images from '../Image'
import Footer from '../HomeInfo/footer'
import validation from '../validation/validationLogin'
import Carts from '../Cart/Cart'
import Abouts from './Aboutus'
import postProduct from './postProduct'


class HomeInfo extends Component{
    static navigationOptions = {
        title:'Home'
        } 
    render(){
        return( 
      
    <View style={styles.container}>
      
    <Text onPress = { ()=> navigate('Home') }> 
     </Text>
    <ScrollView>
        
        <View style={styles.btnContainer}>
        <TouchableOpacity
         style={styles.userBtn}
          onPress={()=>this.props.navigation.navigate('About')}>
          <Text style={styles.btnTxt}>About</Text>
       </TouchableOpacity>
      <TouchableOpacity
      style={styles.userBtn}
      onPress={()=>this.props.navigation.navigate('Cart')}>
      <Text style={styles.btnTxt}>Coffee Type</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.userBtn}
      onPress={()=>this.props.navigation.navigate('validation')}>
      <Text style={styles.btnTxt}>Post Coffee</Text>
      </TouchableOpacity>
     
        </View>
        {/* ===========================*/}
        {/*     Slide show             */}
        {/* ===========================*/}
    <View style={styles.slide}> 
         <Images />
    </View>

        {/* ===========================*/}
        {/*     service show             */}
        {/* ===========================*/}
     <View>
             <Service />
     </View>
        {/* ===========================*/}
        {/*     footer              */}
        {/* ===========================*/}
     <View>
        <Footer/>

     </View>


     </ScrollView>

</View>
)
}
}
const RoutStack = createStackNavigator(
    {
      Home:HomeInfo,
      About:Abouts,
      Cart:Carts,
      postProduct:postProduct,
      validation:validation
    },
    {
      initialRouteName:'Home',
      defaultNavigationOptions: {
        headerStyle:{
          backgroundColor:"hsl(41, 100%, 28%)",
          color:'white'
        }
      }
    }
  );
  
  const AppContainer= createAppContainer(RoutStack);
  
  

export default class Home extends Component {
 static navigationOptions = {
        header:null
        } 
    render() {
        return (
            <AppContainer />
        )
    }
}



const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f3f3f3',
    },
    menus:{
       
    },
    slide:{
        marginTop:5
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width:"70%"
      },
      userBtn:{
        backgroundColor:"hsl(29, 53%, 20%)",
        padding:3,
        marginLeft:5,
        borderRadius:5,
        borderColor:'green',
        width:"45%"
      },
      btnTxt:{
        fontSize: 18,
        textAlign:'center',
        fontSize: 18,
        textAlign:'center',
        color:'white',
        marginTop:5
      },
     
})


