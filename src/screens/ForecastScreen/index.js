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

  console.log('result in ForecastScreen: ', result);
  // useEffect(() => {}, []);

  return (
    <ScrollView style={{flex: 1}}>
      <Text style={styles.title}>{result?.city?.name ?? ''}</Text>

      <Text style={styles.title}>
        {result?.list[0]?.dt_txt.slice(0, 10) ?? ''}
      </Text>
      <Text style={styles.text}>
        Temperature: {Math.round(result?.list[0]?.main?.temp) ?? ''}&#176;C
      </Text>
      <Text style={styles.text}>
        {result?.list[0]?.weather[0]?.main ?? ''}
        {': '}
        {result?.list[0]?.weather[0]?.description ?? ''}
      </Text>

      <Text style={styles.title}>
        {result?.list[7]?.dt_txt.slice(0, 10) ?? ''}
      </Text>
      <Text style={styles.text}>
        Temperature: {Math.round(result?.list[7]?.main?.temp) ?? ''}&#176;C
      </Text>
      <Text style={styles.text}>
        {result?.list[7]?.weather[0]?.main ?? ''}
        {': '}
        {result?.list[7]?.weather[0]?.description ?? ''}
      </Text>

      <Text style={styles.title}>
        {result?.list[15]?.dt_txt.slice(0, 10) ?? ''}
      </Text>
      <Text style={styles.text}>
        Temperature: {Math.round(result?.list[15]?.main?.temp) ?? ''}&#176;C
      </Text>
      <Text style={styles.text}>
        {result?.list[15]?.weather[0]?.main ?? ''}
        {': '}
        {result?.list[15]?.weather[0]?.description ?? ''}
      </Text>

      <Text style={styles.title}>
        {result?.list[23]?.dt_txt.slice(0, 10) ?? ''}
      </Text>
      <Text style={styles.text}>
        Temperature: {Math.round(result?.list[23]?.main?.temp) ?? ''}&#176;C
      </Text>
      <Text style={styles.text}>
        {result?.list[23]?.weather[0]?.main ?? ''}
        {': '}
        {result?.list[23]?.weather[0]?.description ?? ''}
      </Text>

      <Text style={styles.title}>
        {result?.list[31]?.dt_txt.slice(0, 10) ?? ''}
      </Text>
      <Text style={styles.text}>
        Temperature: {Math.round(result?.list[31]?.main?.temp) ?? ''}&#176;C
      </Text>
      <Text style={styles.text}>
        {result?.list[31]?.weather[0]?.main ?? ''}
        {': '}
        {result?.list[31]?.weather[0]?.description ?? ''}
      </Text>

      <Text style={styles.title}>
        {result?.list[39]?.dt_txt.slice(0, 10) ?? ''}
      </Text>
      <Text style={styles.text}>
        Temperature: {Math.round(result?.list[39]?.main?.temp) ?? ''}&#176;C
      </Text>
      <Text style={styles.text}>
        {result?.list[39]?.weather[0]?.main ?? ''}
        {': '}
        {result?.list[39]?.weather[0]?.description ?? ''}
      </Text>
    </ScrollView>
  );
};

ForecastScreen.propTypes = {};

ForecastScreen.defaultProps = {};

export default ForecastScreen;
