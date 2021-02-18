import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { CommonActions } from '@react-navigation/native';

// import components
import styles from './styles';
import images from '../../common/helper/Images';
import { Color } from "../../common/styles";
import { TextComponent } from '../../components';

class Splash extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    async componentDidMount() {
        setTimeout(() => {
            this.goToNextView('Home')
        }, 2000);
    }

    goToNextView = (nextView = null) => {
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: nextView }],
            }),
        )
        return
    }

    render() {
        return (
            <View style={styles.gradiantStyle}>
                <Image resizeMode={'contain'} source={images.img_splash} style={styles.styleLogo} />

                <TextComponent color={Color.PRIMARY} xxxLarge boldFont children='CAR TRIP' />
            </View>
        )
    }
}

export default Splash
