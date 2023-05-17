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
                    storeData(inputValue)
                });
}

//NOTE - postDataOnly
export const postDataOnly = (inputValue) => {
    datas = {
    'texto': inputValue
    }
    //REVIEW - Alterar IP local
    axios.post(`http://167.172.110.38:3000/enviar`, datas)
        .then(res => {
                setResponse(res.status)
                console.log(`postDataOnly: ${res.status}`)
            }).catch(e => {
                    console.log(`Erro postDataOnly: ${e}`)
                });
}

//NOTE - storeData
const storeData = async (inputValue) => {
    const json = {
        valor: inputValue
    }
    try {      
        const jsonValue = JSON.stringify(json)
        await AsyncStorage.setItem('key', jsonValue)
        console.log('Valor salvo com sucesso!', jsonValue);
    } catch(e) {
        console.log('Erro storeData:', e);
    }
    }

//NOTE - getData
const getData = async () => {
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
        console.log('Erro getData:', e);
    }
}

//NOTE - verificarStorage
export const verificarStorage = async (setDisplayText) => {
    try {
        const jsonValue = await AsyncStorage.getItem('key')
        if (jsonValue !== null) {
            console.log('Item do Storage pego com sucesso! 1');
            const parsedValue = JSON.parse(jsonValue);
            console.log('Conteúdo do jsonValue:', parsedValue);
            //setDisplayText(jsonValue)
            postDataOnly();
            return parsedValue;
        } else {
            return null;
        }
    } catch(e) {
        console.log('Erro verificarStorage:', e);

    }
}
