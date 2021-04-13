import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native'


const Tab = createMaterialTopTabNavigator();


import Header from '../components/headerTeamDetails'
import TeamStatistics from '../pages/TeamStatistics'
import TeamMatches from '../pages/TeamMatches'
import TeamCast from '../pages/TeamCast'
import MyTabBar from '../components/tabBar'


export default () => {

    return (
        <>

           <Header ></Header>
            <Tab.Navigator backBehavior={'initialRoute'} tabBar={props => <MyTabBar {...props} />}>
                <Tab.Screen options={{ tabBarLabel: 'Estatisticas' }} name="Estatisticas" component={TeamStatistics} />
                <Tab.Screen options={{ tabBarLabel: 'Partidas' }} name="Partidas" component={TeamMatches} />
                <Tab.Screen options={{ tabBarLabel: 'Elenco' }} name="Elenco" component={TeamCast} />
            </Tab.Navigator>
        </>
    );
}

