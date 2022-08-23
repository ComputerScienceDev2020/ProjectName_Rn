import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';

import Images from '../../assets/App';
import {RoutesName} from '../../navigation';
import {NavigationController} from '../../navigation/NavigationController';
import {moderateScale} from '../../helper';
import Button from '../../components/Button';
import InputText from '../../components/InputText';

const LogIn = () => {
  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.tinyLogo} source={Images.logo} />
        <View style={styles.body}>
          <Image style={styles.tinyLogo1} source={Images.logo2} />
          <View style={styles.viewNameContent}>
            <Text style={styles.textContent}>
              Sign In your account to continue
            </Text>
          </View>
          <InputText
            marginTop={moderateScale(28)}
            title={'Your name'}
            defaultValue={text}
            onChangeValue={val => setText(val)}
          />
          <InputText
            marginTop={moderateScale(14)}
            title={'Password'}
            isShowHidden={true}
            defaultValue={password}
            onChangeValue={val => setPassword(val)}
          />
          <Button
            text="Log In"
            marginTop={moderateScale(20)}
            marginBottom={moderateScale(6)}
            textColor={'#fff'}
            backgroundColor="#025DD7"
            width={moderateScale(339)}
            onPress={() => {
              NavigationController.navigate(RoutesName.Information);
            }}
          />
          <Button
            text="Forgot Password"
            textColor={'#4F4F4F'}
            width={moderateScale(339)}
            onPress={() => {
              NavigationController.navigate(RoutesName.ForgetPassword);
            }}
          />

          <Button
            text="Create an account"
            marginTop={moderateScale(14)}
            textColor={'#025DD7'}
            backgroundColor={'#FFFFFF'}
            borderColor="#2F80ED"
            width={moderateScale(339)}
            borderWidth={1}
            marginBottom={moderateScale(20)}
            onPress={() => NavigationController.navigate(RoutesName.Account)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textContent: {
    fontSize: moderateScale(15),
    color: '#828282',
  },
  container: {
    backgroundColor: '#f1f4f6',
    flex: 1,
    justifyContent: 'center',
  },
  tinyLogo: {
    marginTop: moderateScale(56),
    alignSelf: 'center',
    marginBottom: moderateScale(24),
    height: moderateScale(214),
    width: moderateScale(180),
  },
  body: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: moderateScale(32),
    borderTopLeftRadius: moderateScale(32),
  },
  tinyLogo1: {
    marginTop: moderateScale(28),
    marginBottom: moderateScale(14),
    marginLeft: moderateScale(28),
    height: moderateScale(26),
    width: moderateScale(162),
  },
  viewNameContent: {
    marginLeft: moderateScale(28),
    marginRight: moderateScale(28),
  },
  viewYourName: {
    marginTop: moderateScale(28),
  },
});

export default LogIn;
