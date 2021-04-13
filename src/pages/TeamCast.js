

import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import LeagueContext from '../contexts/contextLeague'

import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/style/colors'
import api from '../services/api';
import SquadItem from '../components/squadItem'
import TeamContext from '../contexts/contextTeam';


const teamActive = {
    position: 1,
    team: {
        id: 65,
        name: "Manchester City FC",
        crestUrl: "https://crests.football-data.org/65.svg"
    },
    playedGames: 30,
    form: "W,W,L,W,W",
    won: 22,
    draw: 5,
    lost: 3,
    points: 71,
    goalsFor: 64,
    goalsAgainst: 21,
    goalDifference: 43
}


export default () => {
    const { teamActive } = useContext(TeamContext)
    const [squad, setSquad] = useState([])



    console.log('teamCast')


    async function getSquad() {
        /* try {
            let squad = await axios.get(`http://api.football-data.org/v2/teams/${teamActive.team.id}`, { headers: { 'X-Auth-Token': '29302314f82f407cb9b903f87619a2a7' } })

            setSquad(squad.data.squad)

            //setSpinner(false)
            //setMatcheActive(mts)
            //storeData(mtchs)

        } catch (error) {
            console.log('erro matches:::', error)
            getData()
        } */
        const squad = await api.getSquad(teamActive.team.id)
        if (squad) {
            setSquad(squad)
        } else {
            console.log('erro')
        }
    }


    useEffect(() => {
        getSquad()
    }, [])

    return (
        <ScrollView style={styles.container}>

            <SquadItem title={'Ataque'} list={squad.filter(e => e.position == 'Attacker')}></SquadItem>
            <SquadItem title={'Meio Campo'} list={squad.filter(e => e.position == 'Midfielder')}></SquadItem>
            <SquadItem title={'Defesa'} list={squad.filter(e => e.position == 'Defender')}></SquadItem>
            <SquadItem title={'Gol'} list={squad.filter(e => e.position == 'Goalkeeper')}></SquadItem>
            <SquadItem title={'Técnico'} list={squad.filter(e => e.role == 'COACH')}></SquadItem>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3E4949'
    },

});

