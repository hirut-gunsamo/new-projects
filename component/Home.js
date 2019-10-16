import React, { Component } from 'react';
import { TouchableOpacity, Text,View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

   const goToAbout = () => {
      Actions.about()
   }
    return (
      <View>
        <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
         <Text>This is HOME!</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

export default Home;




