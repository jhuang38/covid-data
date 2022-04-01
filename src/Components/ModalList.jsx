import {AnimatePresence, motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Loader from './Loader';
import {modalDisplayCountry} from './helperfuncs';
import { modalListVariant } from './animationVariants';

const ModalList = () => {
    let navigate = useNavigate();
    const [countryList, setCountryList] = useState([]);
    useEffect(() => {
        fetch('https://covid-api.mmediagroup.fr/v1/history?status=deaths', {mode: 'cors'})
            .then(fetchresponse => {
                return fetchresponse.json()
            })
            .then(jsonresponse => {
                return Object.keys(jsonresponse);
            })
            .then(countrylist => {
                setCountryList(countrylist);
            })
    }, []);

    const itemClick = (e) => {
        navigate(`/graph/${e.target.textContent}`);
    }

    return (
        <div className = 'modal-list' style = {(countryList.length === 0)? {'overflow-y': 'hidden'} : {'overflow-y': 'scroll'}}>
            {
                (countryList.length === 0)?
                <Loader/>:
                <ul>
                    {
                    <AnimatePresence exitBeforeEnter>
                        {countryList.map(country => {
                        return <motion.li
                        key = {country}
                        variants = {modalListVariant}
                        initial = 'initial'
                        whileInView = 'animate'
                        exit = 'exit'
                        whileHover = {{x: 20}}
                        onClick = {itemClick}
                        >{modalDisplayCountry(country)}</motion.li>
                        })
                        }  
                    </AnimatePresence>
                    
                }
                </ul>
            }
        </div>
    );
}

export default ModalList;