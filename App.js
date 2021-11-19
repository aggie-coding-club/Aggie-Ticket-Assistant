import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {getStorage, ref, getDownloadURL} from "firebase/storage";
import {app} from "./firebase"

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


//Components
import dashboard from './components/dashboard';
import before_game from './components/before-game';
import Header from './components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();
export default function App() {
  const storage = getStorage();
  const [url, setUrl] = useState("")
  var headerRef = ref(storage, 'images/tamu_white.png');
  var result = getDownloadURL(headerRef);
  
  result.then((url) => {
    setUrl(url);
    return url; // TODO figure out a way to set image uri here
  }
  )
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#750013'
        },
        headerTitle: () => 
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Image
            style={{ width: 50, height: 50, alignSelf: 'center' }}
            source={{uri:url}}
          />
        </TouchableOpacity>,
        headerTitleAlign: 'center'
      })}>
        <Stack.Screen name = "Dashboard" component={dashboard}/>
        <Stack.Screen name = "Before Game" component={before_game}/>
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

