import axios from 'axios';
import {API_KEY} from './api_config';

// let lat = 44.34;

// let lon = 10.99;

let location = 'Aviemore'; // {city name},{state code},{country code}

let limit = 5; // {limit}

axios.defaults.baseURL = 'https://api.openweathermap.org';

const BASE_URL = 'https://api.openweathermap.org';

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const testApi = `http://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=9e89426787a635f53a92e0083ea0754f`;

// export const fetchWeatherByLocation = async ({signal}) => {
//   const url = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
//   try {
//     const response = await axios.get(url, {signal: signal});
//     const weatherByLocation = response.data;
//     console.log('weatherByLocation: ', weatherByLocation);
//     return weatherByLocation;
//   } catch (error) {
//     if (axios.isCancel(error)) {
//       return [];
//     }
//     throw new Error(error);
//   }
// };

export const fetchWeatherByLocation = async data => {
  console.log('data in api fetchWeatherByLocation: ', data);
  const url = `/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const weatherByLocation = response.data;
    console.log('weatherByLocation: ', weatherByLocation);
    return weatherByLocation;
  } catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }
    throw new Error(error);
  }
};

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

export const fetchCoordinatesLondon = async ({signal}) => {
  const url = `/geo/1.0/direct?q=London&limit=${limit}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url, {signal: signal});
    const coordinatesLondon = response.data;
    console.log('coordinatesLondon: ', coordinatesLondon);
    return coordinatesLondon;
  } catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }
    throw new Error(error);
  }
};

export const fetchCoordinatesByCityName = async ({signal}) => {
  const url = `/geo/1.0/direct?q=${location}&limit=${limit}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url, {signal: signal});
    const coordinatesByCityName = response.data;
    console.log('coordinatesByCityName: ', coordinatesByCityName);
    return coordinatesByCityName;
  } catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }
    throw new Error(error);
  }
};

// http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export const fetchForecastByLocation = async ({signal}) => {
  const url = `/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url, {signal: signal});
    const forecastByLocation = response.data;
    console.log('forecastByLocation: ', forecastByLocation);
    return forecastByLocation;
  } catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }
    throw new Error(error);
  }
};
