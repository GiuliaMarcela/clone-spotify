import {StyleSheet} from 'react-native';
import colors from '../../constant/colors';
import fonts from '../../constant/fonts';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  secundary: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 50
  },
  containerIcon: {
    alignItems: "center",
    flex: 1,
    position: "relative",
    top: 220
  },
  text: {
    color: colors.white,
    fontFamily: fonts.Bold,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 60,
    marginHorizontal: 120,
    textAlign: 'center',
  },
  textLogin: {
    color: colors.white,
    fontFamily: fonts.Bold,
    fontSize: 17,
    marginTop: 20,
    textAlign: "center",
    textTransform: "uppercase"
  },
  textButton: {
    color: colors.white,
    fontFamily: fonts.Bold, 
    textAlign: "center",
    textTransform: "uppercase",
  },
  buttonSignUp: {
    backgroundColor: colors.green,
    borderRadius: 30,
    marginHorizontal: 40,
    marginTop: 50,
    padding: 14,
    width: 'auto'
  },
  buttonBorder: {
    borderColor: colors.darkerGrey,
    borderRadius: 30,
    borderStyle: "solid",
    borderWidth: 1.5,
    marginHorizontal: 40,
    marginTop: 10,
    padding: 14
  },
});

export default styles;