import React from 'react';
import { View, Keyboard, TextInput } from 'react-native';
import { TextComponent } from '..';
import { Color, Constants } from '../../common/styles';
import styles from './styles';

class ToastComponent extends React.Component {
  render() {
    const btnTextStylesArray = [];
    const {
      isDisplay,
      children,
    } = this.props;

    btnTextStylesArray.push({
      color: Color.WHITE,
      fontFamily: Constants.FONT_MEDIUM,
      fontSize: Constants.NORMAL,
    });

    return (
      isDisplay
        ?
        <View style={styles.styleView}>
          <TextComponent containerStyle={{ textAlign: 'center' }} style={btnTextStylesArray} normal regularFont>
            {children}
          </TextComponent>
        </View>
        :
        null
    );
  }
}
export default ToastComponent;
