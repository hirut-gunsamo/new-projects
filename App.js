
import React, { Component } from 'react';
import { View, Text, StatusBar,Image,ScrollView,SlideShow,
        StyleSheet, 
        TextInput,
        TouchableOpacity} from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Slides from './component/Page/SlideServices'
import Login from './component/Page/Logins'
import Home from './component/Page/Home'
import Cart from './component/Cart/Cart'
import About from './component/Page/Aboutus'
import Modalshow from './component/modal'
import SignUp from './component/Page/SignUp'
import ImagePicker from './component/HomeInfo/ImagePicker'




      




const RootStack = createStackNavigator(
  {
    Home:Login,
    Details:Home,
    SignUp:SignUp

  },
  {
    initialRouteName:'Home',
    defaultNavigationOptions: {
      headerStyle:{
        backgroundColor:"rgb(228, 157, 27)",
        color:'white'
      }
    }
  }
);

const AppContainer= createAppContainer(RootStack);


export default class App extends Component {

  
 
  
  render() {
    return (

    <AppContainer />
     );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'hsl(29, 53%, 20%)'
  },
 
})