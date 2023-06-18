import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {WEATHER_API_KEY} from '@env';

const x = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => async () => {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await Geolocation.getCurrentPosition(position => async () => {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position['coords']['latitude']}&lon=${position['coords']['longitude']}&appid=${WEATHER_API_KEY}`)
                .then(response => response.json())
                .then(json => setWeather(json))
                .catch(error => console.error(error));
        })
            .catch(error => console.error(error));
    }
  }, []);

  return (
    <View>
      <Text>x</Text>
    </View>
  );
};

export default x;

const styles = StyleSheet.create({});
