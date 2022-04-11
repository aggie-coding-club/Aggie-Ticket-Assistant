import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert, Button, p } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Pull } from './pull.js'

const Results = ({ route }) => {
    const { navigation, people, game } = route.params
    // const resultData = Pull(game, people)
    return (
        <View style={styles.topcontent}>
            <View style={styles.top_horiz}>
                <Text style={styles.text}>Summary</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.top_horiz}>
                <Text style={{ fontSize: 17, color: '#611921', textAlign: 'center', paddingHorizontal: 50 }}>According to your group, you should pull on:</Text>
            </View>
            <View style={styles.top_horiz}>
                <Text style={{ fontSize: 27, color: '#783c3c', fontWeight: "bold" }}>TUESDAY, NOVEMBER 7</Text>
            </View>
            <View style={styles.top_horiz}>
                <Text style={{ textAlign: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#611921' }}>You are most likely to be placed in the</Text>
                    <Text style={{ fontSize: 18, color: '#611921', fontWeight: 'bold' }}> 2nd deck</Text>
                </Text>
            </View>
            <View style={styles.top_horiz}>
                <Text style={{ textAlign: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#611921' }}>Line up around </Text>
                    <Text style={{ fontSize: 18, color: '#611921', fontWeight: 'bold' }}>3 to 4 hours </Text>
                    <Text style={{ fontSize: 18, color: '#611921' }}>Before the window opening at </Text>
                    <Text style={{ fontSize: 18, color: '#611921', fontWeight: 'bold' }}>8 am</Text>
                </Text>
            </View>
            <View style={styles.top_horiz}>
                <Text style={{ fontSize: 18, color: '#611921' }}>
                    #BTHO{game.title}
                </Text>
            </View>
            {/* <View style={styles.top_horiz}>
                <Text style={{fontSize: 18, color: '#611921'}}>
                    {people[0].name} {people[0].classification} {people[0].pass ? 'yea':'no'} {people[0].passGuest ? 'yea':'no'} {people[0].student ? 'yea':'no'} {people[0].corps ? 'yea':'no'}
                </Text>
            </View> */}
            {/*<View style={styles.top_horiz}>
                <Text style={{fontSize: 18, color: '#611921'}}>
                    {game.id} {game.date} {game.cost} {game.title}
                </Text>
            </View> */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Group', {
                people: people,
                navigation: navigation,
                game: game
            })}>
                <Text style={styles.lil_text2}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Alone Group', {
                navigation: navigation,
                game: game
            })}>
                <Text style={styles.lil_text2}>Restart</Text>
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
        alignSelf: 'center',
        margin: 5,
    },
    lil_text2: {
        color: '#ffffff',
        fontSize: 24,
        padding: 10
    },
    line: {
        height: 1,
        backgroundColor: '#8f8f8f',
    }
})

export default Results;