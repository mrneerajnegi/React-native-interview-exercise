import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet,Dimensions} from 'react-native';
import {COLORS, normalize} from '../Utils/theme';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const {SCREEN_HEIGHT} = Dimensions.get('window');


const styles = StyleSheet.create({
  container:{flex:1},
  innerContainer: {marginHorizontal: wp(2),flex:1},
  textInputStyle: {
    borderWidth: wp(0.1),
    borderRadius: wp(1),
    marginVertical: hp(2),
  },
  header: {
    fontSize: RFValue(16,SCREEN_HEIGHT),
  },
  placeholderStyle:{
    fontSize: RFValue(12,SCREEN_HEIGHT),
  }
});
export default styles;
