import page404logo from '../assets/404page.png';
import {motion} from 'framer-motion';
import { buttonvariant, pageTransitionVariant } from './animationVariants';
import { useNavigate } from 'react-router-dom';

const MissingContent = () => {
    let navigate = useNavigate();
    const homeButtonClick = () => navigate('/');

    return (
        <motion.div className = 'page404' variants = {pageTransitionVariant} initial = 'out' animate = 'in' exit = 'out'>
            <img src={page404logo} alt="404" />
            <h1>Page not Found</h1>
            <p>
                The requested content was not found. Please navigate to the root directory,
                unless you just want to vibe here :)
            </p>
            <motion.button className = 'primary-button'
            variants = {buttonvariant}
            whileHover = 'hover'
            whileTap = 'click'
            onClick = {homeButtonClick}
            >Home</motion.button>
        </motion.div>
    );
}

export default MissingContent