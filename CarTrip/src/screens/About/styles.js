import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Color } from "../../common/styles";

export default (styles = {
  info: {
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: Color.WHITE,
  },
});
module.exports = styles;
