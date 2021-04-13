

import React, { useContext, useEffect } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import LeagueContext from '../contexts/contextLeague'
import TeamContext from '../contexts/contextTeam'


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

export default ()=>{
    const {teamActive} = useContext(TeamContext)

    console.log('statistics')
    return(
        <View>
            <Text></Text>
            <Text>Posição {teamActive.position}</Text>
            <Text>jogos {teamActive.playedGames}</Text>
            <Text>Vitorias {teamActive.won}</Text>
            <Text>Empates {teamActive.draw}</Text>
            <Text>Derrotas {teamActive.lost}</Text>
            <Text>pontos {teamActive.points}</Text>
            <Text>Gols pro {teamActive.goalsFor}</Text>
            <Text>Gols contra {teamActive.goalsAgainst}</Text>
            <Text>Saldo de gol {teamActive.goalDifference}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
   
});

