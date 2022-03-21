import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {CategoryScale, Chart, LinearScale, PointElement, LineElement, Legend, Title, Tooltip} from 'chart.js';
import {capitalizeString, parseDates} from './helperfuncs'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Title, Tooltip)



const Graphs = () => {
    let urlParams = useParams();
    const [country, setCountry] = useState(urlParams.country);
    const [countryDates, setCountryDates] = useState([]);
    const [countryCases, setCountryCases] = useState([]);
    const [countryDeaths, setCountryDeaths] = useState([]);
    const [chartData, updateChartData] = useState({
        labels: countryDates,
        datasets: [
            {
                label: 'Cases',
                data: countryCases
            },
            {
                label: 'Deaths',
                data: countryDeaths
            }
        ]
    });
    useEffect(() => {
        fetch(`https://covid-api.mmediagroup.fr/v1/history?country=${capitalizeString(country)}&status=deaths`, {mode: 'cors'})
            .then(data => {
                return data.json()
            })
            .then(data => {
                return parseDates(data.All.dates)
            })
            .then(data => {
                setCountryDates(Object.keys(data))
                setCountryDeaths(Object.values(data))
            })
            .catch(err => console.error(err))
        fetch(`https://covid-api.mmediagroup.fr/v1/history?country=${capitalizeString(country)}&status=confirmed`, {mode: 'cors'})
            .then(data => {
                return data.json()
            })
            .then(data => {
                return parseDates(data.All.dates)
            })
            .then(data => {
                setCountryDates(Object.keys(data))
                setCountryCases(Object.values(data))
            })
            .catch(err => console.error(err))
        
    }, [country])

    useEffect(() => {
        updateChartData({
            labels: countryDates,
            datasets: [
                {
                    id: 'Cases',
                    label: 'Cases',
                    data: countryCases,
                    backgroundColor: '#ff6384'
                },
                {
                    id: 'Deaths',
                    label: 'Deaths',
                    data: countryDeaths,
                    backgroundColor: '#36a2eb'
                }
            ]
        })
    }, [countryCases, countryDates, countryDeaths])
    
    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date'
                }
                
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'end',
            },
            title: {
                display: true,
                text: `${country} COVID-19 Data`
            },
            decimation: {
                enabled: true
            }
        },
        layout: {
            padding: 75
        }
    }
    
    return (
       <div>
           Country: {urlParams.country}
           <Line
           data = {chartData}
           options = {options}
           

           />
       </div>
    );
}

export default Graphs