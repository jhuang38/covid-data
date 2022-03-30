import {useEffect, useState, useRef} from 'react';
import {Line} from 'react-chartjs-2';
import {CategoryScale, Chart, LinearScale, PointElement, LineElement,  Tooltip, Legend} from 'chart.js';
import {capitalizeString, parseDates} from './helperfuncs'
import { motion, AnimatePresence} from 'framer-motion';
import {fadeinout} from './animationVariants';
import Loader from './Loader';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);


const Graph = ({dataurl, dataurl2, datatype, datatype2, colour, colour2, onGraphRender}) => {
    const [xAxis, setxAxis] = useState([]);
    const [yAxis, setyAxis] = useState([]);
    const [yAxis2, setyAxis2] = useState([]);
    const validInput = useRef(true);
    const [chartData, updateChartData] = useState({
        labels: xAxis,
        datasets: [
            {
                label: datatype,
                data: yAxis
            },
            {
                label: datatype2,
                data: yAxis2
            }
        ]
    });
    useEffect(() => {
        fetch(dataurl, {mode: 'cors'})
            .then(data => {
                return data.json()
            })
            .then(data => {
                // if an invalid input is detected
                if (!data.All) {
                    validInput.current = false;
                }
                validInput.current = true;
                return parseDates(data.All.dates)
            })
            .then(data => {
                setxAxis(Object.keys(data))
                setyAxis(Object.values(data))
            })
            .catch(err => console.error(err))
    }, [dataurl])

    useEffect(() => {
        fetch(dataurl2, {mode: 'cors'})
            .then(data => {
                return data.json()
            })
            .then(data => {
                if (!data.All) {
                    validInput.current = false;
                }
                validInput.current = true;
                return parseDates(data.All.dates)
            })
            .then(data => {
                setyAxis2(Object.values(data))
            })
            .catch(err => console.error(err))
    }, [dataurl2])

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
                    tension: 1,
                    pointRadius: 0
                },
                {
                    id: capitalizeString(datatype2),
                    label: capitalizeString(datatype2),
                    data: yAxis2,
                    backgroundColor: colour2,
                    borderColor: colour2,
                    tension: 1,
                    pointRadius: 0
                },
            ]
        });
        if (xAxis.length !== 0 && yAxis.length !== 0 && yAxis2.length !== 0) {
            onGraphRender();
        }
        
    }, [xAxis, yAxis, yAxis2, datatype, datatype2, colour, colour2, onGraphRender])

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
                    display: false,
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
            },
            legend: {
                labels: {
                    color: '#000000',
                    boxWidth: 15,
                    boxHeight: 15,
                    font: {
                        family: 'Glacialindifference-Regular',
                        size: 16
                    },
                    padding: 16
                }
                
            }
        },
        layout: {

        }
    }
    
    return (
       <div>
           <AnimatePresence exitBeforeEnter>
           {(xAxis.length === 0 || yAxis.length === 0)?
            <motion.div variants = {fadeinout} initial = 'out' animate = 'in' exit = 'out' key = 'loader'>
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