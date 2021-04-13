

import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LeagueContext from '../contexts/contextLeague'
import TeamContext from '../contexts/contextTeam'



export default () => {
    const { teamActive, setTeamActive } = useContext(TeamContext)


    console.log('team matches')

    return (
        <View>
            <Text>partidas</Text>

        </View>
    )
}


const styles = StyleSheet.create({

});

