import React , { useState , useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line , Bar } from 'react-chartjs-2';

function Chart() {

    const [dailyData , setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }
        console.log(dailyData);
        fetchApi();
       
    } , []);

    const lineChart = (
        dailyData.length ?
            <Line 
                data = {{
                    labels : dailyData(({date}) => date),
                    datasets : [{
                        data : dailyData(({confirmed}) => confirmed),
                        borderColor : '#3333ff',
                        label : 'Infected',
                        fill : true
                    } , {
                        data : dailyData(({deaths}) => deaths),
                        borderColor : '#3333ff',
                        backgroundColor : 'red',
                        label : 'Deaths',
                        fill : true
                    }]
                }}
            /> : null
    );

    return (
        <div className = "chart">
        </div>
    )
}

export default Chart
