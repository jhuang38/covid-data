import Searchbar from './Searchbar';
import logo from '../assets/logo.png'
import { motion } from 'framer-motion';
import {pageTransitionVariant, hoverVariant2} from './animationVariants';

const Homepage = () => {
    return (
        <motion.div className = "homepage" variants = {pageTransitionVariant} initial = "out" animate = "in" exit = "out">
            <motion.img src = {logo} alt = 'logo' variants = {hoverVariant2} whileHover = 'hover'/>
            <motion.h1 variants = {hoverVariant2} whileHover = 'hover'>COVID-19 DATA</motion.h1 >
            <motion.h2 variants = {hoverVariant2} whileHover = 'hover'>SEARCH BY COUNTRY</motion.h2>
            <Searchbar/>
        </motion.div>
    )
}

export default Homepage