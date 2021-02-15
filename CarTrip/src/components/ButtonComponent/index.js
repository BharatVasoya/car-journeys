import React from 'react';
import { View, TouchableOpacity, Keyboard } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

import { TextComponent } from '../../components'
import { Color, Constants } from '../../common/styles';

class ButtonComponent extends React.Component {
  onClick = () => {
    Keyboard.dismiss();
    if (this.props.click) this.props.click();
  };

  render() {
    const btnContainerStylesArray = [];
    const btnTextStylesArray = [];
    const {
      btn_block,
      mtop,
      mbottom,
      mleft,
      mright,
      center,
      borderColor,
      borderRadius,
      textColor,
      textSize,
      style,
      children,
      bordered,
      backgroundColor
    } = this.props;

    btnContainerStylesArray.push({
      paddingHorizontal: wp('4%'),
    });

    const btnWholeStyles = [];
    btnWholeStyles.push({
      marginTop: mtop,
      marginBottom: mbottom,
      marginLeft: mleft,
      marginRight: mright,
      backgroundColor
    });

    if (btn_block) {
      btnWholeStyles.push({
        width: wp('85%'),
        height: hp('6%'),
        justifyContent: 'center',
      });
    }

    if (center) {
      btnWholeStyles.push({
        alignSelf: 'center'
      });
    }

    btnContainerStylesArray.push({
      alignItems: 'center'
    });

    if (bordered) {
      btnContainerStylesArray.push({
        borderColor,
        borderWidth: 1,
        borderRadius
      });
    }

    btnTextStylesArray.push({
      color: textColor,
      fontFamily: Constants.FONT_SEMIBOLD,
      fontSize: Constants.LARGE,
    });

    return (
      <TouchableOpacity  onPress={this.onClick} style={[style, btnWholeStyles, { borderRadius }]}>
        <View style={btnContainerStylesArray}>
          <TextComponent containerStyle={btnTextStylesArray}>
            {children}
          </TextComponent>
        </View>
      </TouchableOpacity>
    );
  }
}

ButtonComponent.defaultProps = {
  ...TouchableOpacity.defaultProps,
  textColor: Color.BLACK,
  textSize: Constants.LARGE,
  backgroundColor: Color.PRIMARY,
  btn_block: true,
  borderRadius: wp('5%'),
  mtop: 0,
  mbottom: 0,
  mleft: 0,
  mright: 0,
  center: false,
  borderColor: Color.PRIMARY,
  bordered: false
};
ButtonComponent.propTypes = {
  ...TouchableOpacity.propTypes,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  btn_block: PropTypes.bool,
  borderRadius: PropTypes.number,
  mtop: PropTypes.number,
  mbottom: PropTypes.number,
  mleft: PropTypes.number,
  mright: PropTypes.number,
  center: PropTypes.bool,
  bordered: PropTypes.bool
};
export default ButtonComponent;
