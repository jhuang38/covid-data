import {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {CategoryScale, Chart, LinearScale, PointElement, LineElement,  Tooltip, Legend} from 'chart.js';
import {parseDates, setGraphData} from './helperfuncs'
import { motion, AnimatePresence} from 'framer-motion';
import {fadeinout} from './animationVariants';
import Loader from './Loader';
import GraphNotFound from './GraphNotFound';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);
const graph_options = {
    responsive: true,
    scales: {
        x: {display: false},
        y: {
            title: {
                display: false,
            },
            ticks: {
                font: {
                    family: 'Glacialindifference-Regular',
                    size: 12
                },
                beginAtZero: true
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
};

const Graph = ({dataurl, dataurl2, datatype, datatype2, colour, colour2, onGraphRender}) => {
    const [x_axis, setxAxis] = useState([]);
    const [y_axis, setyAxis] = useState([]);
    const [y_axis_2, setyAxis2] = useState([]);
    const [validInput, setValidInput] = useState(true);
    const [chartData, updateChartData] = useState({
        labels: x_axis,
        datasets: [setGraphData(datatype, y_axis, colour), setGraphData(datatype2, y_axis_2, colour2)]
    });

    useEffect(() => {
        Promise.all([fetch(dataurl, {mode: 'cors'})
        .then(data => {
            return data.json()
        })
        .then(data => {
            // if an invalid input is detected
            setValidInput(!!data.All);
            return parseDates(data.All.dates)
        })
        .then(data => {
            setxAxis(Object.keys(data));
            setyAxis(Object.values(data));
        })
        .catch(err => console.error(err)),
        
        fetch(dataurl2, {mode: 'cors'})
            .then(data => {return data.json()})
            .then(data => {
                setValidInput(!!data.All);
                return parseDates(data.All.dates)
            })
            .then(data => {
                setyAxis2(Object.values(data))
            })
            .catch(err => console.error(err))
    ])
        
        
        

    }, [dataurl, dataurl2])

    useEffect(() => {
        updateChartData({
            labels: x_axis,
            datasets: [setGraphData(datatype, y_axis, colour), setGraphData(datatype2, y_axis_2, colour2)]
        });
        if (x_axis.length !== 0 && y_axis.length !== 0 && y_axis_2.length !== 0 && validInput) onGraphRender();
    }, [x_axis, y_axis, y_axis_2, datatype, datatype2, colour, colour2, onGraphRender, validInput])
    
    return (
       <main>
           <AnimatePresence exitBeforeEnter>
            {
                (x_axis.length === 0 || y_axis.length === 0 || y_axis_2.length === 0)?
                    (!validInput)? 
                    <motion.div variants = {fadeinout} initial = 'out' animate = 'in' exit = 'out' key = 'missing'>
                        <GraphNotFound/>
                    </motion.div> 
                    :
                    <motion.div variants = {fadeinout} initial = 'out' animate = 'in' exit = 'out' key = 'loader'>
                        <Loader/> 
                    </motion.div> 
                :
                <motion.div variants = {fadeinout} initial = 'out' animate = 'in' key = 'graph'>
                    <Line data = {chartData} options = {graph_options}/>
                </motion.div>
            }
           </AnimatePresence>
       </main>
    );
}

export default Graph