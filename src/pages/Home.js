/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useCallback, useContext } from 'react';
import leaguesJSON from '../services/leagues.json'
import { useFocusEffect } from '@react-navigation/native';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,

    TouchableOpacity,

} from 'react-native';

import Header from '../components/header'
import Item from '../components/cardItem'


const App = () => {

    const [leagues, setLeagues] = useState([])


    function getLeagues() {
        listLeagues = []
        for (let i in leaguesJSON) {
            listLeagues.push(leaguesJSON[i])
        }
        setLeagues(listLeagues)
    }

    /* useFocusEffect(
        useCallback(() => {
            // Do something when the screen is focused

            setLeagueActive(null)
            return () => {
                // Do something when the screen is unfocused
                // Useful for cleanup functions
            };
        }, [])
    ) */


    useEffect(() => {

        getLeagues()

    }, [])


    return (
        <View style={styles.container}>
            <Header title='Foot League'></Header>
            <View style={styles.body}>
                <FlatList
                    data={leagues}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Item item={item}></Item>}>
                </FlatList>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#3E4949',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    body: {
        backgroundColor: "#1A1A1A",
        flex: 1,
        width: '100%',
        /* alignItems: "center", */
    },
    list: {
        flex: 1,
        width: '100%',
    },

});

export default App;
