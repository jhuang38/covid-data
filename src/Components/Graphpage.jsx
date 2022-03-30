import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Searchbar from "./Searchbar"
import Graph from './Graph';
import { capitalizeString, graphDisplayCountry, apiInputCountry} from './helperfuncs';
import { motion } from 'framer-motion';
import {pageTransitionVariant, hoverVariant} from './animationVariants';
import Typewriter from 'typewriter-effect';

const Graphpage = () => {
    let urlParams = useParams();
    const [country, setCountry] = useState(graphDisplayCountry(urlParams.country));
    useEffect(() => {
        setCountry(urlParams.country)
    }, [urlParams.country])

    const [footerActive, setFooterActive] = useState(false);
    const updateFooter = () => {
        setFooterActive(true);
    }

    return (
        <motion.div className = 'graphpage'
        variants = {pageTransitionVariant}
        initial='out'
        animate='in'
        exit='out'
        >
            <motion.h2
            variants = {hoverVariant}
            whileHover='hover'
            >{graphDisplayCountry(country)}</motion.h2>
            <Searchbar styling = {'graphpage'}/>
            <div className = "graph-container">
                <Graph dataurl = {`https://covid-api.mmediagroup.fr/v1/history?country=${apiInputCountry(country)}&status=confirmed`} dataurl2 = {`https://covid-api.mmediagroup.fr/v1/history?country=${apiInputCountry(country)}&status=deaths`} datatype = {'Total Confirmed Cases'} datatype2 = {'Total Confirmed Deaths'} countrySelect = {country} colour = {'#195190'} colour2 = {'#a2a2a1'} onGraphRender = {updateFooter}/>
            </div>
            <footer className = 'graphpage-footer'>
                {footerActive && <Typewriter
                    options = {{
                        delay: 50
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('All data has been obtained from the M-Media-Group COVID-19 API.')
                            .start();
                    }}
                >
                </Typewriter>
                }
            </footer>
        </motion.div>
    )
}

export default Graphpage