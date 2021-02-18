import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import components
import styles from './styles';
import { Color } from "../../common/styles";
import { TextComponent } from '../../components';
import images from '../../common/helper/Images';

class TripDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        const { tripDetail } = this.props.route.params;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.WHITE }}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('2%') }}
                >
                    <View style={{ alignItems: 'center', padding: hp('2%') }}>
                        <View style={{ backgroundColor: Color.PRIMARY, height: hp('12%'), width: hp('12%'), borderRadius: hp('6%'), alignItems: 'center', justifyContent: 'center' }}>
                            <Image resizeMode={'contain'} source={tripDetail.type === 'personal' ? images.img_user : images.img_bussiness} style={{ width: hp('5%'), width: hp('5%'), tintColor: Color.WHITE }} />
                        </View>

                        <TextComponent mtop={hp('1%')} semiBoldFont xxxLarge children={tripDetail.name} />

                            <View style={{ alignItems: 'center', marginTop: hp('2%') }}>
                                <TextComponent mtop={hp('0.5%')} children={`Start Time`} />
                                <TextComponent mtop={hp('0.5%')} semiBoldFont children={`${tripDetail.startTime}`} />
                            </View>

                            <View style={{ alignItems: 'center', marginTop: hp('2%') }}>
                                <TextComponent mtop={hp('0.5%')} children={`End Time`} />
                                <TextComponent mtop={hp('0.5%')} semiBoldFont children={`${tripDetail.endTime}`} />
                            </View>

                        <TextComponent align={'center'} mtop={hp('5%')} children={tripDetail.desc} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default TripDetail
