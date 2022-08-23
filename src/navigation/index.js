import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from '../screens/login';
import {NavigationController} from './NavigationController';
import Information from '../screens/information';
import ForgetPassword from '../screens/forgetPassword';
import Account from '../screens/account';

const Stack = createNativeStackNavigator();

export const RoutesName = {
  LogIn: 'LogIn',
  Information: 'Information',
  ForgetPassword: 'ForgetPassword',
  Account: 'Account',
};

const ApplicationNavigator = () => {
  return (
    <NavigationContainer ref={NavigationController.navigationRef}>
      <Stack.Navigator
        initialRouteName={RoutesName.LogIn}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          key={RoutesName.LogIn}
          name={RoutesName.LogIn}
          component={LogIn}
        />
        <Stack.Screen
          key={RoutesName.Information}
          name={RoutesName.Information}
          component={Information}
        />
        <Stack.Screen
          key={RoutesName.ForgetPassword}
          name={RoutesName.ForgetPassword}
          component={ForgetPassword}
        />
        <Stack.Screen
          key={RoutesName.Account}
          name={RoutesName.Account}
          component={Account}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
