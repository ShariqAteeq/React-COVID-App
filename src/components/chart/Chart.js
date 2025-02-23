import React , { useState , useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line , Bar } from 'react-chartjs-2';

function Chart( { data : {confirmed , recovered , deaths} , country } ) {

    const [dailyData , setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchApi();
       
    } , []);

    const lineChart = (
        dailyData.length ?
            <Line 
                data = {{
                    labels : dailyData.map(({date}) => date),
                    datasets : [{
                        data : dailyData.map(({confirmed}) => confirmed),
                        borderColor : '#3333ff',
                        label : 'Infected',
                        fill : true
                    } , {
                        data : dailyData.map(({deaths}) => deaths),
                        borderColor : 'red',
                        backgroundColor : 'rgba(255,0,0,0.5)',
                        label : 'Deaths',
                        fill : true
                    }]
                }}
            /> : null
    );

    const barChart = (
        confirmed ?
            <Bar 
                data = {{
                    labels : ['confirmed' , 'Recovered' , 'Deaths'],
                    datasets : [{
                        label : 'people',
                        backgroundColor : [
                            'rgba(0 ,0 , 255 , 0.5)' , 
                            'rgba(0 ,255 , 0 , 0.5)',
                            'rgba(255 ,0 ,0 , 0.5)'
                        ],
                        data : [confirmed.value , recovered.value , deaths.value]
                    }]
                }}
                options = {{
                    legend : {display : false},
                    title : {display : true, text : `current State in ${country}`}
                }}
                

            /> : null
    ); 

    return (
        <div className = "chart">
            { country ? barChart : lineChart}
        </div>
    )
}

export default Chart
