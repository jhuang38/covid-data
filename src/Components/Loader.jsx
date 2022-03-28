import { motion } from "framer-motion";
import { loaderVariant } from "./animationVariants";

const Loader = () => {
    return (
        <div className = 'loaderContainer'>
            <h3>Loading...</h3>
            <div className = 'circleContainer'>  
                <motion.span className = 'circleLoader'
                variants = {loaderVariant}
                animate = 'animate'
                transition = {loaderVariant.transition}
                ></motion.span>
            </div>
        </div>
        
    );
}

export default Loader