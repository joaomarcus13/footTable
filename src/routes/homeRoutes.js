import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home'
import teamRoutes from './teamRoutes';

const Stack = createStackNavigator();


  export default () => {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none' initialRouteName='Home' >
          <Stack.Screen  name="Home" component={Home} />
          <Stack.Screen  name="Team" component={teamRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
