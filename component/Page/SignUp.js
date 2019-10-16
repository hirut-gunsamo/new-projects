import React, { Component } from 'react'
import { View, Text, StatusBar,Image,ScrollView,Dimensions,
    StyleSheet, 
    TextInput,
    TouchableOpacity} from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Footer from '../HomeInfo/footer'

const { height, width} = Dimensions.get('window')

export default class SignUp extends Component {

     constructor(props){
        super(props);
        this.state={
            Fname:'',              fnameValidate:true,
            Lname:'',              lnameValidate:true,
            Email:'',              emailValidate:true,
            Password:'',           passwordValidate:true,
            ConfirmPassword:'',    confirmValidate:true,

            fnameError:'',    
            lnameError:'',
            emailError:'',
            passwordError:'',
            confirmError:'',

            emailCorrect:'',
            fnameCorrect:'',
            lnameCorrect:'',
            passwordCorrect:'',
            
        }
    }

    validate(text, type){
      alph=/^[a-zA-Z]+$/
      num=/^[0-9]+$/
      const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    
          if(type =='fname'){
            if(alph.test(text)){
              this.setState({
                fnameValidate:true,
                fnameError:"",
                fnameCorrect:'correct first name!!'
              })
            }
            else{
              this.setState({
                fnameValidate:false,
                fnameError:"only character allowed!!!",
                fnameCorrect:''
              })
            }
          }

          //last name check
          if(type =='lname'){
            if(alph.test(text)){
              this.setState({
                lnameValidate:true,
                lnameError:"",
                lnameCorrect:'correct last-name'
              })
            }
            else{
              this.setState({
                lnameValidate:false,
                lnameError:"Character Last name!!!",
                lnameCorrect:''
              })
            }
          }


          //email checking
          if(type =='email'){
            if(expression.test(text)){
              this.setState({
                emailValidate:true,
                emailError:"", 
                 emailCorrect:'correct email!!'
              })
            }
            else{
              this.setState({
                emailValidate:false,
                emailError:" Enter correct email",
                emailCorrect:''
              })
            }
          }
          
          // checking password
          else if(type =='password'){
            if(num.test(text)){
              this.setState({
                passwordValidate:true,
                passwordError:"",
                passwordCorrect:'correct password!!'
              })
            }
            else{
              this.setState({
                passwordValidate:false,
                passwordError:"Enter correct password",
                passwordCorrect:''
              })
            }
          }

          //confirms password
          else if(type =='confirm'){
            if(num.test(text)){
              this.setState({
                confirmValidate:true,
              })
            }
            else{
              this.setState({
                confirmValidate:false,
              })
            }
          }
    }


    static navigationOptions = {
        title:'SignUp'
      }
       render(){
         return(
          <View style={styles.container}>
            
          <StatusBar
            backgroundColor="#1e90ff" 
            barStyle="light-content"/>
          <ScrollView>  
         <View style ={{borderColor: '#ddddd',width:width-3, height:250, marginTop:5, marginLeft:1, marginRight:1, marginBottom:20}}>
          <Image style= {{flex:1, height:null, width:null,resizeMode: 'cover',
             borderRadius: 5, borderWidth: 1}}

         source = {require('../HomeInfo/img/header-bg.jpg')} />
        
      </View>
     <TextInput 
            style={[styles.input, !this.state.fnameValidate? styles.error:null]}
            placeholder="First name"
            onChangeText={(text) => this.validate(text,"fname")}
            underlineColorAndroid='transparent'/>
            <Text style={{color:'red', marginLeft:40, fontSize:12, marginTop:-10, marginBottom:2}}>{this.state.fnameError}</Text>
            <Text style={{color:'green', marginLeft:40, fontSize:12, marginTop:-20, marginBottom:2}}>{this.state.fnameCorrect}</Text>
     
         <TextInput 
            style={[styles.input, !this.state.lnameValidate? styles.error:null]}
            placeholder="Last name"
            onChangeText={(text) => this.validate(text,"lname")}
            underlineColorAndroid='transparent'
              />
              <Text style={{color:'red', marginLeft:40, fontSize:12, marginTop:-10, marginBottom:2}}>{this.state.lnameError}</Text>
              <Text style={{color:'green', marginLeft:40, fontSize:12, marginTop:-20, marginBottom:2}}>{this.state.lnameCorrect}</Text>
            <TextInput 
            style={[styles.input, !this.state.emailValidate? styles.error:null]}
            placeholder="Email"
            onChangeText={(text) => this.validate(text,"email")}
            underlineColorAndroid='transparent'
              />
              <Text style={{color:'red', marginLeft:40, fontSize:12, marginTop:-10, marginBottom:2}}>{this.state.emailError}</Text>
              <Text style={{color:'green', marginLeft:40, fontSize:12, marginTop:-20, marginBottom:2}}>{this.state.emailCorrect}</Text>
         
            <TextInput 
            style={[styles.input, !this.state.passwordValidate? styles.error:null]}
            placeholder="password"
            password={true}
            onChangeText={(text) => this.validate(text,"password")}
            underlineColorAndroid='transparent'
              />
              <Text style={{color:'red', marginLeft:40, fontSize:12, marginTop:-10, marginBottom:2}}>{this.state.passwordError}</Text>
              <Text style={{color:'green', marginLeft:40, fontSize:12, marginTop:-20, marginBottom:2}}>{this.state.passwordCorrect}</Text>
     
            <TextInput 
            style={[styles.input, !this.state.confirmValidate? styles.error:null]}
            placeholder="confirm password"
            password={true}
            onChangeText={(text) => this.validate(text,"confirm")}
            underlineColorAndroid='transparent'
              />
          <View style={styles.btnContainer}>
             <TouchableOpacity
                style={styles.userBtn}
                onPress={this.SignUp}>
               <Text style={styles.btnTxt}>Sign Up</Text>
             </TouchableOpacity>
            
          </View>

          <Footer />
          </ScrollView>


     </View>
         );
       }

   
    SignUp = ()=> {
         
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#f8f7f5'
      },
      error:{
        borderWidth:3,
        borderColor:'red'
      },
      input:{
        width:"70%",
        padding:8,
        marginBottom:10,
        marginLeft:50,
        borderRadius:8,
        borderWidth:2,
        borderColor:"silver"
      },
      btnContainer:{
        flexDirection: 'column',
        justifyContent:'space-between',
        width:"50%"
      },
      userBtn:{
        backgroundColor:"hsl(41, 100%, 28%)",
        padding:5,
        marginTop:10,
        marginLeft:120,
        borderRadius:8,
        width:"45%",
        borderWidth:2,
        borderColor:"silver"
      },
      btnTxt:{
        fontSize: 18,
        textAlign:'center',
      },
      welcome:{
        marginBottom:60,
        resizeMode:"cover",
        marginTop:20,
         width: 130,
         height:130
      }
});


