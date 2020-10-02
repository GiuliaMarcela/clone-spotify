import React from 'react';
import {StatusBar} from 'react-native';

import Player from './src/screens/Player'

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="default" />
      <Player />
    </React.Fragment>
  );
}

export default App;