import React, { Component } from 'react'
import { Router,Stack,Scene } from 'react-native-router-flux'

import Home from './Home'
import About from './Aboutus'


export default class Navbar extends Component {
    render() {
        return (
           <Router>
               <Stack key="root">
                   <Scene key='home' component={Home} title="Home/" />
                   <Scene key='about' component={About} title="About Us/" />  
               </Stack>
           </Router>
        )
    }
}
