import React, { useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '.././api';

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () =>{
            setFetchedCountries(await fetchCountries());
    
        }
        fetchAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries);

    return(
        <div>
            <FormControl className={styles.FormControl}>
                <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value) }>
                    <option value="">Global</option>
                    {fetchedCountries.map(
                        (country, index) => 
                        <option value={country} key={index}>{country}</option>
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default CountryPicker;