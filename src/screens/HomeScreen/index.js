import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, ActivityIndicator, Text} from 'react-native';

import styles from './styles';

const HomeScreen = props => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{marginHorizontal: 15, marginTop: 10}}
        onPress={() => {
          props.navigation.navigate('Forecast');
        }}>
        <Text>Go to Forecast</Text>
      </TouchableOpacity>

      <ActivityIndicator
        // animating={}
        hidesWhenStopped
        size={'large'}
      />
    </View>
  );
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;
