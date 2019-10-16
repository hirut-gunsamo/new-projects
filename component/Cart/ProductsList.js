import React, { Component } from 'react';
import AddModal from './addModal'
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fadeValue: new Animated.Value(0)
    };
    this._onPressAdd=this._onPressAdd.bind(this);
  }

  _onPressAdd(){
      
    this.refs.addModal.showAddModal();
 }
  render() {

   
    return (
     
      <View style={{height:130, width:130,marginLeft:20,borderWidth:0.5, borderColor:'#dddddd'}} >
        <View style={{flex:4}} >
            <Image source={this.props.imageUri}
                style={{flex:1, 
                        width:null,
                        height:null,
                        resizeMode:'cover'}}/>
            <View style={{flex:1, 
                          paddingLeft:10,
                          paddingTop:10
                          }}>
                    <Text>{this.props.name}      {this.props.price}</Text>

            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={this._onPressAdd}>
                   <Text style={styles.buttonText}>
                       Buy
                   </Text>
                </TouchableOpacity>
            </View>
        </View>
         
        <AddModal ref={'addModal'} parentFlatList={this}>

       </AddModal>
        
      
      
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
    animationView:{
        width:100,
        height:100,
        backgroundColor:'skyblue'
    },
    button:{
        backgroundColor:'steelblue',
        height:45,
    },
    buttonText:{
        color:'white',
        padding:5,
        paddingHorizontal:10,
        fontWeight:'bold',
        fontSize:18,
        alignItems:'center'

    }

})
