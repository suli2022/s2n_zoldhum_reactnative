import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  function getEmployees() {
    let host = 'http://localhost:8000/api/';
    let endpoint = 'employees';
    let url = host + endpoint;

    fetch(url)
    .then(result => result.json())
    .then(response => {
      console.log(response)
    });

  }
  useEffect( () => {
    getEmployees();
  });
  
  return (
    <View style={styles.container}>
      <Text>Zolhum</Text>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
