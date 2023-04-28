import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const App = () => {
  const [response, setResponse] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleRequest = () => {
    axios.get(`http://192.168.0.13:3000/`)
      .then(res => setResponse(res.data))
      .catch(err => console.error(err));
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Response: {response}</Text>
      <TextInput
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 5 }}
        placeholder="Enter a value"
        onChangeText={text => setInputValue(text)}
        value={inputValue}
      />
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
        onPress={handleRequest}
      >
        <Text style={{ color: 'white' }}>Send Request</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

