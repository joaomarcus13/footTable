import React from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/style/colors'

export default ({ title, list }) => {

    return (
        <View style={styles.list}>
            <Text style={styles.textList}>{title}</Text>
            <View style={{ width: '100%' }}>
                {
                    list.map(item => {
                        let age = Math.floor(Math.ceil(Math.abs(new Date(item.dateOfBirth).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) / 365.25);
                        return (
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} key={item.id} colors={[colors.blackSecondary, colors.blackPrimary]} style={styles.listItem}>
                                <Image style={styles.img} source={{ uri: "http://cdn.soccerwiki.org/images/player/2772.png" }}></Image>
                                <View style={styles.info}>

                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.bottomText}>{item.nationality}</Text>
                                    <Text style={styles.bottomText}>{age} anos</Text>
                                </View>

                            </LinearGradient>
                        )
                    })
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        width: '100%'
    },
    textList: {
        height: 40,
        color: colors.whitePrimary,
        textAlign: 'center',
        lineHeight: 45,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        backgroundColor: colors.blackPrimary

    },
    listItem: {
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5

    },
    img: {
        borderRadius: 50,
        height: 60,
        width: 60,
        marginHorizontal: 20
    },
    name: {
        color: colors.whitePrimary,
        fontSize: 17,
        fontFamily: 'Poppins-Regular'
    },
    bottomText: {
        color: colors.whiteSecondary,
        fontSize: 13,
        fontFamily: 'Poppins-Regular'
    }
});