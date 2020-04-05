import React from 'react';
import { View, Text , TextInput, Button, StyleSheet } from 'react-native';

const NoteInput = props => {
    return(
    <View style={styles.flexBox}>
        <TextInput onChangeText={props.newData} placeholder="Course Goal" style={styles.textInput}/>
        <Button title="ADD" color="green" onPress={props.addNewTask}/>
    </View>
    )   
}


const styles = StyleSheet.create ({
    flexBox: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignContent: 'center',
      },
      textInput: {
        width: '80%', 
        borderBottomColor: 'black', 
        borderBottomWidth: 2, 
        padding: 10,
      },
})

export default NoteInput;