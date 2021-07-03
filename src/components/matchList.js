
import { useNavigation } from '@react-navigation/core';
import React, { useContext, useMemo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/style/colors';
import LeagueContext from '../contexts/contextLeague';

import { SvgCssUri } from 'react-native-svg';


export default ({ data, getItemLayout, initialScrollIndex, team }) => {
    const navigation = useNavigation();
    const { table } = useContext(LeagueContext)

   

    function getImg(id) {
        let t = table.filter(e => e.team.id == id)
        return t[0].team.crestUrl
    }

    function getDay(item) {
        let day = { 0: 'Domingo', 1: 'Segunda', 2: 'Terça', 3: 'Quarta', 4: 'Quinta', 5: 'Sexta', 6: 'Sábado' }
        let sub = new Date(new Date(item.utcDate).getDate()) - (new Date().getDate())
        if (sub == 1) {
            return 'Amanhã'
        } else if (sub == 0) {
            return 'Hoje'
        } else
            return day[new Date(item.utcDate).getDay()]
    }

    function getDate(item) {
        let day = String(new Date(item.utcDate).getDate())
        let month = String(new Date(item.utcDate).getMonth() + 1)
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${new Date(item.utcDate).getFullYear()}`
    }

    function getHour(item) {
        let hour = String(new Date(item.utcDate).getHours())
        let minutes = String(new Date(item.utcDate).getMinutes())
        return `${hour.padStart(2, '0')}:${minutes.padEnd(2, '0')}`
    }


    return (

        <FlatList data={data}
            initialNumToRender={10}
            maxToRenderPerBatch={20}
            getItemLayout={getItemLayout}
            initialScrollIndex={initialScrollIndex}
            keyExtractor={item => item.id}
            renderItem={useMemo(()=>({ item }) => {
                return (

                    <TouchableOpacity onPress={()=>{navigation.navigate('MatchDetails', { item })}}>
                        <View style={styles.date}>
                            <Text style={styles.dateText}>{getDay(item)}</Text>
                            <Text style={styles.dateSubText}>{getDate(item)}</Text>
                            {item.status === 'SCHEDULED' ? <></> : <Text style={styles.dateHourText}>{getHour(item)}</Text>}
                            {team?<Text style={styles.text}>{`${item.matchday}º rodada`}</Text>:<></>}

                        </View>
                        <LinearGradient colors={[colors.blackPrimary, colors.blackSecondary]} style={styles.list}>

                            <View style={styles.list}>
                                <View style={styles.team}>
                                    <View style={styles.img}>
                                        <SvgCssUri

                                            viewBox={item.homeTeam.id == 64 ? "-50 -30 450 450" : "-30 -30 260 260"}
                                            width="45"
                                            height="45"
                                            uri={getImg(item.homeTeam.id)}
                                        /></View>

                                    <Text style={[styles.item, styles.itemName]}>{item.homeTeam.name}</Text>
                                </View>

                                <View style={styles.scoreArea}>
                                    {
                                        item.status === 'SCHEDULED' ?
                                            <Text style={styles.hourScheduled}>{getHour(item)}</Text> :

                                            <View style={styles.score}>
                                                <Text style={[styles.item]}>{item.score.fullTime.homeTeam ?? '-'}</Text>
                                                <Text style={[styles.item]}>x</Text>
                                                <Text style={[styles.item]}>{item.score.fullTime.awayTeam ?? '-'}</Text>
                                            </View>

                                    }
                                    <Text style={styles.status}>{item.status}</Text>

                                </View>

                                <View style={styles.team}>
                                    <View style={styles.img}>
                                        <SvgCssUri
                                            viewBox={item.awayTeam.id == 64 ? "-50 -30 450 450" : "-30 -30 260 260"}
                                            width="45"
                                            height="45"
                                            uri={getImg(item.awayTeam.id)}
                                        />
                                    </View>

                                    <Text style={[styles.item, styles.itemName]}>{item.awayTeam.name}</Text>
                                </View>

                            </View>


                        </LinearGradient>
                    </TouchableOpacity>

                );
            },[data])}>





        </FlatList>
    )
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 90,
        borderBottomWidth: 0.5,
        borderColor: 'black',
        paddingHorizontal: 8,

    },
    date: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 25,
        width: '100%',
        backgroundColor: colors.blackPrimary
    },
    dateText: {
        color: 'white',
        marginRight: 8,
        fontFamily: 'Poppins-Regular',

    },
    dateSubText: {
        color: 'white',
        marginRight: 8,
        fontFamily: 'Poppins-Regular',
    },
    dateHourText: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
    },
    hourScheduled: {
        color: 'white',
        fontSize: 23,
        fontFamily: 'Poppins-Regular',

    },
    item: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
    },
    team: {
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '35%',
    },
    img: {
        height: 50,
    },
    itemName: {
        fontSize: 13,
        height: '40%'
    },
    scoreArea: {
        alignItems: 'center',
        alignSelf: 'center',
        height: '70%',
        justifyContent: 'space-around',

    },
    score: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        width: 60

    },
    status: {
        color: colors.whiteSecondary,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    text:{
        color: 'white',
        marginLeft:5,
        fontFamily: 'Poppins-Regular',
    }

})
