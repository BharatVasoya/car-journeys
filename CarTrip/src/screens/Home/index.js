import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RNSpeedometer from 'react-native-speedometer'

// import components
import styles from './styles';
import { Color, Constants } from "../../common/styles";
import { TextComponent, ButtonComponent } from '../../components';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 60,
        }
    }

    componentDidMount() {
        this.newRandomNumber(1, 100)
    }

    newRandomNumber(min, max) {
        this.setState({ value: Math.floor(Math.random() * (max - min + 1)) + min });
    }

    render() {
        const { value } = this.state;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.WHITE, justifyContent: 'center' }}>
                <View style={{ marginVertical: hp('5%') }}>
                    <RNSpeedometer
                        value={value}
                        labelWrapperStyle={{ height: 0, width: 0 }}
                        needleImage={null}
                        size={wp('90%')} />

                    <TextComponent
                        containerStyle={{ position: 'absolute', alignSelf: 'center', bottom: '10%' }}
                        color={Color.PRIMARY}
                        fullLarge
                        semiBoldFont
                        children={value} />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <ButtonComponent
                        click={() => {
                            this.props.navigation.navigate("MyScore", {})
                        }}
                        backgroundColor={Color.DARK_PRIMARY}
                        textColor={Color.WHITE}
                        borderRadius={hp('3%')}
                        textSize={Constants.NORMAL}
                        children='My Driver Score' />

                    <ButtonComponent
                        click={() => {
                            this.props.navigation.navigate("MyTrips", {})
                        }}
                        backgroundColor={Color.DARK_PRIMARY}
                        textColor={Color.WHITE}
                        mtop={hp('2.5%')}
                        borderRadius={hp('3%')}
                        textSize={Constants.NORMAL}
                        children='My Trips' />

                    <ButtonComponent
                        click={() => {
                            this.props.navigation.navigate("About", {})
                        }}
                        backgroundColor={Color.DARK_PRIMARY}
                        textColor={Color.WHITE}
                        mtop={hp('2.5%')}
                        borderRadius={hp('3%')}
                        textSize={Constants.NORMAL}
                        children='About' />
                </View>
            </SafeAreaView>
        )
    }
}

export default Home
