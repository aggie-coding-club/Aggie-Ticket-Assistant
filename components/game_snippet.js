import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import { Component } from 'react';

const Game_snippet = ({navigation, title, date}) =>{
  return(
    <View>
        <Text>LMAOO</Text>
        <TouchableOpacity style={styles.container}>
            <Text>date</Text>
            <Text>title</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      height: 150,
      backgroundColor: '#dedede'
  }
});


export default Game_snippet;