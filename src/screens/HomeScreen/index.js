import React, {useState, useEffect, useRef, useId} from 'react';

import {useRoute} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';

import {
  fetchCoordinatesLondon,
  fetchWeatherByLocation,
  fetchCoordinatesByCityName,
} from '../../apis/api';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const initialState = {id: '', location: {lat: 0, lon: 0}, title: ''};

// const validationSchema = Yup.object().shape({
//   title: Yup.string()
//     .required('Title is required')
//     .min(4, 'Title must be at least 4 characters'),
// });

// const emailValidationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Email is required'),
// });

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
  console.log('props: ', props);
  const [locationData, setLocationData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [locationObject, setLocationObject] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [favoriteLocationsData, setFavoriteLocationsData] = useState([]);
  const [currentLocationData, setCurrentLocationData] = useState(initialState);
  const [inputCurrentLocation, setInputCurrentLocation] = useState('');
  const [inputFavoriteLocation, setInputFavoriteLocation] = useState([]);

  const date = new Date();

  const day = date.getDate(); // Day of the month (e.g., 1, 2, 3, ..., 31)
  const month = date.getMonth() + 1; // Month (e.g., 1 for January, 2 for February, ..., 12 for December)
  const year = date.getFullYear(); // Full 4-digit year (e.g., 2023)

  // const [searchParams] = useSearchParams();
  const route = useRoute();
  // const {myParam} = route?.params;
  // const address = searchParams.get('query') ?? ''; // remove
  // const address = myParam.get('query') ?? '';
  // const location = useLocation(); // remove

  useEffect(() => {
    const controller = new AbortController();
    const getWeatherByLocation = async () => {
      try {
        setIsLoading(true);
        const result = await fetchWeatherByLocation(controller.signal);
        console.log('result of getWeatherByLocation: ', result);
        setWeather(result);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getWeatherByLocation();

    return () => {
      controller.abort();
    };
  }, []);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const getCoordinatesLondon = async () => {
  //     try {
  //       setIsLoading(true);
  //       const result = await fetchCoordinatesLondon(controller.signal);
  //       console.log('result of getCoordinatesLondon: ', result);
  //       setFavoriteLocationsData(result);
  //     } catch (error) {
  //       throw new Error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getCoordinatesLondon();

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!address) {
  //     return;
  //   }

  //   const getWeatherByLocation = async () => {
  //     try {
  //       setIsLoading(true);
  //       const result = await fetchWeatherByLocation({
  //         query: address,
  //       });
  //       setWeather(result);
  //     } catch (error) {
  //       throw new Error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getWeatherByLocation();
  // }, [address]);

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
        // const getWeatherByLocation = async () => {
        //   try {
        //     setIsLoading(true);
        //     const result = await fetchWeatherByLocation({
        //       query: inputCurrentLocation,
        //     });
        //     setWeather(result);
        //   } catch (error) {
        //     throw new Error(error);
        //   } finally {
        //     setIsLoading(false);
        //   }
        // };
        // getWeatherByLocation();
        const controller = new AbortController();
        const getCoordinatesLondon = async () => {
          try {
            setIsLoading(true);
            const result = await fetchCoordinatesLondon(controller.signal);
            console.log('result of getCoordinatesLondon in handle: ', result);
            // const location = {
            //   lat: await result[0]?.lat,
            //   lon: await result[0]?.lon,
            // };
            const lat = result[0]?.lat;
            const lon = result[0]?.lon;
            const location = {lat: lat, lon: lon};

            // setCurrentLocationData();
            // console.log(`lat: ${lat}, lon: ${lon}`);
            console.log(`location: ${location.lat}, ${location.lon}`);
            return location;
          } catch (error) {
            throw new Error(error);
          } finally {
            setIsLoading(false);
          }
        };
        // getCoordinatesLondon();

        const getWeatherByLocation = async data => {
          try {
            setIsLoading(true);
            const result = await fetchWeatherByLocation(
              // controller.signal,
              data,
            );
            console.log('result of getWeatherByLocation: ', result);
            setWeather(result);
          } catch (error) {
            throw new Error(error);
          } finally {
            setIsLoading(false);
          }
        };
        // getWeatherByLocation();

        getCoordinatesLondon().then(data => {
          console.log('data from getCoordinatesLondon: ', data);
          getWeatherByLocation(data);
        });

        return () => {
          controller.abort();
        };

        // add new current location to currentLocationData

        // const newCurrentLocationRecord = {
        //   id: uuid.v4(),
        //   title: inputCurrentLocation,
        //   location: currentLocationData.location,
        // };
        // setCurrentLocationData(newCurrentLocationRecord);

        //add new location to firestore
        // const newLocationRecord = {
        //   uid: uid,
        //   title: locationData.title,
        //   location: locationData.location,
        // };
        // firestore()
        //   .collection('viktorAppLocations')
        //   .add(newLocationRecord)
        //   .then(() => {
        //     console.log('Location added!');
        //     console.log('newLocationRecord', newLocationRecord);
        //   });
        // setLocationData(initialState);

        // props.navigation.navigate('My Locations');

        // return subscriber;
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

        //add new location to firestore
        // const newLocationRecord = {
        //   uid: uid,
        //   title: locationData.title,
        //   location: locationData.location,
        // };
        // firestore()
        //   .collection('viktorAppLocations')
        //   .add(newLocationRecord)
        //   .then(() => {
        //     console.log('Location added!');
        //     console.log('newLocationRecord', newLocationRecord);
        //   });
        // setLocationData(initialState);

        // props.navigation.navigate('My Locations');

        // return subscriber;
      })
      .catch(err => {
        const newErrors = {};
        err.inner.forEach(error => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  console.log('Home=>weather: ', weather);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{marginHorizontal: 15, marginTop: 10}}
          onPress={() => {
            props.navigation.navigate('Forecast');
          }}>
          <Text>Go to Forecast</Text>
          <MaterialCommunityIcons
            name="weather-partly-cloudy"
            size={30}
            color="#3E726E"
          />
          <MaterialCommunityIcons
            name="weather-cloudy-clock"
            size={30}
            color="#3E726E"
          />
        </TouchableOpacity>
        <Text style={styles.text}>Add your current location</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeText => setInputCurrentLocation(changeText)}
          value={inputCurrentLocation}
          placeholder="Enter your current location..."
        />
        {errors.inputCurrentLocation && (
          <Text style={styles.error}>{errors.inputCurrentLocation}</Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={handleCurrentLocationSubmit}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Add favorite location</Text>
        <TextInput
          style={styles.input}
          // onChangeText={changeText =>
          //   setUserFavoriteLocations(prevState => {
          //     return {...prevState, title: changeText};
          //   })
          // }
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
      {currentLocationData && (
        <View style={styles.container}>
          <Text style={styles.title}>
            My current location: {currentLocationData?.title}
          </Text>
        </View>
      )}
      <Text style={styles.title}>My favorite locations</Text>
      <ScrollView horizontal style={{flex: 1}}>
        {favoriteLocationsData &&
          favoriteLocationsData.length > 0 &&
          favoriteLocationsData.map((item, index) => {
            return (
              <View style={styles.container}>
                <Text style={styles.text}>{item?._data?.title}</Text>
              </View>
            );
          })}
      </ScrollView>
      {weather && weather !== null && (
        <View style={styles.container}>
          <Text style={styles.text}>
            Weather now: {day} / {month} / {year}
          </Text>
          <Text style={styles.text}>Location: {weather?.name ?? ''}</Text>
          <Text style={styles.text}>
            Description: {weather?.weather[0]?.main ?? ''}
          </Text>
          <Text style={styles.text}>
            Temperature: {weather?.main?.temp ?? ''}
          </Text>
          <Text style={styles.text}>
            Wind speed: {weather?.wind?.speed ?? ''}
          </Text>
        </View>
      )}

      <ActivityIndicator
        // animating={}
        hidesWhenStopped
        size={'large'}
      />
    </ScrollView>
  );
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;
