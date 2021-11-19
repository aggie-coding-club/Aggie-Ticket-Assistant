import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert, Button,p} from 'react-native';
import Header from './Header';


const before_game = ({route}) => {
  // const [imag, setImag] = useState([require('./rev0.jpg'), require('./rev1.jpg'), require('./rev2.jpg'), require('./rev3.jpg'), require('./rev4.jpg'), require('./rev5.jpg')])
  const {randomParam, randomParam2} = route.params
  return(
    <View style={styles.view}>
        <Text style={styles.text}>YOOO WE JUS NAVIGATED</Text>
        <Text style={styles.text}>{randomParam}</Text>
        <Text style={styles.text}>{randomParam2}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
      text: {
        color: 'darkslateblue',
        fontSize: 30,
      },
    });

export default before_game;