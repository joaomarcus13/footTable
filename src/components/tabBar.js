
import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../assets/style/colors'

export default ({ state, descriptors, navigation, position }) => {
   
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
  
          return (
            <TouchableOpacity activeOpacity={.9} key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
  
              style={isFocused ? styles.tabActive : styles.tab}
            >
              <Text style={isFocused ? styles.tabTextActive : styles.tabText}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }


  const styles = StyleSheet.create({
  
    tab: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
      },
      tabActive: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
    
      },
      tabText: {
        color: 'white',
        height: '100%',
        /* width: '50%', */
        lineHeight: 50,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular'
    
      },
      tabTextActive: {
        color: 'white',
        height: '100%',
        width: '100%',
        lineHeight: 50,
        textAlign: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'green',
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
      },
  })