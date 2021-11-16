import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";  

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYxpGx5NWBb9QbhkQEvEO5hQPi8Tv1Sxg",
  authDomain: "aggieticketassistant.firebaseapp.com",
  projectId: "aggieticketassistant",
  storageBucket: "aggieticketassistant.appspot.com",
  messagingSenderId: "74178268872",
  appId: "1:74178268872:web:91e814b861ac6e70a0dffd",
  measurementId: "G-Y7XK0SMWSD",
  databaseURL: "https://aggieticketassistant-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

//Components
import dashboard from './components/dashboard';
import before_game from './components/before-game';
import Header from './components/Header';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name = "Dashboard" component={dashboard}/>
        <Stack.Screen name = "Before Game" component={before_game}/>
        <Stack.Screen name = "Header" component={Header}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

