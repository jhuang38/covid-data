import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { hoverVariant2 } from './animationVariants';

const Searchbar = ({styling}) => {
    let navigate = useNavigate();
    const countryFormInput = useRef();
    const formSubmit = (e) => {
        e.preventDefault();
        navigate(`/graph/${countryFormInput.current.value}`);
    }
    return (
        <form onSubmit = {formSubmit} className = {`searchbar`}>
            <input type="text" name="country" placeholder = 'Country' className = 'searchbar-text' required aria-label = 'search' ref = {countryFormInput}/>
            <motion.button type="submit" className = 'submit' aria-label = 'submit search'
            variants = {hoverVariant2}
            whileHover = 'hover'
            >
                <FontAwesomeIcon icon = {faSearch}/>
            </motion.button>
        </form>
    )
}

export default Searchbar