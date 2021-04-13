/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import leaguesJSON from './src/services/leagues.json'
import axios from 'axios'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  LogBox
} from 'react-native';
import colors from './src/assets/style/colors'

import Routes from './src/routes/homeRoutes'
import { ContextProviderLeague } from './src/contexts/contextLeague'
import { ContextProviderTeam } from './src/contexts/contextTeam'
//import LeagueContext from './src/context'

LogBox.ignoreLogs(['If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation', 'Possible Unhandled Promise Rejection']); // Ignore log notification by message


const App = () => {


  return (
    <>
      <ContextProviderLeague>
        <ContextProviderTeam>
          <Routes></Routes>
        </ContextProviderTeam>
      </ContextProviderLeague>

      <StatusBar
        backgroundColor={colors.black}
        style='light'
      />
    </>

  );
};



export default App;
