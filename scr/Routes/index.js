import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../Login/Welcome/index'
import Welcome2 from '../Login/Welcome2/index'
import SignIn from '../Login/SignIn/index'
import Register from '../Login/Register/index'
import Register2 from '../Login/Register2/index'
import Vagas from '../Menu/Vagas/index'
import Status from '../Menu/Status/index'
import Perfil from '../Menu/Perfil/index'

const Stack = createNativeStackNavigator();


//Rotas para navegar pelo app
export default function Routes() {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name='Welcome'
        component={Welcome}  
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name='Welcome2'
        component={Welcome2} 
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name='SignIn'
        component={SignIn} 
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name='Register'
        component={Register} 
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name='Register2'
        component={Register2} 
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name='Vagas'
        component={Vagas}  
        options={{headerShown: false}}
      /> 

      <Stack.Screen 
        name='Perfil'
        component={Perfil}  
        options={{headerShown: false}}
      /> 

      <Stack.Screen 
        name='Status'
        component={Status}  
        options={{headerShown: false}}
      /> 
    </Stack.Navigator>
  )
}