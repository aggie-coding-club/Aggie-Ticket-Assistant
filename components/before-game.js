import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert, Button,p} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from './Header';


const before_game = ({route}) => {
  // const [imag, setImag] = useState([require('./rev0.jpg'), require('./rev1.jpg'), require('./rev2.jpg'), require('./rev3.jpg'), require('./rev4.jpg'), require('./rev5.jpg')])
  const {randomParam, randomParam2, navigation} = route.params
  return(
    <View>
        <View style={styles.topcontent}>
          <View style={styles.top_horiz}>
            <Text style={styles.text}>Texas A&M</Text>
            <Text style={styles.text}>{randomParam}</Text>
          </View>
          <View style={styles.top_horiz}>
            <Image source={{uri: 'https://placekitten.com/200/300'}} style={styles.img}/>
            <Text style={styles.lil_text}>vs.</Text>
            <Image source={{uri: 'https://placekitten.com/200/300'}} style={styles.img}/>
          </View>
          <View style={styles.top_horiz}>
            <Text style={styles.text}>Nov 7, 2021</Text>
          </View>
          <View style={styles.top_horiz}>
            <Text style={styles.text}>Kyle Field</Text>
          </View>
        </View>
        <Text style={styles.headText}>PULLING</Text>
        <View style={styles.line}/>
        <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('Dashboard')}>
          <Text style={styles.lil_text2}>Get Pulling Info</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
      text: {
        color: '#500000',
        fontSize: 30,
        fontWeight: 'bold'
      },
      headText: {
        color: '#4f2424',
        fontSize: 36,
        fontWeight: 'bold'
      },
      lil_text:{
        color: '#500000',
        fontSize: 24
      },
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
      img: {
        width: 85,
        height: 85
      },
      line:{
        height: 1,
        backgroundColor: '#8f8f8f',
        paddingHorizontal: 45,
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
    });

export default before_game;