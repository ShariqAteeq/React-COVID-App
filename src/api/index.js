import axios from 'axios';

const api = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {

    let changeableUrl = api;

    if(country) {
        changeableUrl = `${api}/countries/${country}`;
    }

    try{

        const { data : { confirmed , recovered , deaths , lastUpdate } } = await axios.get(changeableUrl);

        return { confirmed , recovered , deaths , lastUpdate };

    }catch(error) {
        console.log(error);
    }
}

export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${api}/daily`);

        const modifiedDate = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate
        }));
        
        return modifiedDate;
    }
    catch(err) {
        console.log(err)
    }
}

export const fetchCountries = async () => {
    try {
        const { data : { countries } } = await axios.get(`${api}/countries`);
    
        return countries.map(country => country.name);
    }
    catch(err) {
        console.log(err);
    }
}