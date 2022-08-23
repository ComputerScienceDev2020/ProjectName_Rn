import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Images from '../../assets/App';
import {moderateScale} from '../../helper';

const InputText = props => {
  const {
    title,
    placeholder,
    defaultValue,
    onChangeValue,
    isShowHidden,
    marginTop,
  } = props;
  const [value, setValue] = React.useState(defaultValue || '');
  const [isShow, setIsShow] = React.useState(isShowHidden || false);

  const setShow = show => {
    setIsShow(show);
  };

  const onUpdateText = text => {
    setValue(text);
    onChangeValue(text);
  };

  return (
    <View style={{marginTop}}>
      <View style={styles.viewTextTitle}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input1}
          secureTextEntry={isShow}
          placeholder={placeholder}
          onChangeText={text => onUpdateText(text)}
          value={value}
        />
        <ViewEyeHidden
          isShowHidden={isShowHidden}
          isShow={isShow}
          setShow={show => setShow(show)}
        />
      </View>
    </View>
  );
};

const ViewEyeHidden = ({isShowHidden, isShow, setShow}) => {
  if (isShowHidden) {
    return (
      <TouchableOpacity
        onPress={() => {
          setShow(!isShow);
        }}>
        <Image style={styles.eye} source={Images.eye} />
      </TouchableOpacity>
    );
  } else return <View />;
};

export default InputText;
const styles = StyleSheet.create({
  input1: {
    fontSize: moderateScale(16),
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(14),
    color: '#4F4F4F',
    width: moderateScale(280),
    marginRight: moderateScale(12),
  },
  textTitle: {
    color: '#1b1a1a',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(20),
    fontWeight: '500',
  },
  viewInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D3DEE8',
    width: moderateScale(319),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(8),
  },
  eye: {
    height: moderateScale(16),
    width: moderateScale(16),
  },
  viewTextTitle: {
    marginBottom: moderateScale(8),
    width: moderateScale(319),
    alignSelf: 'center',
  },
});
