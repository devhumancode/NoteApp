import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import NoteITem from './Components/NoteITem';
import NoteInput from './Components/NoteInput';

export default function App() {
  //enteredGoal - already existing value that is being created, setEnteredGoal - assigns to the new value
  const [newItem, setNewItem] = useState('')

  //Creating an array to hold all my items, setCourseGoals adds new items to the array
  const [tasks, addNewTask] = useState([])

  //Handles over the input from user
  const newItemDataSaving = (enteredText) => {
    setNewItem(enteredText)
  };

  //Adds new task to the task array
  const addNewTaskHandler = () => {
    addNewTask(existingTasks => [...existingTasks, {id: Math.random().toString(), value: newItem}]);
  };

  //Deletes the last array item
  const deleteSelectedTask = taskID => {
    addNewTask(existingTasks => {
      return existingTasks.filter((task) => task.id !== taskID );
    })
    console.log(taskID)
  }; 
  return (
    <View style={styles.root}>
      <NoteInput newData={newItemDataSaving} addNewTask={addNewTaskHandler}/>
      <FlatList data={tasks} renderItem={itemData => <NoteITem id={itemData.item.id} deleteNote={deleteSelectedTask} title={itemData.item.value}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
    width: '100%',
    height: '100%',
    backgroundColor: '#EDEAE9',
  },
  ideaList: {
    width: '100%',
    marginTop: 20,
  },
  deleteButton: {
    width:20,
    height: 20,
  }
});
 