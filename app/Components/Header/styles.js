import {StyleSheet, Dimensions} from 'react-native';
import {
  COLORS,
} from '../../Utils/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
} from 'react-native-responsive-screen';
const {SCREEN_HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
    height:
      Dimensions.get('window').height > 600
        ? heightPercentageToDP(6)
        : heightPercentageToDP(10),
  },
  title: {
    fontSize: RFValue(14, SCREEN_HEIGHT),
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
export default styles;
