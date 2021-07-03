

import React, { useContext, useEffect, useState,useMemo } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import LeagueContext from '../contexts/contextLeague'
import TeamContext from '../contexts/contextTeam'
import MatchList from '../components/matchList'



export default () => {
    const { matches } = useContext(LeagueContext)
    const { teamActive } = useContext(TeamContext)
    const [match, setMatch] = useState([])
    const [offset, setOffset] = useState(0)



    const renderItem = ({ item }) => {
            return (
                <MatchItem item={item}>
                    <Text style={styles.text}>{`${item.matchday}º rodada`}</Text>
                </MatchItem>

            );
        }
    

    const memoRenderItem =  useMemo(() => renderItem);


    useEffect(() => {
        let mtc = matches.filter(match => (match.homeTeam.id == teamActive.team.id || match.awayTeam.id == teamActive.team.id))
        setMatch(mtc)
        let offset = mtc.find(e => {
            let date = new Date(e.utcDate)
            if (date.getTime() >= new Date().getTime()) {
                return true
            } else {
                return false
            }
        })
        setOffset(mtc.indexOf(offset))

    }, [])

    function getItemLayout(data, index) {
        return { length: 115, offset: 115 * index, index }
    }

    return (
        <View style={styles.container}>

            <MatchList data={match} getItemLayout={getItemLayout} initialScrollIndex={offset} team={true}>

            </MatchList>

            {/* <FlatList data={match}
                getItemLayout={getItemLayout}
                initialScrollIndex={offset}
                keyExtractor={item => item.id}
                renderItem={memoRenderItem}>

            </FlatList> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3E4949',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: 'white',
        marginLeft:8,
        fontFamily: 'Poppins-Regular',
    }
});

