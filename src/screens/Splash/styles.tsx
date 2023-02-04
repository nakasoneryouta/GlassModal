import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkGray,
  },
  loadingGif: {
    width: '20%',
    resizeMode: 'contain',
  },
  logoTitle: {
    width: '30%',
    resizeMode: 'contain',
  },
});

export default styles;
