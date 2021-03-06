import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import components
import styles from './styles';
import { Color, Constants } from "../../common/styles";
import { DriverItemComponent } from '../../components';

class MyScore extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.WHITE }}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('2%') }}
                >
                    <DriverItemComponent
                        title={'My Driver Score'}
                        score={Math.floor(Math.random() * 100) + 1}
                        desc={Constants.DRIVER_SCORE}
                    />

                    <DriverItemComponent
                        title={'Acceleration Score'}
                        score={Math.floor(Math.random() * 100) + 1}
                        desc={Constants.DRIVER_SCORE_2}
                    />

                    <DriverItemComponent
                        title={'Braking Score'}
                        score={Math.floor(Math.random() * 100) + 1}
                        desc={Constants.DRIVER_SCORE_3}
                    />

                    <DriverItemComponent
                        title={'Cornering Score'}
                        score={Math.floor(Math.random() * 100) + 1}
                        desc={Constants.DRIVER_SCORE_4}
                    />

                    <DriverItemComponent
                        title={'Eco Driving Score'}
                        score={Math.floor(Math.random() * 100) + 1}
                        desc={Constants.DRIVER_SCORE_5}
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default MyScore
