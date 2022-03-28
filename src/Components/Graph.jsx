import {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {CategoryScale, Chart, LinearScale, PointElement, LineElement,  Tooltip} from 'chart.js';
import {capitalizeString, parseDates} from './helperfuncs'
import { motion, AnimatePresence} from 'framer-motion';
import {fadeinout} from './animationVariants';
import Loader from './Loader';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);


const Graph = ({dataurl, datatype, countrySelect, colour, onGraphRender}) => {
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
                    backgroundColor: colour,
                    borderColor: colour,
                },
            ]
        });
        if (xAxis.length !== 0 && yAxis.length !== 0) {
            onGraphRender();
        }
        
    }, [xAxis, yAxis, datatype, colour, onGraphRender])

    const options = {
        responsive: true,
        scales: {
            x: {
                display: false,
                title: {
                    display: true,
                    text: 'Date'
                },
                ticks: {
                    display: false
                }
            },
            y: {
                title: {
                    display: true,
                    text: datatype,
                    font: {
                        family: 'Glacialindifference-Bold',
                        size: 12
                    }
                },
                ticks: {
                    font: {
                        family: 'Glacialindifference-Regular',
                        size: 12
                    }
                }
            },
        },
        plugins: {
            tooltip: {
                intersect: false,
                titleFont: {
                    family: 'Glacialindifference-Bold',
                    size: 12
                },
                bodyFont: {
                    family: 'Glacialindifference-Regular',
                    size: 12
                },
                displayColors: false
            }
        },
        layout: {

        }
    }
    
    return (
       <div>
           <AnimatePresence exitBeforeEnter>
           {(xAxis.length === 0 || yAxis.length === 0)?
            <motion.div variants = {fadeinout} initial = 'in' animate = 'in' exit = 'out' key = 'loader'>
                <Loader/> 
            </motion.div> 
    
            :
            <motion.div variants = {fadeinout} initial = 'out' animate = 'in' key = 'graph'>
                <Line data = {chartData} options = {options}/>
            </motion.div>
           }
           </AnimatePresence>
       </div>
    );
}

export default Graph