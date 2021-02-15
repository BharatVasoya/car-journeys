import React from 'react';
import { View, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

import { Color, Constants } from '../../common/styles';

class TextInputComponent extends React.Component {
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
      pleft,
      pright,
      center,
      borderColor,
      borderRadius,
      textColor,
      textSize,
      style,
      children,
      bordered,
      isMultiline,
      isSecureText,
      placeholder,
      value,
      keyboardType,
      isEditable,
      onChangeText,
      autoCapitalize,
      maxNumber,
    } = this.props;

    btnContainerStylesArray.push({
      paddingHorizontal: wp('1.5%'),
      paddingLeft: pleft,
      paddingRight: pright,
    });

    const btnWholeStyles = [];
    btnWholeStyles.push({
      marginTop: mtop,
      marginBottom: mbottom,
      marginLeft: mleft,
      marginRight: mright,
    });

    if (btn_block) {
      btnWholeStyles.push({
        width: wp('85%'),
        height: hp('7%')
      });
    }

    if (center) {
      btnWholeStyles.push({
        alignSelf: 'center'
      });
    }

    if (bordered) {
      btnContainerStylesArray.push({
        borderColor,
        // borderBottomWidth: 1,
        borderRadius: hp('3.5%'),
        backgroundColor: Color.TRANS_WHITE,
      });
    }

    btnTextStylesArray.push({
      color: Color.GREY,
      fontFamily: Constants.FONT_MEDIUM,
      fontSize: Constants.SMALL,
    });

    return (
      <View style={[style, btnWholeStyles, { borderRadius }]}>
        <View style={btnContainerStylesArray}>
          <TextInput
            style={{ textAlign: 'left', fontFamily: Constants.FONT_MEDIUM, paddingVertical: hp('2%'), fontSize: Constants.NORMAL, color: Color.WHITE }}
            multiline={isMultiline}
            onChangeText={onChangeText}
            secureTextEntry={isSecureText}
            placeholder={placeholder}
            placeholderTextColor={Color.WHITE}
            value={value}
            keyboardType={keyboardType}
            editable={isEditable}
            autoCapitalize={autoCapitalize ? "none" : null}
            maxLength={maxNumber ? 3 : null}
            selectionColor={Color.WHITE}
          />
        </View>
      </View>
    );
  }
}

TextInputComponent.defaultProps = {
  ...TouchableOpacity.defaultProps,
  textColor: Color.WHITE,
  textSize: Constants.NORMAL,
  btn_block: true,
  mbottom: 0,
  mleft: 0,
  mright: 0,
  pleft: 0,
  pright: 0,
  center: false,
  borderColor: Color.PRIMARY,
  bordered: false,

  ...TextInput.defaultProps,
  multiline: false,
  secureTextEntry: false,
  placeholder: '',
  value: '',
  keyboardType: 'default',
  editable: true,
};
TextInputComponent.propTypes = {
  ...TouchableOpacity.propTypes,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  borderColor: PropTypes.string,

  btn_block: PropTypes.bool,
  borderRadius: PropTypes.number,
  mtop: PropTypes.number,
  mbottom: PropTypes.number,
  mleft: PropTypes.number,
  mright: PropTypes.number,
  pleft: PropTypes.number,
  pright: PropTypes.number,
  center: PropTypes.bool,
  bordered: PropTypes.bool,

  ...TextInput.propTypes,
  isMultiline: PropTypes.bool,
  isSecureText: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  keyboardType: PropTypes.string,
  isEditable: PropTypes.bool,
};
export default TextInputComponent;
