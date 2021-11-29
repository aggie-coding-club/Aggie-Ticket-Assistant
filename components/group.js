import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert, Button,p} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Person = ({name, puller, classification, sports_pass, id, people, navigation, person}) => (
    <View style={styles.person}>
        <View style={styles.puller_info}>
            <Text>{name}{puller}</Text>
            <Text>{classification}</Text>
            <Text>{sports_pass}</Text>
        </View>
        <TouchableOpacity style={styles.edit_button} onPress={() => navigation.navigate('Person Form', {
            navigation: navigation,
            people: people,
            person: person
        })}>
        <Text style={{color:'#500000',fontSize:18, alignSelf: 'center'}}>Edit</Text>
        </TouchableOpacity>
    </View>
);

const Group = ({route}) => {
    const {people, navigation} = route.params
    const [pimples, setPimples] = useState(people)
    return (
        <View style={styles.topcontent}>
            <View style={styles.top_horiz}>
                <Text style={styles.text}>Group</Text>
            </View>
            <View style={styles.line}></View>
            <FlatList data={pimples} renderItem={({item}) => <Person name={item.Name} puller={item.Puller} classification={item.Classification} sports_pass={item.SportsPass} id={item.id} people={pimples} navigation={navigation} person={item}/>}/>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('Dashboard')}>
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
        alignSelf: 'center',
    },
    edit_button: {
        backgroundColor: "#ffffff",
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 100,
        height: 40,
        alignSelf: 'center',
    },
    lil_text2: {
        color: '#ffffff',
        fontSize: 24,
        padding: 10
    },
      
    line:{
        height: 1,
        backgroundColor: '#8f8f8f',
    },
    person: {
        height: 90,
        backgroundColor: '#dedede',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'center'
    },
    puller_info: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    bottom: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})

export default Group;