import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Searchbar from "./Searchbar"
import Graph from './Graph';
import { capitalizeString } from './helperfuncs';

const Graphpage = () => {
    let urlParams = useParams();
    const [country, setCountry] = useState(capitalizeString(urlParams.country));
    useEffect(() => {
        setCountry(urlParams.country)
    }, [urlParams.country])


    return (
        <div className = 'graphpage'>
            <h2>{country}</h2>
            <Searchbar styling = {'graphpage'}/>
            <div className = "graph-container">
                <Graph dataurl = {`https://covid-api.mmediagroup.fr/v1/history?country=${country}&status=confirmed`} datatype = {'Total Confirmed Cases'} countrySelect = {country} colour = {'#ff6384'}/>
                {// <Graph dataurl = {`https://covid-api.mmediagroup.fr/v1/history?country=${country}&status=deaths`} datatype = {'Deaths'} countrySelect = {country} colour = {'#777777'}/>
                }
            </div>
            
        </div>

        
    )
}

export default Graphpage