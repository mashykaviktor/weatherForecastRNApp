import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  ScrollView,
} from 'react-native';

import styles from './styles';

const ForecastScreen = props => {
  // console.log('ForecastScreen props: ', props);

  const {result} = props?.route?.params;

  // console.log('result in ForecastScreen: ', result);
  // useEffect(() => {}, []);

  return (
    <ScrollView style={{flex: 1}}>
      <Text style={styles.title}>{result?.city?.name ?? ''}</Text>
      <Text style={styles.title}>{result?.list[0]?.dt_txt ?? ''}</Text>
      <Text style={styles.text}>
        Temperature: {result?.list[0]?.main?.temp ?? ''}&#176;C
      </Text>
      <Text style={styles.text}>
        {result?.list[0]?.weather[0]?.main ?? ''}
        {': '}
        {result?.list[0]?.weather[0]?.description ?? ''}
      </Text>

      <Text style={styles.title}>{result?.list[8]?.dt_txt ?? ''}</Text>
      <Text style={styles.text}>{result?.list[8]?.main?.temp ?? ''}</Text>
      <Text style={styles.text}>{result?.list[8]?.weather[0]?.main ?? ''}</Text>
      <Text style={styles.text}>
        {result?.list[8]?.weather[0]?.description ?? ''}
      </Text>

      <Text style={styles.title}>{result?.list[16]?.dt_txt ?? ''}</Text>
      <Text style={styles.text}>{result?.list[16]?.main?.temp ?? ''}</Text>
      <Text style={styles.text}>
        {result?.list[16]?.weather[0]?.main ?? ''}
      </Text>
      <Text style={styles.text}>
        {result?.list[16]?.weather[0]?.description ?? ''}
      </Text>

      <Text style={styles.title}>{result?.list[24]?.dt_txt ?? ''}</Text>
      <Text style={styles.text}>{result?.list[24]?.main?.temp ?? ''}</Text>
      <Text style={styles.text}>
        {result?.list[24]?.weather[0]?.main ?? ''}
      </Text>
      <Text style={styles.text}>
        {result?.list[24]?.weather[0]?.description ?? ''}
      </Text>

      <Text style={styles.title}>{result?.list[32]?.dt_txt ?? ''}</Text>
      <Text style={styles.text}>{result?.list[32]?.main?.temp ?? ''}</Text>
      <Text style={styles.text}>
        {result?.list[32]?.weather[0]?.main ?? ''}
      </Text>
      <Text style={styles.text}>
        {result?.list[32]?.weather[0]?.description ?? ''}
      </Text>

      <Text style={styles.title}>{result?.list[40]?.dt_txt ?? ''}</Text>
      <Text style={styles.text}>{result?.list[40]?.main?.temp ?? ''}</Text>
      <Text style={styles.text}>
        {result?.list[40]?.weather[0]?.main ?? ''}
      </Text>
      <Text style={styles.text}>
        {result?.list[40]?.weather[0]?.description ?? ''}
      </Text>
    </ScrollView>
  );
};

ForecastScreen.propTypes = {};

ForecastScreen.defaultProps = {};

export default ForecastScreen;
