import { useNavigation } from '@react-navigation/core'
import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from '../assets/style/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import LeagueContext from '../contexts/contextLeague'
import { SvgCssUri } from 'react-native-svg';
import TeamContext from '../contexts/contextTeam'

export default () => {

    const navigation = useNavigation()
    const { teamActive } = useContext(TeamContext)

    function back() {
        navigation.goBack()
    }

    return (

        <View style={styles.header}>
            <TouchableOpacity onPress={back} style={styles.buttonBack}>
                <Icon name='keyboard-backspace' size={28} color='#fff'></Icon>
            </TouchableOpacity>
            <View style={styles.headerTeam}>
                <View style={styles.img}>
                    <SvgCssUri
                        fill={'black'}

                        viewBox={teamActive.team.id == 64 ? "-10 -20 450 450" : "-10 -20 250 250"}
                        width={80}
                        height={80}
                        uri={teamActive.team.crestUrl}
                    />
                </View>
                <Text style={styles.headerText}>{teamActive.team.name}</Text>

            </View>
        </View>
    )

}



const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black,
        height: 130,
        width: "100%",

    },
    headerTeam: {
        alignItems: 'center',
        justifyContent: 'space-around',

        height: "100%",
    },
    headerText: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        textAlign: "center",
   
    },
    headerSubText: {
        color: "whitesmoke"
    },
    buttonBack: {

        width: '10%',
        position: 'absolute',
        top: 45,
        left: 20,
    },
    textBack: {
        fontSize: 30,
        color: 'white'

    },

    img: {
        width: 70,
        height: 80,


    }
})