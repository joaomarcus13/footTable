import { useNavigation } from '@react-navigation/core'
import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import LeagueContext from '../contexts/contextLeague'
import api from '../services/api'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../assets/style/colors'

export default ({ item }) => {

    const navigation = useNavigation()
    const { setLeagueActive, setCurrentMatchday } = useContext(LeagueContext)

    async function goLeague(item) {
        navigation.navigate('Team')
        setLeagueActive(item)
        const currentMatchday = await api.getCurrentMatchday(item.id)
        setCurrentMatchday(currentMatchday)
    }

    return (
        <TouchableOpacity style={styles.card} onPress={() => { goLeague(item) }} activeOpacity={0.8}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} key={item.id} colors={[colors.blackSecondary, colors.blackPrimary]} style={styles.item}>
                <View style={styles.viewImage}>
                    <Image
                        source={{ uri: item.imgurl }}
                        style={styles.image}>
                    </Image>
                </View>
                <View style={styles.info}>
                    <Text style={styles.itemTextName}>{item.name}</Text>
                    <Text style={styles.itemText}>{item.country}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        paddingHorizontal: 40
    },
    card: {
        width: '100%',
    },
    viewImage: {
        height: 65,
        width: 65,
        backgroundColor: colors.whitePrimary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5
    },
    image: {
        height: 55,
        width: 55,
        borderRadius: 10
    },
    info: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 30
    },
    itemText: {
        textAlign: 'center',
        fontSize: 14,
        color: colors.whiteSecondary,
        fontFamily: 'Poppins-Regular',
    },
    itemTextName: {
        color: colors.whitePrimary,
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
    }
})