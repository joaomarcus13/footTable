
import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import colors from '../assets/style/colors'
import LeagueContext from '../contexts/contextLeague'

export default ({ title,children }) => {

  
    const { leagueActive } = useContext(LeagueContext)

  

    return (
        <View style={styles.header}>
            {children}
         
            <Text style={styles.headerText}>{leagueActive?leagueActive.name:title}</Text>
        </View>
    )

}



const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center', 
       /*  justifyContent: 'flex-start', */
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