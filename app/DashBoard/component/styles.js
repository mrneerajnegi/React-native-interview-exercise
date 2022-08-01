import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet, Dimensions} from 'react-native';
import {
  COLORS,
  normalize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/theme';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const {SCREEN_HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: wp(2),
    borderWidth: wp(0.1),
    marginVertical: hp(1),
    flexDirection: 'row',
    paddingHorizontal: wp(2),
    paddingVertical: wp(2),
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: RFValue(12, SCREEN_HEIGHT),
  },
  price: {
    fontSize: RFValue(10, SCREEN_HEIGHT),
    color: COLORS.black,
  },
  image: {
    width: Dimensions.get('window').height > 600 ? hp(6) : hp(10),
    height: Dimensions.get('window').height > 600 ? hp(8) : hp(14),
    resizeMode: 'contain',
  },
});
export default styles;
