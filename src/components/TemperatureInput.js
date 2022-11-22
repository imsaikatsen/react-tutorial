import React from 'react';

const scaleNames = {
    
    c: 'Celsius',
    f: 'Faerenheit',

};

export default function TemperatureInput({temperature,scale,onTempretureChange}) {
   
    return(
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input type="text" value={temperature} onChange={(e) => onTempretureChange(e,scale)}/>
    </fieldset>
    )
}