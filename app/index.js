import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [response, setResponse] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleRequest = () => {
      datas = {
        'texto': inputValue
    }
    //REVIEW - Alterar IP local
    axios.post(`http://192.168.15.132:3000/enviar`, datas)
      .then(res => setResponse(res.data.mensagem))
      .catch(err => console.error(err));
    
  }

  //NOTE - storeData
  const storeData = async () => {
    const json = {
      valor: inputValue
    }
    try {      
      const jsonValue = JSON.stringify(json)
      await AsyncStorage.setItem('key', jsonValue)
      console.log('Valor salvo com sucesso!', jsonValue);
    } catch(e) {
      console.log('Erro ao salvar o valor:', e);
    }
  
    console.log('Done.')
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('key')
      console.log('Valor pego com sucesso!');
      if (jsonValue !== null) {
        const parsedValue = JSON.parse(jsonValue);
        console.log('Conteúdo do jsonValue:', parsedValue);
        setDisplayText(jsonValue)
        return parsedValue;
      } else {
        return null;
      }
    } catch(e) {
      console.log('Erro ao salvar o valor:', e);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>displayText: {displayText}</Text>
      <TextInput
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 5 }}
        placeholder="Enter a value"
        onChangeText={text => setInputValue(text)}
        value={inputValue}
      />
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
        onPress={storeData}
      >
        <Text style={{ color: 'white' }}>Send Request</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
        onPress={getData}
      >
        <Text style={{ color: 'white' }}>Send Request</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;


