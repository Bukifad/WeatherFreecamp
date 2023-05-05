import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
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
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High:8 </Text>
          <Text style={styles.highLow}>Low:6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>It is perfect t-shirt weather</Text>
      </View>
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
