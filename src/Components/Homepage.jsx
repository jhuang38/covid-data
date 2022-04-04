import Searchbutton from './Searchbutton';
import logo from '../assets/logo.png'
import { motion, AnimatePresence} from 'framer-motion';
import {pageTransitionVariant} from './animationVariants';
import Modal from './Modal';
import useModalToggle from './useModalToggle';

const Homepage = () => {
    const [modalOpen, open, close] = useModalToggle();
    return (
        <motion.div className = "homepage" variants = {pageTransitionVariant} initial = "out" animate = "in" exit = "out">
            <motion.img src = {logo} alt = 'logo' whileHover = {{scale: 1.05}} className = 'homeimage'/>
            <motion.h1 whileHover = {{scale: 1.05}}>COVID-19 DATA</motion.h1 >
            <motion.h2 whileHover = {{scale: 1.05}}>SEARCH BY COUNTRY</motion.h2>
            <Searchbutton onClick = {open}/>
            <AnimatePresence initial = {false} exitBeforeEnter = {true}>
            {modalOpen && <Modal handleClose = {close}/>}
            </AnimatePresence>
        </motion.div>
    )
}

export default Homepage