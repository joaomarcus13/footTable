
import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '../assets/style/colors'
import LeagueContext from '../contexts/contextLeague'

export default ({ title,children }) => {
  
    const { leagueActive } = useContext(LeagueContext)

    return (
        <View style={styles.header}>
            {children}
         
            <Text style={styles.headerText}>{title||leagueActive.name||'Foot League'}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center', 
        backgroundColor: colors.black,
        height: '12%',
        width: "100%",

    },
    headerText: {
        height: '100%',
        textAlign: 'center',
        lineHeight: 100,
        color: 'white',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        paddingLeft: 20,
    },
   
})