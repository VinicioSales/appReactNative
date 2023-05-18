import { useState, useEffect, React } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { postData } from './config/funcs/modules';
import { verificarStorage } from './config/funcs/modules';

const App = () => {
  useEffect(() => {
    verificarStorage(setDisplayText);
  }, []);

  const [response, setResponse] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');

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
        onPress={() => postData(inputValue)}
      >
        <Text style={{ color: 'white' }}>Send Request</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;


