import React from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './styles';
import images from '../../common/helper/Images';
import { TextComponent } from '..';
import { Color } from '../../common/styles';

class DriverItemComponent extends React.Component {
  render() {
    const {
      title,
      score,
      desc,
    } = this.props;

    return (
      <View style={[styles.cardViewPager, {}]}>
        <View style={{ width: '100%', flexDirection: 'column', padding: wp('2.5'), alignItems: 'center' }} >
          <TextComponent semiBoldFont xxLarge children={title} />

          <TextComponent
            mtop={hp('1%')}
            color={Color.PRIMARY}
            fullLarge
            semiBoldFont
            children={score} />

          <TextComponent mtop={hp('0.5%')} children={desc} />
        </View>
      </View>
    )
  }
}
export default DriverItemComponent;
