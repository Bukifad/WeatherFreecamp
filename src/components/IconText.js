import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const IconText = ({iconName, iconColor, bodyText, bodyTextStyle}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>{iconName} </Text>
      <Text style={[styles.textTheme, bodyTextStyle]}>{bodyText} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  textTheme: {
    fontWeight: 'bold',
  },
});

export default IconText;
