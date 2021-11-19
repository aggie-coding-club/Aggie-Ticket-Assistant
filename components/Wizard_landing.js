import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert, Button,p} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Wizard_landing = ({route}) => {
    const {navigation} = route.params
    return (
        <View style={styles.topcontent}>
            <View style={styles.top_horiz}>
                <Text style={styles.text}>Pulling Wizard</Text>
            </View>
            <View style={styles.top_horiz}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aenean et purus sed orci
                    condimentum efficitur vitae eget dolor.
                    Maecenas ornare nunc non velit sodales
                    egestas. Phasellus mattis vel lacus eu.
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('Dashboard')}>
                <Text style={styles.lil_text2}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    topcontent: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 30
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
        alignSelf: 'center'
      },
      lil_text2: {
        color: '#ffffff',
        fontSize: 24,
        padding: 10
      }
})

export default Wizard_landing;