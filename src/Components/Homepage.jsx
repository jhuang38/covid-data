import Searchbar from './Searchbar';
import logo from '../assets/logo.png'
import { motion, AnimatePresence} from 'framer-motion';
import {pageTransitionVariant, hoverVariant2} from './animationVariants';
import { useState } from 'react';
import Modal from './Modal';

const Homepage = () => {
    const [modalOpen, setModalState] = useState(false);
    const open = () => {
        setModalState(true);
    }
    const close = () => {
        setModalState(false);
    }
    return (
        <motion.div className = "homepage" variants = {pageTransitionVariant} initial = "out" animate = "in" exit = "out">
            <motion.img src = {logo} alt = 'logo' variants = {hoverVariant2} whileHover = 'hover' className = 'homeimage'/>
            <motion.h1 variants = {hoverVariant2} whileHover = 'hover'>COVID-19 DATA</motion.h1 >
            <motion.h2 variants = {hoverVariant2} whileHover = 'hover'>SEARCH BY COUNTRY</motion.h2>
            <Searchbar onClick = {open}/>
            <AnimatePresence initial = {false} exitBeforeEnter = {true}>
            {modalOpen && <Modal handleClose = {close}/>}
            </AnimatePresence>
        </motion.div>
    )
}

export default Homepage