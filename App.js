import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  PermissionsAndroid,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import Geolocation from '@react-native-community/geolocation';
import {WEATHER_API_KEY} from '@env';
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  //Getting location permission
  const requestLocationPermission = async () => {
    console.log('requestLocationPermission started');
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        getLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
    console.log('requestLocationPermission finished');
  };

  //Getting Location
  const getLocation = async () => {
    console.log('getLocation started');
    try {
      await Geolocation.getCurrentPosition(position => {
        getWeather(position);
      });
    } catch (err) {
      console.log('Err:' + err);
    }
    console.log('getLocation finished');
  };

  const getWeather = async passedPosition => {
    console.log('getWeather started');
    try {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${passedPosition['coords']['latitude']}&lon=${passedPosition['coords']['longitude']}&appid=${WEATHER_API_KEY}`,
      )
        .then(res => res.json())
        .then(res => setWeather(res))
        .then(console.log(weather))
        .then(setLoading(false));
    } catch (err) {
      console.log('Err:' + err);
    }
    console.log('getWeather finished');
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="tomato" />
        <Text style={styles.loadingText}>Loading</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: 'tomato',
    fontSize: 20,
    paddingTop: 10,
  },
});
