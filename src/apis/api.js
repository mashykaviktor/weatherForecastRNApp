import axios from 'axios';
import {API_KEY} from './api_config';

let limit = 5; // {limit}

axios.defaults.baseURL = 'https://api.openweathermap.org';

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

export const fetchWeatherByLocation = async data => {
  const url = `/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    const weatherByLocation = response.data;
    return weatherByLocation;
  } catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }
    throw new Error(error);
  }
};

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

export const fetchCoordinatesByCityName = async location => {
  const url = `/geo/1.0/direct?q=${location}&limit=${limit}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const coordinatesByCityName = response.data;
    return coordinatesByCityName;
  } catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }
    throw new Error(error);
  }
};

// http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export const fetchForecastByLocation = async coord => {
  const url = `/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    const forecastByLocation = response.data;
    return forecastByLocation;
  } catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }
    throw new Error(error);
  }
};
