import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {moderateScale, getWidth} from '../../helper';
import Images from '../../assets';
import {NavigationController} from '../../navigation/NavigationController';

const Account = () => {
  const [name, setName] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [retype, setRetype] = React.useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.return}>
            <Text style={styles.text}>Create an account</Text>
            <TouchableOpacity onPress={() => NavigationController.goBack()}>
              <Text style={styles.text1}>Return</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.textText}>Login your account to continue</Text>

          <Text style={styles.Email}>YOUR NAME</Text>
          <TextInput
            style={styles.input}
            onChangeText={val => {
              setName(val);
            }}
            placeholder="YOUR NAME"
            value={name}
          />

          <Text style={styles.Email}>SEX</Text>
          <TextInput
            style={styles.input}
            onChangeText={val => {
              setSex(val);
            }}
            placeholder="SEX"
            value={sex}
          />

          <Text style={styles.Email}>EMAIl</Text>
          <TextInput
            style={styles.input}
            onChangeText={val => {
              setEmail(val);
            }}
            placeholder="Email"
            value={email}
          />

          <Text style={styles.Email}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            onChangeText={val => {
              setPassword(val);
            }}
            placeholder="Password"
            value={password}
          />

          <Text style={styles.Email}>RETYPE PASSWORD</Text>
          <TextInput
            style={styles.input}
            onChangeText={val => {
              setPassword(val);
            }}
            placeholder="Retype Password"
            value={password}
          />
          <TouchableOpacity style={styles.checkLogin}>
            <Image style={styles.vector} source={Images.Vector} />
            <Text style={styles.signUp}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4f6',
  },
  vectorArrow: {
    flexDirection: 'row',
  },
  return: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(28),
  },
  text: {
    color: '#206d8c',
    fontWeight: '500',
    fontSize: moderateScale(24),
  },
  text1: {
    color: '#556A7D',
    fontWeight: '400',
    fontSize: moderateScale(16),
    marginTop: moderateScale(8),
  },
  Email: {
    marginTop: moderateScale(34),
    marginLeft: moderateScale(28),
  },
  input: {
    marginTop: moderateScale(10),
    // backgroundColor: '#D3DEE8',
    borderColor: '#D3DEE8',
    borderWidth: 1,
    borderRadius: moderateScale(8),
    marginHorizontal: moderateScale(28),
  },
  checkLogin: {
    backgroundColor: '#007BB3',
    marginHorizontal: moderateScale(28),
    marginTop: moderateScale(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'center',
    height: moderateScale(48),
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(14),
  },
  signUp: {
    marginLeft: moderateScale(10),
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: '#ffff',
  },
  body: {
    marginTop: moderateScale(120),
  },
  vector1: {
    marginTop: moderateScale(15),
    marginRight: moderateScale(50),
  },
  vector2: {
    marginLeft: moderateScale(20),
  },
  textText: {
    marginHorizontal: moderateScale(28),
    marginTop: moderateScale(6),
  },
});
