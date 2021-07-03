

import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
//import LeagueContext from '../contexts/contextLeague'
import TeamContext from '../contexts/contextTeam'
import { PieChart } from 'react-native-svg-charts'
import colors from '../assets/style/colors'

{/* <Text></Text>
            <Text>Posição {teamActive.position}</Text>
            <Text>jogos {teamActive.playedGames}</Text>
            <Text>Vitorias {teamActive.won}</Text>
            <Text>Empates {teamActive.draw}</Text>
            <Text>Derrotas {teamActive.lost}</Text>
            <Text>pontos {teamActive.points}</Text>
            <Text>Gols pro {teamActive.goalsFor}</Text>
            <Text>Gols contra {teamActive.goalsAgainst}</Text>
            <Text>Saldo de gol {teamActive.goalDifference}</Text> */}

export default () => {
    const { teamActive } = useContext(TeamContext)
    const [data,setData] = useState([])
    
    const pieData = data
    .map((value, index) => ({
        value,
        svg: {
            fill: index == 0 ? '#ADE0F3' : (index == 1 ? '#F1F3AD' : '#F3ADAD')
        },
        key: `pie-${index}`,
    }))
    
    useEffect(()=>{
        const data = [Number(teamActive.won), Number(teamActive.draw), Number(teamActive.lost)]
        setData(data)
        
    },[])

    console.log('statistics')
    return (
        <View style={styles.container}>
            <View style={styles.viewPosition}>
                <Text>pontos</Text>
                <Text>{teamActive.points}</Text>
                <Text>posicao</Text>
                <Text>{teamActive.position}</Text>
            </View>
            <View style={styles.viewWDL}>
                <View style={styles.subViewWDL}>
                    <Text style={styles.textWDL}>{teamActive.won}</Text>
                    <Text style={styles.textWDL}>{teamActive.draw}</Text>
                    <Text style={styles.textWDL}>{teamActive.lost}</Text>
                </View>
                <View style={styles.subViewWDL}>
                    <Text style={[styles.textWDL,{color:'#ADE0F3'}]}>V</Text>
                    <Text style={[styles.textWDL,{color:'#F1F3AD'}]}>E</Text>
                    <Text style={[styles.textWDL,{color:'#F3ADAD'}]}>D</Text>
                </View>
            </View>
            <View style={styles.viewStatistics}>
                <View style={styles.item}>
                    <View style={[styles.subItem, {}]}>
                        <Text style={styles.text}>jogos</Text>
                        <Text style={styles.text}>{teamActive.playedGames}</Text>
                    </View>
                    <View style={styles.subItem}>
                        <Text style={styles.text}>saldo de gols</Text>
                        <Text style={styles.text}>{teamActive.goalDifference}</Text>
                    </View>
                </View>
                <View style={[styles.item, {}]}>
                    <View style={[styles.subItem, { alignSelf: 'flex-end', }]}>
                        <Text style={styles.text}>{teamActive.goalsFor}</Text>
                        <Text style={styles.text}>gols Marcados</Text>
                    </View>
                    <View style={[styles.subItem, { alignSelf: 'flex-end' }]}>
                        <Text style={styles.text}>{teamActive.goalsAgainst}</Text>
                        <Text style={styles.text}>gols sofridos</Text>
                    </View>
                </View>

            </View>
            <View style={styles.pie}>
                <PieChart data={pieData} innerRadius={50} style={{ height: 120 }} ></PieChart>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3E4949',

    },
    viewPosition:{
        flex:1,
    },
    viewStatistics: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'space-between',
        /* position:'relative',*/
        backgroundColor: colors.blackPrimary,
        zIndex: 10

    },
    pie: {
        height: 150,
        position: 'absolute',
        zIndex: 500,
        top: '61.5%',
      

    },
    item: {
        height: 150,
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor:colors.blackSecondary,
      
       
    },
    subItem: {
        width: '50%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        color: colors.whitePrimary,
        fontFamily: 'Poppins-Regular',
        fontSize:15
    },
    viewWDL: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: '68.5%',
        left: 140,
        width: 80,
        height: 50,
        zIndex: 100

    },
    subViewWDL: {
        flexDirection: 'row',
        height: '50%',
    },
    textWDL: {
        color: colors.whitePrimary,
        fontFamily: 'Poppins-Regular',
        width: 26.66,
        textAlign: 'center',
    },

});

