import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import components
import styles from './styles';
import { Color, Constants } from "../../common/styles";
import { TextComponent } from '../../components';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        const { } = this.state;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.WHITE }}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('2%') }}
                >
                    <View style={{ alignItems: 'center', padding: hp('2%') }}>
                        <TextComponent mtop={hp('2%')} children={Constants.DRIVER_SCORE_2} />
                        <TextComponent mtop={hp('2%')} children={Constants.DRIVER_SCORE_3} />
                        <TextComponent mtop={hp('2%')} children={Constants.DRIVER_SCORE_4} />
                        <TextComponent mtop={hp('2%')} children={Constants.DRIVER_SCORE_5} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default About
