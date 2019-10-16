import React, { Component } from 'react'
import { View, Button,StyleSheet,
ScrollView,Dimensions, Image, TouchableOpacity, Text } from 'react-native'
import Footer from '../HomeInfo/footer'

import t from 'tcomb-form-native';


const { height, width} = Dimensions.get('window')
const Form = t.form.Form;

// here we are: define your domain model


const formStyles ={
    ...Form.stylesheet,
    formGroup:{
        normal:{
            marginBottom: 10,
            margin:20,
            width:200
        },
        error:{
            marginBottom: 10,
            margin:20,
            width:200
        }
        
    },

    controlLable:{
        normal:{
            color:'blue',
            fontSize: 18,
            marginBottom:7,
            fontWeight: '600',

        },
        error:{
            color:'red',
            fontSize:18,
            marginBottom:7,
            fontWeight:'600'
        }
    }
}

const Age = t.refinement(t.Number, function (n){return n>=18;}); 

   Age.getValidationErrorMessage =function (value,path, context) {
       return 'bad price ';
   };

   t.Number.getValidationErrorMessage = function (value, path, context) {
       if(value){
           return 'price is note empty number';
       }
       else if(!Number.isInteger(value))
       return 'bad number';
   }


    



   var User = t.struct({
    Coffee_name: t.String,              // a required string
    Coffee_Type:  t.String,
    Place:t.String,      //t.maybe(t.String),  // an optional string
    Price: Age,              // a required number
    Info:t.String,
   
  });


const options = {
   order:['Coffee_name','Coffee_Type','Place','Price','Info'],
    Coffee_name:{
        placeholder:'Full name',
        error:'Please enter correct name '
    },
    Coffee_Type:{
        placeholder:'Enter your coffee type',
        error:'please enter correct type'
    },
    Place:{
        placeholder:'Enter your place of coffee',
        error:'please enter correct place'
    },
    Price:{
        placeholder:'Enter the price of coffee'
    },
    Info:{
        placeholder:'Description',
        error:'please explain about coffees'
    },
   
    stylesheet:formStyles,
};









export default class validationLogin extends Component {
    static navigationOptions = {
        title:'Post Products'
        } 
    handleSubmit=()=>{
        const value = this._form.getValue();

        if(value){
            alert('Data is registered!!');
            console.log('value: ', value);
        }
        else{
            console.log('value: ', value);
        }
       
    }
    render() {
        return (
            <View style={styles.container}>
                 <ScrollView> 
                 <View style ={{borderColor: '#ddddd',width:width-3, height:300, marginTop:5, marginLeft:1, marginRight:1}}>
                    <Image style= {{flex:1, height:null, width:null,resizeMode: 'cover',
                        borderRadius: 5, borderWidth: 1}}

                    source = {require('../HomeInfo/img/header-bg.jpg')} />
                    
                </View> 
                <View style={{marginTop:10, paddingHorizontal:20, marginBottom:15}}>
            <Text style={{fontWeight:'700', fontSize:24}}>
               Register Details About Coffees
            </Text>
            <Text style={{fontWeight:'100', marginTop:10}}>
              When you post here you must inform every information about coffees. Because, it helps user to view easy!!!
           </Text>
            
         </View>
                <Form 
                   ref={c=>this._form =c}
                   type={User}
                   options={options} 
                   style={styles.form}/>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={this.handleSubmit}>
                        <Text style={styles.btnTxt}>Post</Text>
                        </TouchableOpacity>
            
                     </View>

                     <Footer />
                 </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
      justifyContent:'center',
      alignItems: 'center',
    },
    userBtn:{
        backgroundColor:"#1e90ff",
        padding:5,
        marginTop:10,
        marginLeft:50,
        borderRadius:8,
        width:"20%"
      },
      btnTxt:{
        fontSize: 18,
        textAlign:'center',
      },
    form:{
        margin:10
    }
});
