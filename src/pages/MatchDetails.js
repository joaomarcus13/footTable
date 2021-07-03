
import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import LeagueContext from '../contexts/contextLeague'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/core'
import { SvgCssUri } from 'react-native-svg';
import colors from '../assets/style/colors'

export default ({ route }) => {
    const { table } = useContext(LeagueContext)
    const { item } = route.params
    const navigation = useNavigation()

    function back() {
        navigation.goBack()
    }

    function getImg(id) {
        let t = table.filter(e => e.team.id == id)
        //console.log(t[0].team.crestUrl)
        return t[0].team.crestUrl
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={back} style={styles.buttonBack}>
                    <Icon name='left' size={20} color='#fff'></Icon>
                </TouchableOpacity>
                <View style={styles.headerScore}>
                    <View style={styles.headerTeam}>
                        <View style={styles.img}>
                            <SvgCssUri

                                fill={'black'}
                                viewBox={item.homeTeam.id == 64 ? "-10 -20 450 450" : "-10 -20 250 250"}
                                width={60}
                                height={60}
                                uri={getImg(item.homeTeam.id)}
                            />
                        </View>
                        <Text style={styles.headerTeamText}>{item.homeTeam.name}</Text>
                    </View>
                    <View style={styles.containerScore}>
                        <View style={styles.score}>
                            <Text style={styles.scoreText}>{item.score.fullTime.homeTeam}</Text>
                            <Text style={styles.scoreText}>x</Text>
                            <Text style={styles.scoreText}>{item.score.fullTime.awayTeam}</Text>
                        </View>
                        <Text style={styles.status}>{item.status}</Text>
                    </View>

                    <View style={styles.headerTeam}>
                        <View style={styles.img}>
                            <SvgCssUri
                                fill={'black'}

                                viewBox={item.awayTeam.id == 64 ? "-10 -20 450 450" : "-10 -20 250 250"}
                                width={60}
                                height={60}
                                uri={getImg(item.awayTeam.id)}
                            />
                        </View>
                        <Text style={styles.headerTeamText}>{item.awayTeam.name}</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3E4949',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black,
        height: 130,
        width: "100%",

    },
    buttonBack: {
        position: 'absolute',
        left: 10,
        top: 50,
    },
    headerScore: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: "100%",
        width: "70%",
    },
    containerScore: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
    },
    score: {
        flexDirection: 'row',
        width: 70,
        justifyContent: 'space-between'
    },
    status: {
        fontSize: 11,
        fontFamily: 'Poppins-Regular',
        color: colors.whiteSecondary
    },
    scoreText: {
        fontSize: 25,
        color: colors.whiteMiddle,
        fontFamily: 'Poppins-Regular',

    },
    img: {
        width: 50,

    },
    headerTeam: {

    },
    headerTeamText: {
        fontSize: 11,
        fontFamily: 'Poppins-Regular',
        height: 30,
        color: colors.whitePrimary,

        width: 100,
        textAlign: 'center',
        position: 'absolute',
        left: -25,
        bottom: -30,
        lineHeight: 12
    }
});
