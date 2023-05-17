import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

//NOTE - postData
export const postData = (inputValue) => {
    datas = {
    'texto': inputValue
    }
    //datas = '12'
    //REVIEW - Alterar IP local
    axios.post(`http://167.172.110.38:3000/enviar`, datas)
        .then(res => {
                setResponse(res.status)
            }).catch(err => {
                    storeData()
                });
}

//NOTE - storeData
export const storeData = async () => {
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