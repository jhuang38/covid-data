import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

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
        <form onSubmit = {formSubmit}>
            <input type="text" name="country" onChange = {textChange}/>
            <button type="submit"><ion-icon name="search-outline"/></button>
        </form>
    )
}

export default Searchbar