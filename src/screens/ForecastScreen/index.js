import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, ActivityIndicator, Text} from 'react-native';

import styles from './styles';

const ForecastScreen = props => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{marginHorizontal: 15, marginTop: 10}}
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        <Text>Gp to Home</Text>
      </TouchableOpacity>

      <ActivityIndicator
        // animating={}
        hidesWhenStopped
        size={'large'}
      />
    </View>
  );
};

ForecastScreen.propTypes = {};

ForecastScreen.defaultProps = {};

export default ForecastScreen;
