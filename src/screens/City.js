import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';
import React from 'react';
import IconText from '../components/IconText';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={styles.imageLayout}>
        <Text style={[styles.cityText, styles.cityName]}>New York</Text>
        <Text style={[styles.cityText, styles.countryName]}>USA</Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            iconName="user"
            iconColor="white"
            text="8000"
            textStyle={styles.populationText}
          />
        </View>
        <View style={[styles.riseSetWrapper, styles.rowLayout]}>
          <IconText
            iconName="sunrise"
            iconColor="white"
            text="10:46:58am"
            textStyle={styles.riseSetText}
          />
          <IconText
            iconName="sunset"
            iconColor="white"
            text="17:26:58am"
            textStyle={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7,
    color: 'white',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    color: 'white',
    fontSize: 20,
  },

  rowLayout : {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
