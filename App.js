import React from 'react';
import { BackContainer,BackImg} from './App.styled';
import RegistrationScreen from './Screen/RegistrationScreen/RegistrationScreen';
import { Text } from 'react-native';
import {useFonts} from 'expo-font';
// import * as Font from 'expo-font';


const image = require('./images/BG_main/back2.png');

const App = () => {

  const [fontsLoaded] = useFonts({
    'Roboto-Regular':require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium':require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold':require('./assets/fonts/Roboto-Bold.ttf')
  })


if(!fontsLoaded){
  return null;
}
return (
  <BackContainer>
    <BackImg source={image} resizeMode="cover">
 
        <RegistrationScreen/>
        <Text> Oj pf xehyz</Text>
  
    </BackImg>
  </BackContainer>
)};



export default App;

