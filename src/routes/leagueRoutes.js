import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'
const Tab = createMaterialTopTabNavigator();

import Table from '../pages/Table'
import Matches from '../pages/Matches'

import colors from '../assets/style/colors';
import Header from '../components/header'
import LeagueContext from '../contexts/contextLeague';
import Icon from 'react-native-vector-icons/AntDesign'
import Scorers from '../pages/Scorers'
import MyTabBar from '../components/tabBar'



export default () => {
  //const { leagueActive, setLeagueActive } = useContext(LeagueContext)
  const navigation = useNavigation()

  function back() {
    navigation.goBack()
}

  return (
    <>
      <Header>
        <TouchableOpacity onPress={back} style={styles.buttonBack}>
          <Icon name='left' size={20} color='#fff'></Icon>
        </TouchableOpacity>
      </Header>
      <Tab.Navigator backBehavior={'initialRoute'} tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen options={{ tabBarLabel: 'Tabela' }} name="Table" component={Table} />
        <Tab.Screen options={{ tabBarLabel: 'Rodada' }} name="Matches" component={Matches} />
        <Tab.Screen options={{ tabBarLabel: 'Artilheiros' }} name="Scorers" component={Scorers} />
      </Tab.Navigator>
    </>
  );
}


const styles = StyleSheet.create({
  
  buttonBack: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    paddingTop: 8,
    height: '100%'

  },
})