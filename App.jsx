import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import City from './screens/City';
import CurrentWeather from './screens/CurrentWeather';
import UpcomingWeather from './screens/UpcomingWeather';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      {/* <UpcomingWeather /> */}
      <City />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
