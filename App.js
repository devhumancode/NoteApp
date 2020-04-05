import React, { useState } from 'react'
import {View, Button, Text, TextInput, StyleSheet, FlatList, Modal} from 'react-native'

export default function app() {
    const [noteText, setNoteText] = useState()
    const [note, setNote] = useState([])
    const [state, setState] = useState(false)

    const prepareNewNoteText = textFromClient => {
        setNoteText(textFromClient);
    }
    const createNewNote = () => {
        console.log(noteText)
        if(noteText === undefined)
        {
            return;
        }
        var randomID = Math.random()
        setNote(existingNotes => [...existingNotes, {id: randomID, value: noteText}]);
        setState(false);
        setNoteText(undefined);
    }

    const deleteNote = noteID => {
        setNote(existingNotes => { return existingNotes.filter((note) => note.id !== noteID);
        })
    }

    const modalDisplay = parameter => {
        setState(parameter);
    }

    return(
        <View style={styles.root}>
            <Text>hello</Text>
            <Text>hello</Text>
            <Button title="Add New Note" color="green" onPress={modalDisplay.bind(this, true)}/>
            <View style={{height: 1, borderBottomWidth: 1, borderBottomColor: 'green'}} />
            <Modal animated='slide' visible={state}> 
                <View style={styles.inputBox}>
                    <TextInput onChangeText={prepareNewNoteText} defaultValue={''} style={styles.textInput} />
                    <Button onPress={createNewNote} title="+" color="green" style={{padding: 20, fontSize: 50,}} />
                </View>
                <Button onPress={modalDisplay.bind(this, false)} title="⇊ cancel ⇊" color="red"/>
            </Modal>
            <View style={styles.notesBox}>
                <FlatList style={{height: '70%', marginTop: 20,}} data={note} renderItem={notesArray => 
                    <View style = {styles.notesList}>
                        <Text style={{color: 'white', flex: 1, textAlign: 'left', justifyContent: 'center', alignSelf: 'center',}}>
                            {notesArray.item.value}
                        </Text>
                        <Button title="X" color="red" onPress={deleteNote.bind(this, notesArray.item.id)} />
                    </View>
                } keyExtractor={(item, index) => index.toString()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    root: {
        width: '100%',
        height: '100%',
        alignContent: 'center',
        backgroundColor: 'black',
    },
    inputBox: {
        marginTop: 60,
        width: '80%',
        marginLeft: '10%',
        flexDirection: 'row',
    },
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        color: 'black',
        flex: 1,
        textAlign: 'center',
    },
    notesBox: {
        width: '80%',
        marginLeft: '10%',
    },
    notesList: {
        width: '100%',
        marginVertical: 20,
        backgroundColor: 'black',
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
})