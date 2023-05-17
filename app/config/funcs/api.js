import axios from 'axios';
import { storeData } from './modules'

//NOTE - postData
export const postData = (inputValue) => {
    datas = {
    'texto': inputValue
    }
    datas = '12'
    //REVIEW - Alterar IP local
    axios.post(`http://167.172.110.38:3000/enviar`, datas)
        .then(res => {
                setResponse(res.status)
            }).catch(err => {
                    storeData()
                });
}
