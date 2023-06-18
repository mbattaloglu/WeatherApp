import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ListItem = props => {
  return (
    <View style={styles.item}>
      <Icon name="sun" size={50} color="white" />
      <Text style={styles.date}>{props.dt_txt}</Text>
      <Text style={styles.temp}>{props.min}</Text>
      <Text style={styles.temp}>{props.max}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
});
