import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  View,
} from 'react-native';
import IconText from '../src/components/IconText';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/city-Background.jpg')}
        style={styles.imageLayout}>
        <Text style={[styles.CityName, styles.CityText]}>london</Text>
        <Text style={[styles.CountryName, styles.CityText]}>Uk</Text>
        <View style={styles.populationWrapper}>
          <IconText iconName={'👧🏾'} bodyText={800} />
        </View>
        <View style={styles.riseSetWrapper}>
          <Text style={{fontSize: 30}}>🌅</Text>
          <Text style={styles.riseSetText}>10:46:58am</Text>
          <Text style={{fontSize: 30}}>🌆</Text>
          <Text style={styles.riseSetText}>17:34:18pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  CityName: {
    fontSize: 40,
  },
  CountryName: {
    fontSize: 30,
  },
  CityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    color: 'red',
    marginLeft: 7.5,
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
});
export default City;
