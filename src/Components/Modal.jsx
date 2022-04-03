import {motion} from 'framer-motion';
import Backdrop from './Backdrop';
import {dropinVariant} from './animationVariants'
import ModalList from './ModalList';
import { useState } from 'react';

const Modal = ({handleClose}) => {
    const [countrySearchText, setSearchText] = useState('');
    const modalClick = (e) => e.stopPropagation();
    const updateSearchText = (e) => setSearchText(e.target.value);
    
    return (
        <Backdrop onClick = {handleClose}>
            <motion.div onClick = {modalClick} className = 'modal'
            variants = {dropinVariant}
            initial = 'hidden'
            animate = 'visible'
            exit = 'exit'
            >
                <h1>Supported Locations</h1>
                <input type="text" className = 'search' placeholder='Search' onChange = {updateSearchText}/>
                <ModalList searchtext = {countrySearchText}/>
            </motion.div>
        </Backdrop>
    );
};

export default Modal;