import React, { useState } from 'react';
import { render } from 'react-dom';
import {View, Text, Image, StyleSheet, Button} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import before_game from './before-game';
import Header from './Header';

// const tempPath = './images/tamu_red.png'
const Game_znippet = ({title, date, opponentlogo, homeScore, opponentScore, navigation}) => (
  <View>
    <TouchableOpacity style={styles.znippet} onPress={() => 
      navigation.navigate('Before Game', 
      {
        randomParam: title,
      })}>
      <Text>{title}</Text>
      <View style={styles.horizontal_content}>
        <Image source={require('./images/tamu_red.png')} style={styles.lil_image}/>
        <Text style={styles.score}>{homeScore} - {opponentScore}</Text>
        {/* <img src={tempPath} /> */}
        <Image source={opponentlogo} style={styles.lil_image}/>
      </View>
    </TouchableOpacity>
  </View>
)

const dashboard = ({navigation}) => {
  const games = ([
    {id: 1, title:'Alabama', date:'Nov 6, 2021', status:'upcoming', opponentlogo:require('./images/alabama.png'), homeScore:0, opponentScore:0, nav:navigation},
    {id: 2, title:'Mississippi', date:'Nov 7, 2021', status:'upcoming', opponentlogo:require('./images/mississippi.png'), homeScore:0, opponentScore:0, nav:navigation}
  ])
  // const games = ([
  //   {id: 1, title:'Alabama', date:'Nov 6, 2021', status:'upcoming', opponentlogo:'./images/alabama.png', homeScore:0, opponentScore:0},
  //   {id: 2, title:'Mississippi', date:'Nov 7, 2021', status:'upcoming', opponentlogo:'./images/mississippi.png',homeScore:0, opponentScore:0}
  // ])

  const renderDaItem = ({item}) => (
    // <Game_znippet title={item.date} opponentlogo={require(`${item.opponentlogo}`)} homeScore={item.homeScore} opponentScore={item.opponentScore}/>
    <Game_znippet title={item.title} date={item.date} opponentlogo={item.opponentlogo} homeScore={item.homeScore} opponentScore={item.opponentScore} navigation={item.nav}/>
    )
  return(

    <View>
      <Header />
      <Text style={styles.header}>Live</Text>
      <View style={styles.line}/>
      <Game_znippet title={'Live'} opponentlogo={require('./images/new_mexico.png')} homeScore={69} opponentScore={0} navigation={navigation}/>
      <Text style={styles.header}>Upcoming</Text>
      <View style={styles.line}/>
      <FlatList data={games} renderItem = {renderDaItem}/>
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
    color: '#8f8f8f'
  },
  line:{
    height: 1,
    backgroundColor: '#8f8f8f',
  }
});

export default dashboard;