import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [emps, setEmps] = useState([]);
  function getEmployees() {
    let host = 'http://localhost:8000/api/';
    let endpoint = 'employees';
    let url = host + endpoint;

    fetch(url)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setEmps(result)
    });

  }
  useEffect( () => {
    getEmployees();
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Zolhum</Text>

      <FlatList 
      data={emps}
      renderItem={ ({item}) => (
        <Text>{item.name}</Text>
      )}
      />



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
