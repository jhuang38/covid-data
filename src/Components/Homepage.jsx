import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Searchbar from './Searchbar';

const Homepage = () => {
    return (
        <div>
            Covid-19 Data by Country
            <Searchbar/>
        </div>
    )
}

export default Homepage