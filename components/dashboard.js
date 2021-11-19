import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import {View, Text, Image, StyleSheet, Button} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import before_game from './before-game';
import Header from './Header';
import {app} from "../firebase"
import {ref, getDatabase, get, child} from "firebase/database"
import {getStorage, getDownloadURL} from "firebase/storage"

const db = getDatabase();
const dbRef = ref(getDatabase());

const GameSnippet = ({game, navigation}) => {
  <View>
    <TouchableOpacity style={styles.snippet} onPress={() => 
      navigation.navigate('Before Game', 
      {
        game: game
      })}>
      <Text>{game.title}</Text>
      <View style={styles.horizontal_content}>
        <Image source={game.homeLogo} style={styles.lil_image}/>
        <Text style={styles.score}>{game.homeScore} - {game.opponentScore}</Text>
        {/* <img src={tempPath} /> */}
        <Image source={game.opponentLogo} style={styles.lil_image}/>
      </View>
    </TouchableOpacity>
  </View>
}

const dashboard = ({navigation}) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    let isMounted = true;
    get(dbRef).then((snapshot) => {
      if(snapshot.exists()) {
        setGames(snapshot.val().filter(e => e != undefined))
        return snapshot.val()
      }
    });
    return () => {isMounted = false};
  },[]);
  
  if(games) console.log(games);
  return(
    <View>
      <Header />
      {/* <Text style={styles.header}>Live</Text> */}
      {/* <View style={styles.line}/> */}
      {/* <Game_znippet title={'Live'} opponentlogo={require('./images/new_mexico.png')} homeScore={69} opponentScore={0} navigation={navigation}/> */}
      <Text style={styles.header}>Upcoming</Text>
      <View style={styles.line}/>
      <FlatList data={games} renderItem = {({item}) => <GameSnippet game={item} navigation={navigation} />}/>
    </View>
  )
}

const styles = StyleSheet.create({
  snippet: {
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