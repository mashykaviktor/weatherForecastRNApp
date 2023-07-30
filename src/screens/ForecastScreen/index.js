import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, ScrollView} from 'react-native';

import {DataRow} from '../../components';
import styles from './styles';

const ForecastScreen = props => {
  const {result} = props?.route?.params;

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradient}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.title}>{result?.city?.name ?? ''}</Text>

          <View style={styles.itemCell}>
            <Text style={styles.title}>
              {result?.list[7]?.dt_txt.slice(0, 10) ?? ''}
            </Text>
            <Text style={styles.title}>
              {Math.round(result?.list[7]?.main?.temp) ?? ''}
              &#176;C
            </Text>
            <Text style={styles.text}>
              {result?.list[7]?.weather[0]?.main ?? ''}
              {': '}
              {result?.list[7]?.weather[0]?.description ?? ''}
            </Text>
            <View style={styles.contentContainer}>
              <DataRow
                label="Temp feels like"
                value={`${
                  Math.round(result?.list[7]?.main?.feels_like) ?? ''
                }°C`}
              />
              <DataRow
                label="Temp max"
                value={`${Math.round(result?.list[7]?.main?.temp_max) ?? ''}°C`}
              />
              <DataRow
                label="Temp min"
                value={`${Math.round(result?.list[7]?.main?.temp_min) ?? ''}°C`}
              />
              <DataRow
                label="Wind speed"
                value={`${
                  Math.round(result?.list[7]?.wind?.speed) ?? ''
                } meter/sec`}
              />
              <DataRow
                label="Pressure"
                value={`${
                  Math.round(result?.list[7]?.main?.pressure) ?? ''
                } hPa`}
              />
              <DataRow
                label="Humidity"
                value={`${Math.round(result?.list[7]?.main?.humidity) ?? ''}%`}
              />
            </View>
          </View>

          <View style={styles.itemCell}>
            <Text style={styles.title}>
              {result?.list[15]?.dt_txt.slice(0, 10) ?? ''}
            </Text>
            <Text style={styles.title}>
              {Math.round(result?.list[15]?.main?.temp) ?? ''}
              &#176;C
            </Text>
            <Text style={styles.text}>
              {result?.list[15]?.weather[0]?.main ?? ''}
              {': '}
              {result?.list[15]?.weather[0]?.description ?? ''}
            </Text>
            <View style={styles.contentContainer}>
              <DataRow
                label="Temp feels like"
                value={`${
                  Math.round(result?.list[15]?.main?.feels_like) ?? ''
                }°C`}
              />
              <DataRow
                label="Temp max"
                value={`${
                  Math.round(result?.list[15]?.main?.temp_max) ?? ''
                }°C`}
              />
              <DataRow
                label="Temp min"
                value={`${
                  Math.round(result?.list[15]?.main?.temp_min) ?? ''
                }°C`}
              />
              <DataRow
                label="Wind speed"
                value={`${
                  Math.round(result?.list[15]?.wind?.speed) ?? ''
                } meter/sec`}
              />
              <DataRow
                label="Pressure"
                value={`${
                  Math.round(result?.list[15]?.main?.pressure) ?? ''
                } hPa`}
              />
              <DataRow
                label="Humidity"
                value={`${Math.round(result?.list[15]?.main?.humidity) ?? ''}%`}
              />
            </View>
          </View>

          <View style={styles.itemCell}>
            <Text style={styles.title}>
              {result?.list[23]?.dt_txt.slice(0, 10) ?? ''}
            </Text>
            <Text style={styles.title}>
              {Math.round(result?.list[23]?.main?.temp) ?? ''}
              &#176;C
            </Text>
            <Text style={styles.text}>
              {result?.list[23]?.weather[0]?.main ?? ''}
              {': '}
              {result?.list[23]?.weather[0]?.description ?? ''}
            </Text>
            <View style={styles.contentContainer}>
              <DataRow
                label="Temp feels like"
                value={`${
                  Math.round(result?.list[23]?.main?.feels_like) ?? ''
                }°C`}
              />
              <DataRow
                label="Temp max"
                value={`${
                  Math.round(result?.list[23]?.main?.temp_max) ?? ''
                }°C`}
              />
              <DataRow
                label="Temp min"
                value={`${
                  Math.round(result?.list[23]?.main?.temp_min) ?? ''
                }°C`}
              />
              <DataRow
                label="Wind speed"
                value={`${
                  Math.round(result?.list[23]?.wind?.speed) ?? ''
                } meter/sec`}
              />
              <DataRow
                label="Pressure"
                value={`${
                  Math.round(result?.list[23]?.main?.pressure) ?? ''
                } hPa`}
              />
              <DataRow
                label="Humidity"
                value={`${Math.round(result?.list[23]?.main?.humidity) ?? ''}%`}
              />
            </View>
          </View>

          <View style={styles.itemCell}>
            <Text style={styles.title}>
              {result?.list[31]?.dt_txt.slice(0, 10) ?? ''}
            </Text>
            <Text style={styles.title}>
              {Math.round(result?.list[31]?.main?.temp) ?? ''}
              &#176;C
            </Text>
            <Text style={styles.text}>
              {result?.list[31]?.weather[0]?.main ?? ''}
              {': '}
              {result?.list[31]?.weather[0]?.description ?? ''}
            </Text>
            <View style={styles.contentContainer}>
              <DataRow
                label="Temp feels like"
                value={`${
                  Math.round(result?.list[31]?.main?.feels_like) ?? ''
                }°C`}
              />
              <DataRow
                label="Temp max"
                value={`${
                  Math.round(result?.list[31]?.main?.temp_max) ?? ''
                }°C`}
              />
              <DataRow
                label="Temp min"
                value={`${
                  Math.round(result?.list[31]?.main?.temp_min) ?? ''
                }°C`}
              />
              <DataRow
                label="Wind speed"
                value={`${
                  Math.round(result?.list[31]?.wind?.speed) ?? ''
                } meter/sec`}
              />
              <DataRow
                label="Pressure"
                value={`${
                  Math.round(result?.list[31]?.main?.pressure) ?? ''
                } hPa`}
              />
              <DataRow
                label="Humidity"
                value={`${Math.round(result?.list[31]?.main?.humidity) ?? ''}%`}
              />
            </View>
          </View>

          <View style={styles.itemCell}>
            <Text style={styles.title}>
              {result?.list[39]?.dt_txt.slice(0, 10) ?? ''}
            </Text>
            <Text style={styles.title}>
              {Math.round(result?.list[39]?.main?.temp) ?? ''}
              &#176;C
            </Text>
            <Text style={styles.text}>
              {result?.list[39]?.weather[0]?.main ?? ''}
              {': '}
              {result?.list[39]?.weather[0]?.description ?? ''}
            </Text>
            <View style={styles.contentContainer}>
              <DataRow
                label="Temp feels like"
                value={`${
                  Math.round(result?.list[39]?.main?.feels_like) ?? ''
                }°C`}
              />
              <DataRow
                label="Temp max"
                value={`${
                  Math.round(result?.list[39]?.main?.temp_max) ?? ''
                }°C`}
              />
              <DataRow
                label="Temp min"
                value={`${
                  Math.round(result?.list[39]?.main?.temp_min) ?? ''
                }°C`}
              />
              <DataRow
                label="Wind speed"
                value={`${
                  Math.round(result?.list[39]?.wind?.speed) ?? ''
                } meter/sec`}
              />
              <DataRow
                label="Pressure"
                value={`${
                  Math.round(result?.list[39]?.main?.pressure) ?? ''
                } hPa`}
              />
              <DataRow
                label="Humidity"
                value={`${Math.round(result?.list[39]?.main?.humidity) ?? ''}%`}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ForecastScreen;
