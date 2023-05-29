import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CurrentWeather from '../../screens/CurrentWeather';
import UpcomingWeather from '../../screens/UpcomingWeather';
import City from '../../screens/City';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      ScreenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen name={'Current'} component={CurrentWeather} />
      <Tab.Screen name={'Upcoming'} component={UpcomingWeather} />
      <Tab.Screen name={'City'} component={City} />
    </Tab.Navigator>
  );
};

export default Tabs;
