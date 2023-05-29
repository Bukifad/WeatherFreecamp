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
        <View style={[styles.populationWrapper, styles.rowLayer]}>
          <IconText
            iconName={'👧🏾'}
            iconColor={'red'}
            bodyText={'8000'}
            bodyTextStyle={styles.populationText}
          />
        </View>
        <View style={[styles.riseSetWrapper, styles.rowLayer]}>
          <IconText
            iconName={'🌅'}
            iconColor={''}
            bodyText={'10:46:58am'}
            bodyTextStyle={styles.riseSetText}
          />
          <IconText
            iconName={'🌆'}
            iconColor={''}
            bodyText={'17:34:18pm'}
            bodyTextStyle={styles.riseSetText}
          />
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
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    color: 'red',
    marginLeft: 7.5,
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
  rowLayer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default City;
