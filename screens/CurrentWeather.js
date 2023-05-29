import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import RowText from '../src/components/RowText';
import {WeatherType} from '../src/utilities/WeatherTypes';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';

export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/* <Icon name="sun" size={24} color="red" /> */}
        <Text style={{fontSize: 60}}>☀️</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>feels like 5</Text>
        <RowText
          messageOne={'High:8'}
          messageTwo={'Low:6'}
          containerStyles={styles.highLowWrapper}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
        />
      </View>
      <RowText
        messageOne={'Its sunny'}
        messageTwo={WeatherType}
        containerStyles={styles.bodyWrapper}
        messageOneStyles={styles.description}
        messageTwoStyles={styles.message}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  temp: {
    fontSize: 48,
  },
  feels: {
    fontSize: 48,
  },

  highLowWrapper: {
    flexDirection: 'row',
  },
  highLow: {
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
    marginBottom: 40,
  },
});
