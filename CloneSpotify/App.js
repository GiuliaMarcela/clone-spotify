import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/Login';
import Player from './src/screens/Player';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Player"
          component={Player}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
