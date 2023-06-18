import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';
import ListItem from '../components/ListItem';

const UpcomingWeather = () => {
  const data = [
    {
      dt_txt: '2021-08-01 12:00:00',
      main: {
        temp_max: 8.55,
        temp_min: 7.55,
      },
      weather: [
        {
          main: 'Clear',
        },
      ],
    },
    {
      dt_txt: '2021-08-01 15:00:00',
      main: {
        temp_max: 8.55,
        temp_min: 7.55,
      },
      weather: [
        {
          main: 'Clouds',
        },
      ],
    },
    {
      dt_txt: '2021-08-01 18:00:00',
      main: {
        temp_max: 8.55,
        temp_min: 7.55,
      },
      weather: [
        {
          main: 'Rain',
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={styles.image}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ListItem
              dt_txt={item.dt_txt}
              max={item.main.temp_max}
              min={item.main.temp_min}
            />
          )}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UpcomingWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
  },
  image: {
    flex: 1,
  },
});
