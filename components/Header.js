import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import dashboard from './dashboard';
import {getStorage, ref, getDownloadURL} from "firebase/storage";
import {app} from "../firebase"

const Header = ({navigation}) =>{
  const storage = getStorage();
  const [url, setUrl] = useState("")
  var headerRef = ref(storage, 'images/tamu_white.png');
  var result = getDownloadURL(headerRef);
  
  result.then((url) => {
    setUrl(url);
    return url; // TODO figure out a way to set image uri here
  }
  )

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