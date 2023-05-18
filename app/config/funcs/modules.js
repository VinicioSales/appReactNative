import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

//NOTE - postData
export const postData = (inputValue) => {
    datas = {
    'texto': inputValue
    }
    console.log(`inputValue: ${inputValue}`)
    console.log(`datas: ${datas}`)
    //datas = '12'
    //REVIEW - Alterar IP local
    axios.post(`http://167.172.110.38:3000/enviar`, datas)
        .then(res => {
                //setResponse(res.status)
                console.log('postData: Ok')
            }).catch(err => {
                    storeData(inputValue)
                });
}

//NOTE - postDataOnly
export const postDataOnly = (parsedValue) => {
    //REVIEW - Alterar IP local
    axios.post(`http://167.172.110.38:3000/enviar`, parsedValue)
        .then(res => {
                console.log(`postDataOnly: ${res.status}`)
            }).catch(e => {
                    console.log(`postDataOnly: ${e}`)
                });
}

//NOTE - storeData
const storeData = async (inputValue) => {
    const json = {
        texto: inputValue
    }
    try {      
        const jsonValue = JSON.stringify(json)
        await AsyncStorage.setItem('key', jsonValue)
        console.log('storeData: OK!');
    } catch(e) {
        console.log('storeData:', e);
    }
    }

//NOTE - getData
const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('key123')
        if (jsonValue !== null) {
        const parsedValue = JSON.parse(jsonValue);
        console.log('getData:', parsedValue);
        setDisplayText(jsonValue)
        return parsedValue;
        } else {
        return null;
        }
    } catch(e) {
        console.log('getData:', e);
    }
}

//NOTE - verificarStorage
export const verificarStorage = async (setDisplayText) => {
    try {
        const jsonValue = await AsyncStorage.getItem('key')
        if (jsonValue !== null) {
            const parsedValue = JSON.parse(jsonValue);
            console.log('verificarStorage: Ok', jsonValue);
            postDataOnly(parsedValue);
            return parsedValue;
        } else {
            return null;
        }
    } catch(e) {
        console.log('verificarStorage:', e);

    }
}
