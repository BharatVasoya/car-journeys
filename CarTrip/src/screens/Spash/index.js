import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageBackground, Image, SafeAreaView, View } from 'react-native';
import { CommonActions } from '@react-navigation/native';

// import components
import styles from './styles';
import images from '../../common/helper/Images';
import { Color } from "../../common/styles";

import { Storage } from '../../common/localStorage';
import AsynchStorageKey from '../../common/localStorage/AsynchStorageKey';
import { TextComponent } from '../../components';

class Splash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }

    async componentDidMount() {
        const user_info = await Storage.getItem(AsynchStorageKey.accountInfo);
        if (user_info) {
            setTimeout(() => {
                this.goToNextView('Home')
            }, 2000)
        } else {
            setTimeout(() => {
                this.goToNextView('Home')
            }, 2000)
        }
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

//---- Connect to props functions and values -----//
function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
