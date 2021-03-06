import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Loader from './Loader';
import {modalDisplayCountry} from './helperfuncs';
import {fadeinout} from './animationVariants';

const ModalList = ({searchtext}) => {
    let navigate = useNavigate();
    const [countryList, setCountryList] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('stored_countrylist')) {
            setCountryList(localStorage.getItem('stored_countrylist').split(','));
        } else {
            fetch('https://covid-api.mmediagroup.fr/v1/history?status=deaths', {mode: 'cors'})
            .then(fetchresponse => {return fetchresponse.json()})
            .then(jsonresponse => {return Object.keys(jsonresponse)})
            .then(countrylist => {
                setCountryList(countrylist);
                localStorage.setItem('stored_countrylist', countrylist.map(modalDisplayCountry))
            })
        }
    }, []);

    const itemClick = (e) => navigate(`/graph/${e.target.textContent}`);

    const filterSearch = (country) => {
        if (!searchtext) return true;
        const searchbar_text = new RegExp(String(searchtext), 'gi');
        return country.match(searchbar_text);
    }

    return (
        <div className = 'modal-list' style = {(countryList.length === 0)? {'overflowY': 'hidden'} : {'overflowY': 'scroll'}}>
            {
                (countryList.length === 0)?
                <Loader/>:
                <ul>
                {
                    countryList.filter(filterSearch).map(country => {
                        return <motion.li   
                        className = 'search-result'
                        key = {country}
                        variants = {fadeinout}
                        initial = 'out'
                        whileInView = 'in'
                        exit = 'out'
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