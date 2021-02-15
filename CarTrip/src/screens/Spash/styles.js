import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default (styles = {
  styleLogo: {
    height: hp('20%'),
  },
  gradiantStyle: {
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
module.exports = styles;
