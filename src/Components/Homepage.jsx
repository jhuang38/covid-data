import Searchbar from './Searchbar';
import logo from '../assets/logo.png'
import { motion } from 'framer-motion';
import {pageTransitionVariant} from './animationVariants';

const Homepage = () => {
    return (
        <motion.div className = "homepage"
        variants = {pageTransitionVariant}
        initial = "out"
        animate = "in"
        exit = "out"
        >
            <img src = {logo} alt = 'logo'/>
            <h1>Confirmed COVID-19 Cases</h1>
            <h2>SEARCH BY COUNTRY</h2>
            <Searchbar/>
        </motion.div>
    )
}

export default Homepage