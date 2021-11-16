import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import dashboard from './dashboard';
import {getStorage, ref} from "firebase/storage";

const storage = getStorage();

headerRef = ref(storage, 'images/tamu_white.png')
const url = await headerRef.getDownloadURL();

const Header = ({navigation}) =>{
  return(
    <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => 
                navigation.navigate('Dashboard') 
            }>
            <Image source={{uri: url}} style={styles.img}/>
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