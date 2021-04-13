import React, { useContext, useCallback } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LeagueRoutes from './leagueRoutes';

import MatchDetails from '../pages/MatchDetails'
import TeamTabRoutes from '../routes/teamTabRoutes'
import { useFocusEffect } from '@react-navigation/native';
const Stack = createStackNavigator();


export default () => {


  /* useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused

      return () => {
        setLeagueActive(null)
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  ); */

  return (

    <>

      <Stack.Navigator headerMode='none' >
        <Stack.Screen options={{ headerShown: false }} name="League" component={LeagueRoutes} />
        <Stack.Screen options={{ headerShown: false }} name="TeamDetails" component={TeamTabRoutes} />
        <Stack.Screen options={{ headerShown: false }} name="MatchDetails" component={MatchDetails} />
      </Stack.Navigator>

    </>

  );
}

