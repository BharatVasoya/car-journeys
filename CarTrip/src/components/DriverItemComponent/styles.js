import { Color } from "../../common/styles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default (styles = {
  cardViewPager: {
    borderRadius: wp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Color.GREY_BUTTON_COLOR,
    backgroundColor: Color.WHITE,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 3,
    shadowRadius: hp('0.6%'),
    elevation: 5,
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('3%'),
  },
});
module.exports = styles;
