import {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {CategoryScale, Chart, LinearScale, PointElement, LineElement,  Tooltip} from 'chart.js';
import {capitalizeString, parseDates} from './helperfuncs'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)



const Graph = ({dataurl, datatype, countrySelect, colour}) => {
    const country = capitalizeString(countrySelect);
    const [xAxis, setxAxis] = useState([]);
    const [yAxis, setyAxis] = useState([]);
    const [chartData, updateChartData] = useState({
        labels: xAxis,
        datasets: [
            {
                label: datatype,
                data: yAxis
            }
        ]
    });
    useEffect(() => {
        fetch(dataurl, {mode: 'cors'})
            .then(data => {
                return data.json()
            })
            .then(data => {
                return parseDates(data.All.dates)
            })
            .then(data => {
                setxAxis(Object.keys(data))
                setyAxis(Object.values(data))
            })
            .catch(err => console.error(err))
    }, [dataurl])

    useEffect(() => {
        updateChartData({
            labels: xAxis,
            datasets: [
                {
                    id: capitalizeString(datatype),
                    label: capitalizeString(datatype),
                    data: yAxis,
                    backgroundColor: colour
                },
            ]
        })
    }, [xAxis, yAxis, datatype, colour])

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: datatype
                }
            }
        },
        plugins: {
        },
        layout: {

        }
    }
    
    return (
       <div>
           <Line
           data = {chartData}
           options = {options}
           

           />
       </div>
    );
}

export default Graph