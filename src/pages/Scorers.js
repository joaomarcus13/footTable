import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import colors from '../assets/style/colors';
import LeagueContext from '../contexts/contextLeague';

import LinearGradient from 'react-native-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

export default () => {

    const { leagueActive } = useContext(LeagueContext)
    const [scorers, setScorers] = useState([])


    async function storeData(value) {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(`scorers-${leagueActive.name}`, jsonValue)
        } catch (e) {
            console.log("error store ",e)
        }
    }


    async function getData() {
        console.log('get Storage')
        try {
            const value = await AsyncStorage.getItem(`scorers-${leagueActive.name}`)
            if (value !== null) {
                setScorers(JSON.parse(value))
                //setSpinner(false)
            }
        } catch (e) {
            //setSpinner(false)
            //setError(true)
            console.log('error get ',e)
        }
    }


    async function getScorers() {

        const scorers = await api.getScorers(leagueActive.id)
        if(scorers){
            setScorers(scorers)
            storeData(scorers)
        }else{
            getData()
        }

    }

    useEffect(() => {
        getScorers()
        console.log('scorers')
    }, [])

    return (
        <View style={styles.container}>

            <FlatList data={scorers}

                style={{ width: '100%' }}
                keyExtractor={item => item.player.id}
                renderItem={({ item }) => {
                    return (

                        <LinearGradient colors={[colors.blackPrimary, colors.blackSecondary]} style={styles.list}>
                            <Image style={styles.img} source={{ uri: "http://cdn.soccerwiki.org/images/player/2772.png" }}></Image>
                            <View style={styles.info}>

                                <Text style={styles.name}>{item.player.name}</Text>
                                <Text style={styles.team}>{item.team.name}</Text>
                            </View>

                            <Text style={styles.goals}>{item.numberOfGoals} Gols</Text>
                        </LinearGradient>

                    );
                }}>

            </FlatList>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3E4949'
    },

    list: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',


        borderBottomWidth: 0.5,
        borderColor: 'black',


    },
    info: {
        height: '80%',
        width: '40%',
        marginRight: 30,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    name: {
        fontSize: 16,

        fontFamily: 'Poppins-Regular',
        textAlign: 'left',
        color: colors.whitePrimary,

    },
    team: {
        height: '30%',
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        textAlign: 'left',
        color: colors.whiteSecondary
    },
    goals: {
        fontFamily: 'Poppins-Regular',
        color: colors.whitePrimary,
        fontSize: 20
    },
    img: {
        height: 60,
        width: 60,
        borderRadius:50,
        marginHorizontal: 20
    }

})