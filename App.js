import React from 'react';
import {StatusBar} from 'react-native';

import Login from './src/screens/Login'


const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="default" />
      <Login />
    </React.Fragment>
  );
}

export default App;