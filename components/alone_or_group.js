import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert, Button,p} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Alone_Group = ({route}) => {
    const {navigation} = route.params
    return (
        <View style={styles.topcontent}>
            <View style={styles.top_horiz}>
                <Text style={styles.text}>Group Status</Text>
            </View>
            <View style={styles.top_horiz}>
                <Text>
                    Are you pulling alone or with a group?
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('Dashboard')}>
                <Text style={styles.lil_text2}>Alone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('Dashboard')}>
                <Text style={styles.lil_text2}>With Group</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    topcontent: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 30,
        alignContent: 'center',
        alignItems: 'center'
      },
      top_horiz: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        alignContent: 'center',
        alignItems: 'center'
      },
      text: {
        color: '#500000',
        fontSize: 30,
        fontWeight: 'bold'
      },
      lil_text: {
        color: '#500000',
        fontSize: 18,
        textAlign: 'center'
      },
      button: {
        backgroundColor: "#500000",
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 250,
        alignSelf: 'center',
      },
      lil_text2: {
        color: '#ffffff',
        fontSize: 24,
        padding: 10
      }
})

export default Alone_Group;