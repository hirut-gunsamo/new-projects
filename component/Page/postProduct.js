import React, { Component } from 'react';
import { View, Text,Dimensions, Image, ScrollView,TextInput, Linking, Animated,Platform, StyleSheet,TouchableOpacity} from 'react-native';
import Footer from '../HomeInfo/footer'
import ImagePicker from './ImagePickers'


const { height, width} = Dimensions.get('window')
export default class postProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    title:'Post Products'
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

       
        <View style={{marginTop:10, paddingHorizontal:20, marginBottom:15}}>
            <Text style={{fontWeight:'700', fontSize:24}}>
               Register Details About Coffees
            </Text>
            <Text style={{fontWeight:'100', marginTop:10}}>
              When you post here you must inform every information about coffees. Because, it helps user to view easy!!!
           </Text>
            
         </View>
         
         <TextInput 
            style={styles.input}
            placeholder="Coffee name"
            onChangeText={(fname) => this.setState({fname})}
            underlineColorAndroid='transparent'/>
        <TextInput 
            style={styles.input}
            placeholder="Coffee Type"
            onChangeText={(lname) => this.setState({lname})}
            underlineColorAndroid='transparent'
              />
              <TextInput 
            style={styles.input}
            placeholder="Place of coffee"
            onChangeText={(email) => this.setState({email})}
            underlineColorAndroid='transparent'
              />
              <TextInput 
            style={styles.input}
            placeholder="Price in EB"
            onChangeText={(password) => this.setState({password})}
            underlineColorAndroid='transparent'
              />
              <TextInput 
            style={styles.input}
            placeholder="Info"
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            underlineColorAndroid='transparent'
              />
            
        <ImagePicker /> 
          
          <View style={styles.btnContainer}>
             <TouchableOpacity
                style={styles.userBtn}
                onPress={this.register}>
               <Text style={styles.btnTxt}>Post</Text>
             </TouchableOpacity>
            
          </View>

         
        <Footer />

      </ScrollView>  
      
      </View>
    );
  }
}

register = ()=> {
        
  
      alert('Data is posted right now!!');


}




const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'#f8f7f5'
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
      backgroundColor:"#1e90ff",
      padding:5,
      marginTop:10,
      marginLeft:50,
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
      marginTop:20,
       width: 130,
       height:130
    }
});


