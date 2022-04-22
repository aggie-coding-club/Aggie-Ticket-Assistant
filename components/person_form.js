import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert, Button,p} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker'
import SelectDropdown from 'react-native-select-dropdown'
const Person_form = ({route}) => {
    const {navigation, people, person, game} = route.params
    /*{
      id: 1,
      name: 'Person 1',
      puller: true,
      classification: 'Classification',
      pass: 'Sports Pass Status',
      passGuest: true,
      student: true,
      corps: false
    },*/ 
    
    const [currPerson, setPerson] = useState({})
    const [currName, setName] = useState(person.name)
    const [currClassif, setClassif] = useState(person.classification)
    const [currPass, setPass] = useState(person.pass)
    const [currGuest, setGuest] = useState(person.passGuest)
    const [currStud, setStud] = useState(person.student)
    const [currCorps, setCorps] = useState(person.corps)
    const classificationValues = ["U1", "U2", "U3", "U4", "G", "G1", "G2"];
    const studentValues = ["Student", "Not a student"];
    const sportsPassStatus = ["Sports pass", "No sports pass"];
    const guestPassStatus = ["Guest pass", "No guest pass"];
    const corpsValues = ["Corps member", "Not a corps member"];

    const onSelect = function(selectedItem, index) {
      console.log(selectedItem);
      console.log(index);
    }

    const buttonTextAfterSelection = function(selectedItem, index) {
      // text represented after item is selected
      // if data array is an array of objects then return selectedItem.property to render after item is selected
      return selectedItem
    }

    const rowTextForSelection = function(item, index) {
      // text represented for each item in dropdown
      // if data array is an array of objects then return item.property to represent item in dropdown
      return item
    }

    const updatePeople = () => {
      var currInd = 0
      for(var everyPerson of people) {
        if(everyPerson.id == person.id){
          currInd = people.indexOf(everyPerson)
        }
      }
      var newPerson = {}
      newPerson.id = person.id
      newPerson.name = person.name
      newPerson.classification = currClassif
      newPerson.pass = currPass
      newPerson.passGuest = currGuest
      newPerson.student = currStud
      newPerson.corps = currCorps
      console.log(currClassif, currPass, currGuest, currStud, currCorps)

      people[currInd] = newPerson
      navigation.navigate('Group',{
        people: people,
        navigation: navigation,
        game: game
      })
    }
    return (
        <View style={styles.topcontent}>
            <View style={styles.top_horiz}>
                <Text style={styles.text}>{person.name}'s info</Text>
            </View>

            {/* TODO: have user object tracking current values, change onSelect functions for each dropdown to modify these values (maybe?) */}
            <SelectDropdown
            data={classificationValues}
            onSelect={(value, index) => setClassif(value)}
            buttonTextAfterSelection={buttonTextAfterSelection}
            rowTextForSelection={rowTextForSelection}
          />

            <SelectDropdown
            data={studentValues}
            onSelect={(value, index) => setStud(value)}
            buttonTextAfterSelection={buttonTextAfterSelection}
            rowTextForSelection={rowTextForSelection}
          />

<SelectDropdown
            data={sportsPassStatus}
            onSelect={(value, index) => setPass(value)}
            buttonTextAfterSelection={buttonTextAfterSelection}
            rowTextForSelection={rowTextForSelection}
          />

<SelectDropdown
            data={guestPassStatus}
            onSelect={(value, index) => setGuest}
            buttonTextAfterSelection={buttonTextAfterSelection}
            rowTextForSelection={rowTextForSelection}
          />
<SelectDropdown
            data={corpsValues}
            onSelect={(value, index) => setCorps(value)}
            buttonTextAfterSelection={buttonTextAfterSelection}
            rowTextForSelection={rowTextForSelection}
          />
            {/* <Picker
              selectedValue={currClassif}
              onValueChange={(value, index) => setClassif(value)}
              itemStyle={{height:20}}
            >
              <Picker.Item label="Classificaction (G for guest)" value="Unknown" />
              <Picker.Item label="U1" value="U1" />
              <Picker.Item label="U2" value="U2" />
              <Picker.Item label="U3" value="U3" />
              <Picker.Item label="U4" value="U4" />
              <Picker.Item label="G" value="UG" />
              <Picker.Item label="G1" value="G1" />
              <Picker.Item label="G2" value="G2" />
          </Picker> */}
          {/* <Picker
              selectedValue={currStud}
              onValueChange={(value, index) => setStud(value)}
            >
              <Picker.Item label="Student or Not" value="Unknown" />
              <Picker.Item label="This person is a current student" value="true" />
              <Picker.Item label="This person isn't a current student" value="" />
          </Picker>
          <Picker
              selectedValue={currPass}
              onValueChange={(value, index) => setPass(value)}
            >
              <Picker.Item label="Sports Pass status" value="Unknown" />
              <Picker.Item label="Yes, this person has a sports pass" value="true" />
              <Picker.Item label="No, this person doesn't have a sports pass" value="" />
          </Picker>
          <Picker
              selectedValue={currGuest}
              onValueChange={(value, index) => setGuest(value)}
            >
              <Picker.Item label="Guest Pass status" value="Unknown" />
              <Picker.Item label="Yes, this person has a guest pass" value="true" />
              <Picker.Item label="No, this person doesn't have a guest pass" value="" />
          </Picker>
          <Picker
              selectedValue={currCorps}
              onValueChange={(value, index) => setCorps(value)}
            >
              <Picker.Item label="Corps or not" value="Unknown" />
              <Picker.Item label="Yes, this person is a corps student" value="true" />
              <Picker.Item label="No, this person isn't a corps student" value="" />
          </Picker> */}
          <View style={styles.bottom}>
                <TouchableOpacity style={styles.button} onPress = {() => updatePeople()}>
                    <Text style={styles.lil_text2}>Continue</Text>
                </TouchableOpacity>
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
