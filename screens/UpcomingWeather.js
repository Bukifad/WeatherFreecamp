import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from 'react-native';
import ListItem from '../src/components/ListItems';

const DATA = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'clear',
      },
    ],
  },
  {
    dt_txt: '2023-02-15 12:00:00',
    main: {
      temp_max: 27.55,
      temp_min: 18.55,
    },
    weather: [
      {
        main: 'clear',
      },
    ],
  },
  {
    dt_txt: '2023-02-19 12:00:00',
    main: {
      temp_max: 6.55,
      temp_min: 2.55,
    },
    weather: [
      {
        main: 'clear',
      },
    ],
  },
];

export default function UpcomingWeather() {
  // const renderItem = ({item}) => {
  //   <Item
  //     dt_txt={item.dt_txt}
  //     max={item.main.temp_max}
  //     min={item.main.temp_min}
  //     condition={item.weather[0].main}
  //   />;
  // };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/upcoming-background.jpg')}
        style={styles.image}>
        <Text> hello</Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <ListItem
              dt_txt={item.dt_txt}
              max={item.main.temp_max}
              min={item.main.temp_min}
              condition={item.weather[0].main}
            />
          )}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },
});
