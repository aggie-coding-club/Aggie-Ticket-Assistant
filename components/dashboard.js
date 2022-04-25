import React, { useState } from 'react';
import { render } from 'react-dom';
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import before_game from './before-game';
import Header from './Header';

const tempPath = 'data:image/png;base64,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'
const Game_znippet = ({title, date, opponentlogo, homeScore, opponentScore, navigation, game}) => (
  <View>
    <TouchableOpacity style={styles.znippet} onPress={() => 
      navigation.navigate('Before Game', 
      {
        game: game,
        navigation: navigation
      })}>
      <Text>{title}</Text>
      <View style={styles.horizontal_content}>
        <Image source={{uri: tempPath}} style={styles.lil_image}/>
        <Text style={styles.score}>{homeScore} - {opponentScore}</Text>
        {/* <img src={tempPath} /> */}
        <Image source={{uri:opponentlogo}} style={styles.lil_image}/>
      </View>
    </TouchableOpacity>
  </View>
)

const createAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

const dashboard = ({navigation}) => {
  const games = ([
    {id: 1, date:"2022-04-30", cost: 65, opponentlogo:'https://github.com/aggie-coding-club/Aggie-Ticket-Assistant/blob/main/components/images/new_mexico.png?raw=true', homeScore:0, opponentScore:0, title:'New Mexico', live: true},
    {id: 2, date:"2021-10-09", cost: 65, opponentlogo:'https://github.com/aggie-coding-club/Aggie-Ticket-Assistant/blob/main/components/images/alabama.png?raw=true', homeScore:0, opponentScore:0, title:'Alabama', live: false},
    {id: 3, date:"2021-10-07", cost: 65, opponentlogo:'https://github.com/aggie-coding-club/Aggie-Ticket-Assistant/blob/main/components/images/mississippi.png?raw=true', homeScore:0, opponentScore:0, title:'Mississippi', live: false},
  ])
  // const renderDaItem = ({item}) => (
  // <Game_znippet title={item.title} date={item.date} opponentlogo={item.opponentlogo} homeScore={item.homeScore} opponentScore={item.opponentScore} navigation={item.nav}/>
  //   )
  return(
    <View>
      {/* <Text style={styles.header}>Live</Text>
      <View style={styles.line}/> */}
      {/* <Game_znippet title={'Live'} opponentlogo={'./images/new_mexico.png'} homeScore={69} opponentScore={0} navigation={navigation}/> */}
      <Text style={styles.header}>Upcoming</Text>
      <View style={styles.line}/>
      <FlatList data={games} renderItem = {({item}) => <Game_znippet title={item.title} date={item.date} opponentlogo={item.opponentlogo} homeScore={item.homeScore} opponentScore={item.opponentScore} navigation={navigation} game={item}/>}/>
    </View>
  )
}

const styles = StyleSheet.create({
  znippet: {
      height: 90,
      backgroundColor: '#dedede',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 15,
      flexDirection: 'column',
  },
  lil_image:{
    height:45,
    width:45
  },
  horizontal_content:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'center'
  },
  score:{
    fontSize: 38,
    color: '#6e000d'
  },
  header: {
    fontSize: 24,
    color: '#8f8f8f',
    fontWeight: 'bold'
  },
  line:{
    height: 1,
    backgroundColor: '#8f8f8f',
  }
});

export default dashboard;