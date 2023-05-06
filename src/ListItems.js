import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItem = ({dt_txt, max, min, condition}) => {
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

const styles = StyleSheet.create({
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
    fontSize: 15,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
});
export default ListItem;
