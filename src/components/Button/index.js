import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {moderateScale} from '../../helper';

const Button = props => {
  const {
    text,
    textColor,
    borderWidth,
    borderColor,
    backgroundColor,
    width,
    onPress,
    marginBottom,
    marginTop,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          width: width,
          borderColor: borderColor,
          borderWidth: borderWidth || 0,
          marginBottom: marginBottom || 0,
          marginTop: marginTop || 0,
          borderWidth: borderWidth || 0,
        },
      ]}>
      <Text style={[styles.textStyle, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    paddingVertical: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
  },
});
