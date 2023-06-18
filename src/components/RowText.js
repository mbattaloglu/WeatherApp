import {Text, View} from 'react-native';
import React from 'react';

const RowText = props => {
  return (
    <View style={props.containerStyles}>
      <Text style={props.messageOneStyles}>{props.messageOne}</Text>
      <Text style={props.messageTwoStyles}>{props.messageTwo}</Text>
    </View>
  );
};

export default RowText;
