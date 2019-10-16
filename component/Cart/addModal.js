import React, { Component } from 'react';
import { View, Text, 
        StyleSheet, 
        TouchableHighlight,
        FlatList, 
        Dimensions,
        Platform,
        TouchableOpacity, } from 'react-native';
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'




var screen= Dimensions.get('window');
var {height}= Dimensions.get('window');
export default class addModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  showAddModal = () =>{
    this.refs.myModal.open();
   
  }
  render() {
    return (
      <Modal        ref={"myModal"}
                    style={{justifyContent:'center',
                     shadowRadius:10,
                     width:screen.width-80,
                     height:200}}
                     
                     position='center'
                     backdrop={true}
                     onClosed={()=>{
                         alert('modal closed')
                     }}
                     >
                        <View style={styles.modalns}>

                        </View>

      </Modal>
    );
  }
}
 
const MODAL_HEIGHT =height /3;
 const styles = StyleSheet.create({
 
})
