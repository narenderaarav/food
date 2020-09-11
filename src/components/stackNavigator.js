// ./navigation/StackNavigator.js

import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from './navigation'
import LoginScreen from "../screens/login";
import OtpScreen from "../screens/otp";
import ForgotScreen from "../screens/forgot";
import RegisterScreen from "../screens/register";
import HomeScreen from '../screens/home';
import EmailVarification from '../screens/EmailVarification'

import Profile from '../screens/Profile'
import Favourite from '../screens/Favourite'
import Order from '../screens/Order'
import Subscription from '../screens/Subscription'



const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};
const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'} screenOptions={screenOptionStyle}>
        <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Otp" component={OtpScreen} />
          <Stack.Screen name="Forgot" component={ForgotScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="EmailVarification" component={EmailVarification} />

    
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
         <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
         <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const FavouriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
         <Stack.Screen name="Favourite" component={Favourite} />
    </Stack.Navigator>
  );
}

const OrderStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
         <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
}
const SubscriptionStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
         <Stack.Screen name="Subscription" component={Subscription} />
    </Stack.Navigator>
  );
}


export { 
  MainStackNavigator, 
  ContactStackNavigator, 
  ProfileStackNavigator, 
  FavouriteStackNavigator,
  OrderStackNavigator,
  SubscriptionStackNavigator
};