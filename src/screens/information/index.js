import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {getWidth} from '../../helper';

const Information = () => {
  const [ival, setIval] = useState(0); // state to hold sum
  const [text1, setText1] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [text2, setText2] = React.useState('');

  const handleInput1 = val => {
    setText1(val);
    setIval(ival + parseInt(val));
  };

  const handleInput2 = val => {
    // handles input
  };

  const handleInput3 = val => {
    // handles input
    setText2(val);
    setIval(ival + parseInt(val));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        // onChangeText={v => {
        //   setText(v);
        // }}
        onChangeText={text => {
          setText1(text);
          setIval(ival + parseInt(text));
        }}
        value={text1}
      />

      <TextInput
        style={styles.input1}
        keyboardType={'numeric'}
        onChangeText={value => {
          setNumber(value);
          setIval(ival + parseInt(value));
        }}
        value={number}
      />
      <TextInput
        style={styles.input2}
        keyboardType={'numeric'}
        onChangeText={text => handleInput3(text)}
        value={text2}
      />

      <TouchableOpacity
        style={{marginTop: 20, alignSelf: 'center'}}
        onPress={() => alert(ival)}>
        <Text>{ival}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Information;
const styles = StyleSheet.create({
  input: {
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    borderBottomWidth: 1,
    width: getWidth(),
  },
  input1: {
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    borderBottomWidth: 1,
    width: getWidth(),
  },
  input2: {
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    borderBottomWidth: 1,
    width: getWidth(),
  },
});
