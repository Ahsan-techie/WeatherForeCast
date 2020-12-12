import React, { Component } from 'react'
import SearchBar from './SearchBar'
import WeatherList from './weatherList'
class App extends Component {
    render() {
        return (
            <div style={{margin:'15px 30px 10px 30px'}}>
                <SearchBar />
                <WeatherList  />
            </div>
        )
    }
}

export default App
