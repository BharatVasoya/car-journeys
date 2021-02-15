import React from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './styles';
import images from '../../common/helper/Images';
import { TextComponent } from '..';
import { Color } from '../../common/styles';

class TripItemComponent extends React.Component {
  render() {
    const {
      item,
      index,
      onClick,
    } = this.props;

    return (
      <TouchableOpacity onPress={() => { onClick(item, index) }} style={[styles.cardViewPager, {}]}>
        <View style={{ width: '100%', flexDirection: 'row', padding: hp('1'), alignItems: 'center' }} >

          <View style={{ flexDirection: 'column', flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ backgroundColor: Color.PRIMARY, height: hp('8%'), width: hp('8%'), borderRadius: hp('4%'), alignItems: 'center', justifyContent: 'center' }}>
                <Image resizeMode={'contain'} source={item.type === 'personal' ? images.img_user : images.img_bussiness} style={{ width: hp('5%'), width: hp('5%'), tintColor: Color.WHITE }} />
              </View>

              <View style={{ justifyContent: 'center', marginHorizontal: wp('3%') }}>
                <TextComponent semiBoldFont xxLarge children={item.name} />
              </View>
            </View>

            <View style={{ flexDirection: 'column', marginTop: hp('1%') }}>
              <View style={{ flexDirection: 'row' }}>
                <TextComponent mtop={hp('0.5%')} children={`Start Time : `} />
                <TextComponent mtop={hp('0.5%')} semiBoldFont children={`${item.startTime}`} />
              </View>

              <View style={{ flexDirection: 'row' }}>
                <TextComponent mtop={hp('0.5%')} children={`End Time : `} />
                <TextComponent mtop={hp('0.5%')} semiBoldFont children={`${item.endTime}`} />
              </View>
            </View>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image resizeMode={'contain'} source={images.img_right} style={{ width: hp('2.5%'), tintColor: Color.BLACK }} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
export default TripItemComponent;
