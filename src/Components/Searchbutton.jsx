import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { hoverVariant2 } from './animationVariants';

const Searchbutton = ({onClick}) => {
    return (
        <>
            <motion.button type="submit" className = 'submit' aria-label = 'submit search'
            variants = {hoverVariant2}
            whileHover = 'chover'
            whileFocus = 'chover'
            animate = {{scale: 1.05}}
            whileTap = 'tap'
            onClick = {onClick}
            >
                <FontAwesomeIcon icon = {faSearch}/>
            </motion.button>
        </>
    )
}

export default Searchbutton