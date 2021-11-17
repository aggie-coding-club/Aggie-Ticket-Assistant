import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import dashboard from './dashboard';
import {getStorage, ref, getDownloadURL} from "firebase/storage";
import {app} from "../firebase"

const storage = getStorage();
var header_url = 'http://placekitten.com/200/300';
var headerRef = ref(storage, 'images/tamu_white.png');

var result = getDownloadURL(headerRef);

result.then((url) => {
  header_url = url;
  console.log("1 " + header_url)
  return url; // TODO figure out a way to set image uri here
}
)

console.log("2 " + header_url)

const Header = ({navigation}) =>{
  return(
    <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => 
                navigation.navigate('Dashboard') 
            }>
            <Image source={{uri: header_url}} style={styles.img}/>
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    marginTop: Constants.statusBarHeight,
    height: 60,
    padding:15,
    backgroundColor: '#630515',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
      height: 55,
      width: 55
  }
});


export default Header;