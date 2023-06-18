import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const IconText = props => {
  return (
    <View style={styles.container}>
      <Icon name={props.iconName} size={50} color={props.iconColor} />
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});
