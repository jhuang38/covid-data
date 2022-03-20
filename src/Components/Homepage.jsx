import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Homepage = () => {
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
        <div>
            Covid-19 Data by Country
            <form onSubmit = {formSubmit}>
                <input type="text" name="country" onChange = {textChange}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Homepage