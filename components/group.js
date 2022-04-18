import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, SafeAreaView, Alert, Button, p } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Person = ({ name, classification, pass, id, people, navigation, person, passGuest, student, corps, game }) => (
    <View style={styles.person}>
        <View style={styles.puller_info}>
            <Text>{name}</Text>
            <Text>{classification}</Text>
            <Text>{pass ? "Sports Pass" : "No Sports Pass"}</Text>
        </View>
        <TouchableOpacity style={styles.edit_button} onPress={() => navigation.navigate('Person Form', {
            navigation: navigation,
            people: people,
            person: person,
            game: game
        })}>
            <Text style={{ color: '#500000', fontSize: 18, alignSelf: 'center' }}>Edit</Text>
        </TouchableOpacity>
    </View>
);

const Group = ({ route }) => {
    const { people, navigation, game } = route.params
    // const [pimples, setPimples] = useState(people)

    const addNewPerson = () => {
        var newPerson = {}
        newPerson.id = people[people.length - 1].id + 1
        newPerson.name = 'Person ' + String(newPerson.id)
        newPerson.classification = ''
        newPerson.pass = false
        newPerson.passGuest = false
        newPerson.student = false
        newPerson.corps = false

        people.push(newPerson)

        navigation.navigate('Person Form', {
            navigation: navigation,
            people: people,
            person: people[people.length - 1]
        })
    }

    return (
        <View style={styles.topcontent}>
            <View style={styles.top_horiz}>
                <Text style={styles.text}>Group</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.line}></View>
                <FlatList data={people} renderItem={({ item }) => <Person name={item.name} s classification={item.classification} pass={item.pass} id={item.id} people={people} navigation={navigation} person={item} passGuest={item.passGuest} student={item.student} corps={item.corps} game={game} />} />
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Results', {
                        navigation: navigation,
                        people: people,
                        game: game
                    })}>
                        <Text style={styles.lil_text2}>Continue</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => addNewPerson()}>
                    <Text style={styles.lil_text2}>Add Person</Text>
                </TouchableOpacity>
            </ScrollView>
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
        paddingVertical: 1,
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
        margin: 5,
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

    line: {
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
    },
    scrollView: {
        margin: 20
    }
})

export default Group;