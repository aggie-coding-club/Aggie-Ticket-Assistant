import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert, Button,p} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {Picker} from '@react-native-picker/picker';

const Person_form = ({route}) => {
    const {navigation, people, person} = route.params
    // for(var person of people) {
    //   if(person.id == person_id){
    //     setPerson(person)
    //     setName(person.Name)
    //     setClassif(person.Classification)
    //     setPass(person.SportsPass)
    //     currIndex = people.indexOf(person)
    //     // console.log(person_id)
    //   }
    // }
    const [currPerson, setPerson] = useState({})
    const [currName, setName] = useState('')
    const [currClassif, setClassif] = useState('')
    const [currPass, setPass] = useState('')
    // console.log(currPerson)
    // console.log(currName)
    // console.log(currClassif)
    // console.log(currPass)
    // console.log(currIndex)
    const {classification, setClass} = useState()
    return (
        <View style={styles.topcontent}>
            <View style={styles.top_horiz}>
                <Text style={styles.text}>Person id: {person_id}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
      text: {
        color: '#500000',
        fontSize: 30,
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

export default Person_form;