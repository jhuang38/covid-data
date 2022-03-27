import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = ({styling}) => {
    let navigate = useNavigate();
    const [countryFormText, updateCountryForm] = useState('')
    const formSubmit = (e) => {
        e.preventDefault()
        navigate(`/graph/${countryFormText}`)
    }
    const textChange = (e) => {
        updateCountryForm(e.target.value)
    }
    return (
        <form onSubmit = {formSubmit} className = {`searchbar`}>
            <input type="text" name="country" onChange = {textChange} placeholder = 'Country' className = 'searchbar-text' required aria-label = 'search'/>
            <button type="submit" className = 'submit' aria-label = 'submit search'>
                <FontAwesomeIcon icon = {faSearch}/>
            </button>
        </form>
    )
}

export default Searchbar