import React, { Component } from 'react';
import { StyleSheet,ScrollView,View, Dimensions, Text } from 'react-native';
const DEVICE_WIDTH = Dimensions.get("window").width;

 export default class BackgroundCarousel extends Component {
  scrollRef = React.createRef();
    constructor(props) {
    super(props);
    this.state = {
        selectedIndex: 0
    }
  }

  render() {
      const {images} = this.props
      const {selectedIndex} = this.state
      return(
        <View style = {{height:"100%", width:"100%"}}>
            <ScrollView horizontal pagingEnabled>
                {images.map(image =>(
                    <Image 
                      key = {image}
                      source = {{url:image}}
                      styles = {styles.backgroundImage} 
               />
                ))}
            </ScrollView>
        </View>
      )
  }
}

const styles = StyleSheet.create({
   backgroundImage: {
       height:"100%",
       width: DEVICE_WIDTH
   } 
});
