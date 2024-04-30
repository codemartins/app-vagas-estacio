import React from 'react';
import {StatusBar} from 'react-native';

import { NavigationContainer} from '@react-navigation/native'
import Routes from './scr/Routes/index'


//adicionar <Routes/>
export default function App (){
  return (
   <NavigationContainer>
    <StatusBar backgroundColor='#313D6F' barStyle='light-content'/>
    <Routes/>
   </NavigationContainer> 
  )
}