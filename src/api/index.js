import axios from 'axios';

const api = 'https://covid19.mathdro.id/api'

export const fetchData = async() => {

    try{
        const { data : { confirmed , recovered , deaths , lastUpdate } } = await axios.get(api);

        return { confirmed , recovered , deaths , lastUpdate };

    }catch(error) {
        console.log(error);
    }
}

export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${api}/daily`);
        console.log(data);
    }
    catch(err) {
        console.log(err)
    }
}