import React from 'react';
import {Image, Text, View} from 'react-native';

import Gradient from 'react-native-linear-gradient';
import styles from './styles';
import colors from '../../constant/colors';

import Icon from 'react-native-vector-icons/FontAwesome';
import TopIcon from 'react-native-vector-icons/MaterialIcons';
import RightTopIcon from 'react-native-vector-icons/Ionicons';

const Player = () => {
  return (
    <Gradient
      Gradient
      colors={[colors.darkerGrey, colors.background]}
      useAngle={true}
      angle={120}
      style={styles.container}>
      <View style={styles.header}>
        <TopIcon
          name="keyboard-arrow-down"
          size={30}
          color={colors.lightGrey}
        />
        <View>
          <Text style={styles.textone}>Tocando da playlist</Text>
          <Text style={styles.texttwo}>These songs bring me peace</Text>
        </View>
        <RightTopIcon
          name="ellipsis-vertical"
          size={30}
          color={colors.darkGrey}
        />
      </View>
      <Image
        source={require('../../assets/images/albumArt.jpg')}
        style={styles.albumart}
      />
      <View style={styles.trackdetails}>
        <View style={styles.spacement}>
          <Text style={styles.title}>Fast Car</Text>
          <Text style={styles.autor}>Tracy Chapman</Text>
        </View>
        <Icon name="heart-o" size={20} color={colors.white} />
      </View>
      <View></View>
    </Gradient>
  );
};

export default Player;
