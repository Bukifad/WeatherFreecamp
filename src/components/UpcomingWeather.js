import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  ImageBackground,
} from 'react-native';

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
    dt_txt: '2023-02-18 12:00:00',
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
    dt_txt: '2023-02-18 12:00:00',
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
const Item = ({dt_txt, max, min, condition}) => {
  // const {dt_txt, max, min, condition} = props;
  return (
    <View style={styles.item}>
      <Text>☀️</Text>
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{max}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text>{condition}</Text>
    </View>
  );
};

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
        source={require('../../assets/upcoming-background.jpg')}
        style={styles.image}>
        <Text> hello</Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item
              dt_txt={item.dt_txt}
              max={item.main.temp_max}
              min={item.main.temp_min}
              condition={item.weather[0].main}
            />
          )}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
      <Text>hello</Text>
      <Text>hello</Text>
      <Text>hello</Text>
      <Text>hello</Text>
      <Text>hello</Text>
      <Text>hello</Text>
      <Text>hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    borderWidth: 3,
    backgroundColor: 'pink',
  },
  temp: {
    color: 'white',
    fontSize: 10,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
});
