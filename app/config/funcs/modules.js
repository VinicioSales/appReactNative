import AsyncStorage from '@react-native-async-storage/async-storage';
import { postData } from './api';

//NOTE - getData
export const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('key123')
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

//NOTE - verificarStorage
export const verificarStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('key321456')
      if (jsonValue !== null) {
        console.log('Item do Storage pego com sucesso!');
        const parsedValue = JSON.parse(jsonValue);
        console.log('Conteúdo do jsonValue:', parsedValue);
        setDisplayText(jsonValue)
        postData();
        console.log('Item do Storage enviado com sucesso!')
        return parsedValue;
        } else {
            return null;
        }
    } catch(e) {
        console.log('Erro ao salvar o valor:', e);

    }
}