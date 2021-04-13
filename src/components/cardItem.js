import { useNavigation } from '@react-navigation/core'
import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import LeagueContext from '../contexts/contextLeague'
import axios from 'axios'

export default ({ item  }) => {

    const navigation = useNavigation()
    const {setLeagueActive,setCurrentMatchday} = useContext(LeagueContext)

    function goLeague(item){
        setLeagueActive(item)
        axios.get(`http://api.football-data.org/v2/competitions/${item.id}`, { headers: { 'X-Auth-Token': '29302314f82f407cb9b903f87619a2a7' } }).then(league=>{
              setCurrentMatchday(league.data.currentSeason.currentMatchday)
              
            }) 
        navigation.navigate('Team')
    }



    return (
        <TouchableOpacity style={styles.card} onPress={()=>{goLeague(item)}} activeOpacity={0.8}>
        <View style={[styles.item]}>
            <Image source={ { uri: item.imgurl } }
                style={styles.image}></Image>
             <Text style={styles.itemText}>{item.country}</Text> 
        </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    item: {
       
        /* alignSelf: 'center', */
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'white',
        
    
    },
    card:{
        
        width:'30%',
        margin:6
    },
    image: {
        height: 55,
        width: 55
    },
    itemText: {
        /* width: '100%', */
        textAlign:'center',
        fontSize: 14,
        color: 'black',
        fontWeight:'bold',
        /* textShadowColor: 'black',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10 */
    }
})