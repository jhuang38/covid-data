import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { hoverVariant2 } from './animationVariants';

const Searchbar = ({onClick}) => {
    return (
        <>
            <motion.button type="submit" className = 'submit' aria-label = 'submit search'
            variants = {hoverVariant2}
            whileHover = 'chover'
            whileFocus = 'chover'
            animate = {{
                color: '#000000',
                backgroundColor: 'rgb(136, 201, 249)',
                scale: 1.10
            }}
            whileTap = 'tap'
            onClick = {onClick}
            >
                <FontAwesomeIcon icon = {faSearch}/>
            </motion.button>
        </>

    )
}

export default Searchbar