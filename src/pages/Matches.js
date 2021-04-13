
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableOpacityBase, ActivityIndicator } from 'react-native'

import LeagueContext from '../contexts/contextLeague'
import MatchItem from '../components/matchItem'
import teste2 from '../services/teste2.json'
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/style/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api'

function DropDown() {
    <View>

    </View>
}

export default () => {
    const { leagueActive, currentMatchday, setCurrentMatchday } = useContext(LeagueContext)
    const [matches, setMatches] = useState([])
    const [matcheActive, setMatcheActive] = useState([])
    const [spinner, setSpinner] = useState(true)
    const [error, setError] = useState(false)

    async function storeData(value) {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(`matches-${leagueActive.name}`, jsonValue)
        } catch (e) {
            console.log("error store ", e)
        }
    }


    async function getData() {
        console.log('get Storage m')
        try {
            const value = await AsyncStorage.getItem(`matches-${leagueActive.name}`)
            if (value !== null) {
                let matchs = JSON.parse(value)
                setMatches(matchs)
                let mts = matchs.filter(e => e.matchday == currentMatchday)
                setMatcheActive(mts)
                setSpinner(false)

            }
        } catch (e) {
            console.log("error get ", e)
            setError(true)
        }
    }

    async function getMatches() {

        const matches = await api.getMatches(leagueActive.id, currentMatchday)
        if (matches) {
            setMatches(matches.allMatches)
            setMatcheActive(matches.match)
            setSpinner(false)
            storeData(matches.allMatches)
        } else {
            getData()
        }

    }


    function previousMatches() {
        let mts = matches.filter(e => e.matchday == (currentMatchday - 1))
        setCurrentMatchday(currentMatchday - 1)
        setMatcheActive(mts)
    }

    function nextMatches() {
        let mts = matches.filter(e => e.matchday == (currentMatchday + 1))
        setCurrentMatchday(currentMatchday + 1)
        setMatcheActive(mts)
    }

    useEffect(() => {
        getMatches()
        console.log('matches')
    }, [])

    if (error) {
        return (<View style={styles.container}>
            <Text style={{ color: '#fff' }}>Dados não disponiveis</Text>
        </View>)
    }

    if (!spinner) {
        return (
            <View style={styles.container}>
                <View style={styles.matchHeader}>
                    <TouchableOpacity onPress={previousMatches} style={styles.button}>
                        <Icon name='angle-left' size={25} color='#fff'></Icon>
                    </TouchableOpacity>
                    <Text style={styles.matchHeaderText}>{`${currentMatchday}ª`} RODADA</Text>
                    <TouchableOpacity onPress={nextMatches} style={styles.button}>
                        <Icon name='angle-right' size={25} color='#fff'></Icon>
                    </TouchableOpacity>
                </View>
                <FlatList data={matcheActive}


                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (

                            <MatchItem item={item}></MatchItem>

                        );
                    }}>

                </FlatList>
            </View>
        )
    } else {
        return <View style={styles.container}><ActivityIndicator size="large" color="#fff" /></View>
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3E4949',
        alignItems: 'center',
        justifyContent: 'center',
    },
    matchHeader: {
        backgroundColor: colors.blackSecondary,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "100%",
        height: 50,
    },
    matchHeaderText: {
        fontSize: 16,

        color: 'white'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: 30,

    }
});
