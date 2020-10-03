import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Gradient from 'react-native-linear-gradient';
import colors from '../../constant/colors';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <Gradient
      colors={['#333', '#000']}
      useAngle={true}
      angle={120}
      style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon name="spotify" size={80} color={colors.white} />
      </View>
      <View style={styles.secundary}>
        <Text style={styles.text}>
          Milhões de músicas à sua escolha. Grátis no Spotify.
        </Text>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => navigation.navigate('Player')}>
          <Text style={styles.textButton}>Inscreva-se Grátis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBorder}
          onPress={() => navigation.navigate('Player')}>
          <Text style={styles.textButton}>
            Continuar com um número de telefone
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBorder}
          onPress={() => navigation.navigate('Player')}>
          <Text style={styles.textButton}>Continuar com o facebook</Text>
        </TouchableOpacity>
        <Text style={styles.textLogin}>Entrar</Text>
      </View>
    </Gradient>
  );
};

export default Login;
