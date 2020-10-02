import {StyleSheet} from 'react-native';
import colors from '../../constant/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  albumart: {
    marginTop: 50,
    height: 470,
    width: 470,
  },
  trackdetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  textone: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '100',
    marginHorizontal: 150,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  texttwo: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  spacement: {
    marginRight: 340,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
  },
  autor: {
    color: colors.grey,
    fontSize: 14,
  },
});

export default styles;
