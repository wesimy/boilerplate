import { request } from '../../utils'

const WeatherService = {}
/*
  [NOTE] - OpenWeatherMap api has a limit of 60 requests per minute.
  https://openweathermap.org/price
*/
WeatherService.getWeather = (coord) => {
  return request({
    baseURL: 'http://api.openweathermap.org/data/2.5/',
    url: `weather?lat=${coord.lat}&lon=${coord.lng}&units=metric&appid=7cc1fa42b5d409b904ba95767ca88f1f`,
    method: 'GET'
  })
}

export default WeatherService