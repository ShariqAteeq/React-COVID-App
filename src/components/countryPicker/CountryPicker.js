import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

function CountryPicker( {changeCountryHandler} ) {

    const [ctries, setCtries] = useState([]);

    useEffect(() => {
        const fetchCtr = async () => {
            setCtries(await fetchCountries());
        }
        fetchCtr();
    }, [setCtries]);

    return (
        <div className="countryPicker">
            <FormControl>
                <NativeSelect defaultValue = "" onChange = {(e) => changeCountryHandler(e.target.value)}>
                    <option value="global">global</option>
                    {ctries.map((ctry, i) => <option value={ctry} key={i}>{ctry}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
