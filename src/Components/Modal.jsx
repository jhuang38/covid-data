import {motion} from 'framer-motion';
import Backdrop from './Backdrop';
import {dropinVariant} from './animationVariants'
import ModalList from './ModalList';

const Modal = ({handleClose}) => {
    const modalClick = (e) => {
        e.stopPropagation();

    }
    return (
        <Backdrop onClick = {handleClose}>
            <motion.div onClick = {modalClick} className = 'modal'
            variants = {dropinVariant}
            initial = 'hidden'
            animate = 'visible'
            exit = 'exit'
            >
                <h1>Supported Locations</h1>
                <ModalList/>

            </motion.div>
        </Backdrop>
    );
};

export default Modal;