
import { useNavigation } from '@react-navigation/core';
import React, { useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/style/colors';
import { SvgCssUri } from 'react-native-svg';
import TeamContext from '../contexts/contextTeam';
//import Svg from '../assets/images/1783.svg'
//import SvgUri from 'react-native-svg-uri';

const darkMode = true


function Item ({ item }) {
    const name = item.team.name.substring(0, 19)
    const navigation = useNavigation();
    const { handleTeamActive } = useContext(TeamContext)

    function goTeamDetails() {
        navigation.navigate('TeamDetails')
        handleTeamActive(item)
    }

    console.log('table item')
   


    return (
        <TouchableOpacity onPress={goTeamDetails} activeOpacity={0.8}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={[darkMode ? colors.blackPrimary : colors.whitePrimary, darkMode ? colors.blackPrimary : colors.whiteMiddle, darkMode ? colors.blackSecondary : colors.whiteSecondary]}
                style={[styles.list, { borderColor: darkMode ? colors.blackSecondary : colors.whiteSecondary }]}>

                <Text
                    style={[styles.item, { marginRight: -5, color: darkMode ? colors.whitePrimary : colors.black }]}>{item.position}
                </Text>

                <View style={styles.img}>
                     <SvgCssUri
                        fill={'black'}
                       
                        viewBox={item.team.id == 64 ? "0 -20 450 450" : "0 -20 260 260"}
                        width='40'
                        height='40'
                        uri={item.team.crestUrl}
                    /> 
                   
                </View>

                <Text
                    style={[styles.item, styles.name, { color: darkMode ? colors.whitePrimary : colors.black, borderColor: darkMode ? colors.blackSecondary : colors.whiteSecondary }]}>
                    {name}
                </Text>
                <Text
                    style={[styles.item, { color: darkMode ? colors.whitePrimary : colors.black }]}>
                    {item.playedGames}
                </Text>
                <Text
                    style={[styles.item, { color: darkMode ? colors.whitePrimary : colors.black }]}>
                    {item.goalDifference}
                </Text>
                <Text
                    style={[styles.item, { color: darkMode ? colors.whitePrimary : colors.black }]}>
                    {item.points}
                </Text>

            </LinearGradient>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        paddingHorizontal: 5
    },
    item: {
        height: 50,
        width: '9%',
        lineHeight: 50,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    },
    name: {
        width: '40%',
        textAlign: 'left',
        borderRightWidth: 0.5,
    },
    img: {
        width: '10%'
    }
})








export default React.memo(Item)