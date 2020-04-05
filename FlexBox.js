import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50, flexDirection: 'row', width: '90%', height: 300, marginLeft: '5%'}}>
      <View style={{
          backgroundColor: 'pink',
          width: 100,
          height: 100,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      }}>
          <Text>1</Text>
      </View>

      <View style={{
          backgroundColor: 'black',
          width: 100,
          height: 100,
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
      }}>
          <Text>2</Text>
      </View>

      <View style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      }}>
          <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
 