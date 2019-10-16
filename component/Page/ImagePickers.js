import React, { Component } from 'react';
import { View, Text ,StyleSheet, Image,TouchableOpacity,Platform} from 'react-native';
import ImagePicker from 'react-native-image-picker';




const options={
    title:'my pic app',
    takePhotoButtonTitle:'Take photo with your camera',
    chooseFromLibraryButtonTitle:"Choose photo from library"
}
export default class ImagePickers extends Component {
  constructor(props) {
    super(props);
    this.state = {
        avatarSource:null
    };
  }

  myfun=()=>{

    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
       
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
       
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
       
          this.setState({
            avatarSource: source,
          });
        }
      });

  }

  render() {
    return (
      <View style={styles.container}>
          <Image source={this.state.avatarSource} 
          style={{width:200,height:50, margin:10}}/>
       <TouchableOpacity 
       style={{backgroundColor:'skyblue', margin:10, padding:10}}
       onPress={this.myfun}>
          <Text style={{color:'#fff'}}>Select Image</Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
    justifyContent:'center',
    alignItems: 'center',
   
    }

})
