import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import capitalizeString from './capitalizeString'
import parseDates from './dateObjectParser'

const Graphs = () => {
    let urlParams = useParams();
    const [country, setCountry] = useState(urlParams.country);
    const [countryDates, setCountryDates] = useState([]);
    const [countryCases, setCountryCases] = useState([]);
    useEffect(() => {
        fetch(`https://covid-api.mmediagroup.fr/v1/history?country=${capitalizeString(country)}&status=confirmed`, {mode: 'cors'})
            .then(data => {
                return data.json()
            })
            .then(data => {
                console.log(data.All.dates)
                return parseDates(data.All.dates)
            })
            .then(data => {
                console.log(data)
                setCountryDates(Object.keys(data))
                setCountryCases(Object.values(data))
            })
    }, [country])
    
    return (
       <div>
           Country URL: {urlParams.country}
           {
               countryCases.map(value => {
                   return (
                       <div>
                           {value}
                        </div>
                   )
               })
           }
       </div>
    );
}

export default Graphs