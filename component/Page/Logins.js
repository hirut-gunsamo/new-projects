import React, { Component } from 'react'
import { View, Text, StatusBar,Image,ScrollView,
    StyleSheet,ImageBackground, 
    TextInput,
    TouchableOpacity} from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class Logins extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        }
    }



    static navigationOptions = {
        header:null
      }
       render(){
         return(
          <View style={styles.container} >
            
          <StatusBar
            backgroundColor="#1e90ff" 
            barStyle="light-content"/>
         <Image source = {require('../img/coffee2.png')} style = {styles.welcome}/>

         
         <TextInput 
            style={styles.input}
            placeholder="username"
            onChangeText={(username) => this.setState({username})}
            underlineColorAndroid='transparent'/>
        <TextInput 
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true} 
            password={true}
            onChangeText={(password) => this.setState({password})}
            underlineColorAndroid='transparent'
              />
              
           
          <View style={styles.btnContainer}>
             <TouchableOpacity
                style={styles.userBtn}
                onPress={this.login}>
               <Text style={styles.btnTxt}>Login</Text>
             </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row"}}>
               <Text style={styles.texts}>If you are not a member?</Text>
            
               <Text style={styles.userBtns}
                onPress={this.SignUp}>Sign up</Text>
             
             </View>
     </View>
         );
       }

   
    login = ()=> {
        
            if(true) {
             this.props.navigation.navigate('Details')
             
                 }
            else {
                alert('password or username is Incorrect!!');
            }
       

    }

    SignUp = ()=> {
       this.props.navigation.navigate('SignUp')
}


}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:"#4f6d7a"
      },
      input:{
        width:"70%",
        padding:8,
        marginBottom:20,
        borderRadius:8,
        borderWidth:2,
        borderColor:"silver"
      },
      btnContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width:"50%"
      },
      userBtn:{
        backgroundColor:"#1e90ff",
        padding:5,
        marginTop:10,
        borderRadius:8,
        width:"45%"
      },
      btnTxt:{
        fontSize: 18,
        textAlign:'center',
      },
      welcome:{
        marginBottom:60,
        resizeMode:"cover",
         width: 130,
         height:130
      },
    texts:{
     color:'white',
     fontSize:16
    },
    userBtns:{
      color:'#1e90ff',
      fontSize:16
    }
});


