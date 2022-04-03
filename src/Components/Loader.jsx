import { motion } from "framer-motion";
import { loaderVariant } from "./animationVariants";

const Loader = () => {
    return (
        <div className = 'loader-container'>
            <h3>Loading...</h3>
            <div className = 'circle-container'>  
                <motion.span className = 'circle-loader'
                variants = {loaderVariant}
                animate = 'animate'
                transition = {loaderVariant.transition}
                ></motion.span>
            </div>
        </div>
    );
}

export default Loader