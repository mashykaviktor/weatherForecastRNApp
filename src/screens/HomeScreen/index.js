import React, {useState, useEffect, useRef, useId} from 'react';

// import {useRoute} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

import {
  fetchWeatherByLocation,
  fetchCoordinatesByCityName,
  fetchForecastByLocation,
} from '../../apis/api';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const initialState = {
  id: '',
  location: {lat: 51.5073219, lon: -0.1276474}, // coord London by default
  title: '',
};

const currentLocationValidationSchema = Yup.object().shape({
  inputCurrentLocation: Yup.string()
    .required('Title is required')
    .min(4, 'Title must be at least 4 characters'),
});

const favoriteLocationValidationSchema = Yup.object().shape({
  inputFavoriteLocation: Yup.string()
    .required('Title is required')
    .min(4, 'Title must be at least 4 characters'),
});
const HomeScreen = props => {
  // console.log('props: ', props);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [favoriteLocationsData, setFavoriteLocationsData] = useState([]);
  const [currentLocationData, setCurrentLocationData] = useState(initialState);
  const [inputCurrentLocation, setInputCurrentLocation] = useState('');
  const [inputFavoriteLocation, setInputFavoriteLocation] = useState('');

  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const day = date.getDate(); // Day of the month (e.g., 1, 2, 3, ..., 31)
  const month = date.getMonth() + 1; // Month (e.g., 1 for January, 2 for February, ..., 12 for December)
  const year = date.getFullYear(); // Full 4-digit year (e.g., 2023)

  useEffect(() => {
    let coord = currentLocationData.location;
    const getWeatherByLocation = async coord => {
      try {
        setIsLoading(true);
        const result = await fetchWeatherByLocation(
          // controller.signal,
          coord,
        );
        console.log('result of getWeatherByLocation: ', result);
        setWeather(result);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getWeatherByLocation(coord);
  }, []);

  useEffect(() => {
    // LocationHelper.checkLocationPermission(
    //   () => {
    //     LocationHelper.trackUserLocation(
    //       locationObject => {
    //         setLocationObject(locationObject);
    //         console.log('AddLocationsScreen=>locationObject: ', locationObject);
    //       },
    //       error => {},
    //     );
    //   },
    //   () => {},
    // );
  }, []);

  const handleCurrentLocationSubmit = () => {
    currentLocationValidationSchema
      .validate({inputCurrentLocation}, {abortEarly: false})
      .then(() => {
        console.log('Form is valid');
        // Handle user form logic here
        if (!inputCurrentLocation) {
          return;
        }
        // find lat and lon for location data
        const controller = new AbortController();
        const getCoordinatesByCityName = async () => {
          try {
            setIsLoading(true);
            const result = await fetchCoordinatesByCityName(
              inputCurrentLocation,
            );
            // console.log(
            //   'result of getCoordinatesByCityName in handle: ',
            //   result,
            // );
            const lat = result[0]?.lat;
            const lon = result[0]?.lon;
            const location = {lat: lat, lon: lon};

            const newLocationRecord = {
              id: uuid.v4(),
              title: inputCurrentLocation,
              location: location,
            };

            setCurrentLocationData(newLocationRecord); // add current location to state
            setInputCurrentLocation('');
            // console.log(`location: ${location.lat}, ${location.lon}`);
            return location;
          } catch (error) {
            throw new Error(error);
          } finally {
            setIsLoading(false);
          }
        };

        const getWeatherByLocation = async data => {
          try {
            setIsLoading(true);
            const result = await fetchWeatherByLocation(
              // controller.signal,
              data,
            );
            // console.log('result of getWeatherByLocation: ', result);
            setWeather(result);
          } catch (error) {
            throw new Error(error);
          } finally {
            setIsLoading(false);
          }
        };

        getCoordinatesByCityName().then(data => {
          // console.log('data from getCoordinatesByCityName: ', data);
          getWeatherByLocation(data);
        });

        return () => {
          controller.abort();
        };
      })
      .catch(err => {
        const newErrors = {};
        err.inner.forEach(error => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  const handleFavoriteLocationSubmit = () => {
    favoriteLocationValidationSchema
      .validate({inputFavoriteLocation}, {abortEarly: false})
      .then(() => {
        console.log('Form is valid');
        // Handle user form logic here
        if (!inputFavoriteLocation) {
          return;
        }

        // find lat and lon for location data
        const controller = new AbortController();
        const getCoordinatesByCityName = async () => {
          try {
            setIsLoading(true);
            const result = await fetchCoordinatesByCityName(
              inputFavoriteLocation,
            );
            // console.log(
            //   'result of getCoordinatesByCityName in handle: ',
            //   result,
            // );
            const lat = result[0]?.lat;
            const lon = result[0]?.lon;
            const location = {lat: lat, lon: lon};

            if (
              !favoriteLocationsData.some(
                item => item.title === inputFavoriteLocation,
              )
            ) {
              const newLocationRecord = {
                id: uuid.v4(),
                title: inputFavoriteLocation,
                location: location,
              };

              setFavoriteLocationsData(prev => [...prev, newLocationRecord]);
            } else {
              console.log(
                'Title already exists in the favoriteLocationsData array',
              );
            }

            setInputFavoriteLocation('');
            // console.log(`location: ${location.lat}, ${location.lon}`);
            return location;
          } catch (error) {
            throw new Error(error);
          } finally {
            setIsLoading(false);
          }
        };

        const getWeatherByLocation = async data => {
          try {
            setIsLoading(true);
            const result = await fetchWeatherByLocation(data);
            // console.log('result of getWeatherByLocation: ', result);
            setWeather(result);
          } catch (error) {
            throw new Error(error);
          } finally {
            setIsLoading(false);
          }
        };

        getCoordinatesByCityName().then(data => {
          // console.log('data from getCoordinatesByCityName: ', data);
          getWeatherByLocation(data);
        });

        return () => {
          controller.abort();
        };
      })
      .catch(err => {
        const newErrors = {};
        err.inner.forEach(error => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  const handleForecastSubmit = coord => {
    const getForecastByLocation = async coord => {
      try {
        setIsLoading(true);
        const result = await fetchForecastByLocation(coord);
        // console.log('result of getForecastByLocation: ', result);
        props.navigation.navigate('Forecast', {result});
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getForecastByLocation(coord);
  };

  const handleSavedLocationSubmit = coord => {
    const getWeatherByLocation = async coord => {
      try {
        setIsLoading(true);
        const result = await fetchWeatherByLocation(
          // controller.signal,
          coord,
        );
        console.log('result of getWeatherByLocation: ', result);
        setWeather(result);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getWeatherByLocation(coord);
  };

  console.log('Home=>weather: ', weather);
  console.log('Home=>currentLocationData: ', currentLocationData);
  console.log('Home=>favoriteLocationsData: ', favoriteLocationsData);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>Add your current location</Text>
        <View style={{flex: 1}}>
          <TextInput
            style={styles.input}
            onChangeText={changeText => setInputCurrentLocation(changeText)}
            value={inputCurrentLocation}
            placeholder="Enter your current location..."
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={handleCurrentLocationSubmit}>
            <MaterialIcons name="search" size={30} color="#3E726E" />
          </TouchableOpacity>
          {errors.inputCurrentLocation && (
            <Text style={styles.error}>{errors.inputCurrentLocation}</Text>
          )}
        </View>
        <Text style={styles.text}>Add favorite location</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeText => setInputFavoriteLocation(changeText)}
          value={inputFavoriteLocation}
          placeholder="Enter city name, post code or address..."
        />
        {errors.inputFavoriteLocation && (
          <Text style={styles.error}>{errors.inputFavoriteLocation}</Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={handleFavoriteLocationSubmit}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={{flex: 1}}>
        {favoriteLocationsData &&
          favoriteLocationsData.length > 0 &&
          favoriteLocationsData.map((item, index) => {
            return (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    handleSavedLocationSubmit(item?.location);
                  }}>
                  <Text style={styles.text}>{item?.title} </Text>
                </TouchableOpacity>
              </View>
            );
          })}
      </ScrollView>
      {weather && weather !== null && (
        <View style={styles.container}>
          <Text style={styles.title}>{weather?.name ?? ''}</Text>
          <Text style={styles.title}>
            {`${year}-${month}-${day} ${hours}:${minutes}`}
          </Text>
          <Text style={styles.text}>{weather?.weather[0]?.main ?? ''}</Text>
          <Text style={styles.text}>
            Temperature: {weather?.main?.temp ?? ''}&#176;C
          </Text>
          <Text style={styles.text}>
            Wind speed: {weather?.wind?.speed ?? ''}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleForecastSubmit(weather?.coord);
            }}>
            <Text style={styles.text}>Forecast for next 5 days</Text>
            {/* <Text style={styles.text}>
              lat: {weather?.coord?.lat}, lon: {weather?.coord?.lon}
            </Text> */}
            {/* <MaterialCommunityIcons
              name="weather-partly-cloudy"
              size={30}
              color="#3E726E"
            /> */}
            {/* <MaterialCommunityIcons
              name="weather-cloudy-clock"
              size={30}
              color="#3E726E"
            /> */}
          </TouchableOpacity>
        </View>
      )}

      {isLoading && (
        <ActivityIndicator
          // animating={}
          hidesWhenStopped
          size={'large'}
        />
      )}
    </ScrollView>
  );
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;
