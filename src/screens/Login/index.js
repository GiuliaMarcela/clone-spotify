import React from 'react';
import {Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

import Gradient from 'react-native-linear-gradient';
import colors from '../../constant/colors';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import Phone from 'react-native-vector-icons/Feather';

const Login = ({navigation}) => {
  return (
    <Gradient colors={['#333', '#000']}
    useAngle={true} angle={120} style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon name="spotify" size={80} color={colors.white}/>
      </View>
      <View style={styles.secundary}>
        <Text style={styles.text}>Milhões de músicas à sua escolha. 
          Grátis no Spotify.
        </Text>
        <TouchableHighlight style={styles.buttonSignUp}>
          <Text style={styles.textButton}>Inscreva-se Grátis</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonBorder} onPress={() => {}}>
          <Text style={styles.textButton}>
            <Phone name="smartphone" size={20} />
            Continuar com um número de telefone
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonBorder} onPress={() => {}}>
          <Text style={styles.textButton}>
            Continuar com o facebook
          </Text>
        </TouchableHighlight>
        <Text style={styles.textLogin}>Entrar</Text>
      </View>
    </Gradient>
  );
}

export default Login;