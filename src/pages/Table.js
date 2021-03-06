
import React, {  useContext, useEffect, useState,useCallback } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import LeagueContext from '../contexts/contextLeague'
import LinearGradient from 'react-native-linear-gradient';
import TableList from '../components/tableList'
import colors from '../assets/style/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';


export default () => {

    const { leagueActive, table, setTable } = useContext(LeagueContext)
    const [spinner, setSpinner] = useState(true)
    const [error, setError] = useState(false)
 
    console.log('table')

    async function storeData(value) {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(`table-${leagueActive.name}`, jsonValue)
        } catch (e) {
            console.log("error store ", e)
        }
    }

    async function getData() {
        console.log('get Storage')
        try {
            const value = await AsyncStorage.getItem(`table-${leagueActive.name}`)
            if (value !== null) {
                setTable(JSON.parse(value))
                setSpinner(false)
            }
        } catch (e) {
            setSpinner(false)
            setError(true)
            console.log('error get ', e)
        }
    }

    async function getInfoLeague() {

        const league = await api.getStandings(leagueActive.id)

        if (league) {
            setTable(league.table)
            //setCurrentMatchday(league.currentMatchday)
            setSpinner(false)
            storeData(league.table)
        } else {
            getData()
        }
    }

    useEffect(() => {
        getInfoLeague()
        

    }, [])


   
    
    if (error) {
        return (<View style={styles.container}>
            <Text style={{ color: '#fff' }}>dados não disponíveis</Text>
        </View>)
    }

    if (!spinner) {
        return (
            <View style={styles.container}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.blackSecondary, colors.blackPrimary]} style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>#</Text>
                    <Text style={[styles.tableHeaderText, styles.textTeam]}>Time</Text>
                    <Text style={styles.tableHeaderText}>J</Text>
                    <Text style={styles.tableHeaderText}>SG</Text>
                    <Text style={styles.tableHeaderText}>P</Text>
                </LinearGradient>
                <TableList data={table}></TableList>
                
            </View>
        )
    } else {
        return <View style={styles.container}><ActivityIndicator size="large" color="#fff" /></View>
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3E4949'
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        height: 30
    },
    list: {
        width: '100%'
    },


    tableHeaderText: {
        textAlign: 'center',
        width: '10%',

        color: 'white'
    },
    textTeam: {
        width: '50%',
        marginRight: '1%'
    }
});
