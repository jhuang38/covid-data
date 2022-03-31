import {motion} from 'framer-motion';
import Backdrop from './Backdrop';
import {dropinVariant} from './animationVariants'

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
                <h1>Hi there</h1>

            </motion.div>
        </Backdrop>
    );
};

export default Modal;