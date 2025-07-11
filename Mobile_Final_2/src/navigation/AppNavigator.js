import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login.js';
import RegisterScreen from '../screens/Cadastro.js';
import BatDataBase from '../screens/BatDataBase.js';
import Perfil from '../screens/Perfil.js';
import Config from '../screens/Config.js';
import Entrada from '../screens/Entrada.js';
import HeroDetails from '../screens/HeroDetails.js';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ 
          headerShown: false, 
          animation:'slide_from_bottom',
          presentation: 'modal'
          }}/>
        <Stack.Screen name="Cadastro" component={RegisterScreen} options={{ 
          headerShown: true, 
          animation:'slide_from_bottom',
          presentation: 'modal'
          }}/>
        <Stack.Screen name="BatDataBase" component={BatDataBase} options={{ 
          headerShown: true, 
          animation:'slide_from_bottom',
          presentation: 'modal'
          }}/>
        <Stack.Screen name="Perfil" component={Perfil} options={{ 
          headerShown: true, 
          animation:'slide_from_bottom',
          presentation: 'modal'
          }}/>
        <Stack.Screen name="Config" component={Config} options={{ 
          headerShown: true, 
          animation:'slide_from_bottom',
          presentation: 'modal'
          }}/>
        <Stack.Screen name="Entrada" component={Entrada} options={{ 
          headerShown: true, 
          animation:'slide_from_bottom',
          presentation: 'modal'
          }}/>

        <Stack.Screen
          name="Details"
          component={HeroDetails}
          options={{
            presentation: 'modal', // <<< ISSO QUE FAZ FICAR POPUP
            headerShown: false,    // oculta a barra de topo para parecer pop-up
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
