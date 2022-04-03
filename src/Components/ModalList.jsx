import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Loader from './Loader';
import {modalDisplayCountry} from './helperfuncs';
import { modalListVariant } from './animationVariants';

const ModalList = ({searchtext}) => {
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

    const filterSearch = (country) => {
        if (!searchtext) {
            return true;
        }
        const regex = new RegExp(searchtext, 'gi');
        return country.match(regex);
    }

    return (
        <div className = 'modal-list' style = {(countryList.length === 0)? {'overflow-y': 'hidden'} : {'overflow-y': 'scroll'}}>
            {
                (countryList.length === 0)?
                <Loader/>:
                <ul>
                {
                    countryList.filter(filterSearch).map(country => {
                        return <motion.li   
                        className = 'search-result'
                        key = {country}
                        variants = {modalListVariant}
                        initial = 'initial'
                        whileInView = 'animate'
                        exit = 'exit'
                        whileHover = {{x: 15}}
                        onClick = {itemClick}
                        >{modalDisplayCountry(country)}</motion.li>
                    })
                }
                </ul>
            }
        </div>
    );
}

export default ModalList;