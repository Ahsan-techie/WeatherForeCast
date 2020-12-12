import React, { Component } from 'react'
import {connect} from 'react-redux'
import './style.css'
import _ from 'lodash'
import  {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines'
import GoogleMap from './Google_map'

class WeatherList extends Component {
    renderWeather=(cityData)=>{
        const name = cityData.city.name
        const temps = _.map(cityData.list.map(weather=>weather.main.temp),temp=>temp-273)
        const feels_like = _.map(cityData.list.map(weather=>weather.main.feels_like),temp=>temp-273)
        const humidities = cityData.list.map(weather=>weather.main.humidity)
        const lon = cityData.city.coord.lon
        const lat = cityData.city.coord.lat
        

        const average=data=>{
            return  _.round(_.sum(data)/data.length)
        }
        return (
            <tr key={name}>
                <td> {name}
                </td>
                <td>
                    <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color='red'/>
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <div>{average(temps)}°C</div>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={feels_like}>
                        <SparklinesLine color='blue'/>
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <div>{average(feels_like)}°C</div>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={humidities}>
                        <SparklinesLine color='orange'/>
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <div>{average(humidities)} %</div>
                </td>
            </tr>
        )
    }
    render() {
        
        return (
            <table  className='table table-striped table-success table-bordered'>
               <thead>
                   <tr>
                       <th>City</th>
                       <th>Temperature(°C)</th>
                       <th>Feels Like(°C)</th>
                       <th>Humidity(%)</th>
                   </tr>
               </thead>
               <tbody>
                    {this.props.weather.map(this.renderWeather)}
               </tbody>
                
            </table>
        )
    }
}
const mapStateToProps=state=>{
    return {weather:state.weather}
}

export default connect(mapStateToProps)(WeatherList)
