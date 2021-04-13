/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useEffect, useState, useCallback } from 'react';
import leaguesJSON from '../services/leagues.json'

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

        /* axios.get(`http://api.football-data.org/v2/competitions/2013`, { headers: { 'X-Auth-Token': '29302314f82f407cb9b903f87619a2a7' } }).then(league=>{
              console.log(league.data.name)
            }) */

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
    )
 */

    useEffect(() => {

        getLeagues()

    }, [])


    return (
        <View style={styles.container}>
            <Header title='Foot League'></Header>
            <View style={styles.body}>

                <FlatList data={leagues}
                    style={styles.list}
                    numColumns={3}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (

                            <Item item={item}></Item>

                        );
                    }}>

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
