import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Searchbar from "./Searchbar"
import Graph from './Graph';
import { capitalizeString } from './helperfuncs';
import { motion } from 'framer-motion';
import {pageTransitionVariant, hoverVariant} from './animationVariants';
import Typewriter from 'typewriter-effect';

const Graphpage = () => {
    let urlParams = useParams();
    const [country, setCountry] = useState(capitalizeString(urlParams.country));
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
            >{country}</motion.h2>
            <Searchbar styling = {'graphpage'}/>
            <div className = "graph-container">
                <Graph dataurl = {`https://covid-api.mmediagroup.fr/v1/history?country=${country}&status=confirmed`} datatype = {'Total Confirmed Cases'} countrySelect = {country} colour = {'#024790'} onGraphRender = {updateFooter}/>
                {// <Graph dataurl = {`https://covid-api.mmediagroup.fr/v1/history?country=${country}&status=deaths`} datatype = {'Deaths'} countrySelect = {country} colour = {'#777777'}/>
                }
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