import React from 'react';
import BoilingVirdict from './BoilingVirdict';
import TemperatureInput from './TemperatureInput';
import { convert, toCelsius, toFahrenheit } from '../lib/converter';


export default class calculator extends React.Component {
    state = {temperature: '',scale: 'c'}
    handleChange = (e, scale) => {

        this.setState({
            temperature: e.target.value,
            scale
        })
    }
    render () {
        const {temperature,scale} = this.state;
        const celsius = scale === 'f' ?  convert(temperature,toCelsius) : temperature;
        const fahrenheit = scale === 'c' ?  convert(temperature,toFahrenheit ) : temperature;
        return(
        <div>
            <TemperatureInput scale="c" temperature={celsius} onTempretureChange={this.handleChange}/>
            <TemperatureInput scale="f" temperature={fahrenheit} onTempretureChange={this.handleChange}/>
            <BoilingVirdict  celsius={parseFloat(temperature)}/>
        </div>
        )
    }
}