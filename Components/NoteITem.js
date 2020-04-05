import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const NoteItem = props => {
    return(
        <View style={styles.ideaListItem}>
          <Text style={styles.noteText}>
            {props.title}
          </Text>
          <Button title="X" color='red' onPress={props.deleteNote.bind(this, props.id)}/>
        </View>
    )
}


const styles = StyleSheet.create ({
    ideaListItem: {
        flexDirection: 'row',
        padding: 5,
        marginVertical: 10,
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
    },
    noteText: {
      color: 'white',
      flex: 1,
      textAlign: 'center',
      alignSelf: 'center',
    },
})

export default NoteItem;