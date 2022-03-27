import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Searchbar from './Searchbar';
import logo from '../assets/logo.png'

const Homepage = () => {
    return (
        <div className = "homepage">
            <img src = {logo} alt = 'logo'/>
            <h1>Confirmed COVID-19 Cases</h1>
            <h2>SEARCH BY COUNTRY</h2>
            <Searchbar/>
        </div>
    )
}

export default Homepage