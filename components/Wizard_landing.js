import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert, Button, p } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Wizard_landing = ({ route }) => {
  const { navigation, game } = route.params
  return (
    <View style={styles.topcontent}>
      <View style={styles.top_header}>
        <Text style={styles.text}>Welcome to the Pulling Wizard!</Text>
      </View>
      <View style={styles.top_horiz}>
        <Text>
          Here's a few questions about your group to
          find the best time for you to pull tickets.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Alone Group', {
        navigation: navigation,
        game: game
      })}>
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
  top_header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    alignContent: 'center',
    alignItems: 'center'
  },
  top_horiz: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#500000',
    fontSize: 20,
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