import axios from 'axios'
const API_KEY = 'cc3e79cc448243460f584224d919feb3'
const Root_URL = `http://api.openweathermap.org/data/2.5/forecast/?appid=${API_KEY}`

export const FetchWeather=(city)=>{
    const url = `${Root_URL}&q=${city}`
    const request = axios.get(url)
  return{
      type:'FETCH_WEATHER',
      payload:request

  }
}