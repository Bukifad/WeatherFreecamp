import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import {useState} from 'react';
// import Geolocation from '@react-native-community/geolocation';
// import GetLocation from 'react-native-get-location';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionAsync();
      if (status !== 'granted') {
        setError('permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  if (location) {
    console.log(location);
  }
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});
