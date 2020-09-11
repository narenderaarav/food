// ./navigation/TabNavigator.js

import React from 'react';
import { View, Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faPlus,
  faAddressBook,
  faVideo,
  faClipboard,
  faShoppingCart,
  faHome,
  faUser,
  faSearch,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import {
  MainStackNavigator,
  ContactStackNavigator,
  ProfileStackNavigator,
  FavouriteStackNavigator,
  OrderStackNavigator,
  SubscriptionStackNavigator
} from './stackNavigator';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
let styleCss = require('../GlobalStyle');

//const Tab = createMaterialBottomTabNavigator();

const Tab = createBottomTabNavigator();

class BottomTabNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const customTabBarStyle = {
      activeTintColor: '#f2ae88',
      labelStyle:{fontSize:12},
      inactiveTintColor: '#8e8e8e',
      style: {backgroundColor: 'white' }
  }
    return (
      <Tab.Navigator
       activeColor="#f2ae88"
        inactiveColor="#8e8e8e"
        initialRouteName="Home"
        tabBarOptions={customTabBarStyle}
        shifting="false"
      >
        <Tab.Screen name="Profile" component={ProfileStackNavigator} 
          options={{
            tabBarLabel:'Profile',
            tabBarIcon:({color}) => (
              <View>
                {
                  color === "#f2ae88" ? 
                  <Image source={require('../../assets/login/profileActive.png')} />
                  :
                  <Image source={require('../../assets/login/profile.png')} />
                }
              </View>
            )
          }}
        />
        <Tab.Screen name="Favourite" component={FavouriteStackNavigator} 
        
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon:({color}) => (
            <View>
              {
                color === "#f2ae88" ? 
                <Image source={require('../../assets/login/favoriteActive.png')} />
                :
                <Image source={require('../../assets/login/favorite.png')} />
              }
            </View>
          )
        }}
        
        />
        <Tab.Screen name="Home" component={ContactStackNavigator} 

        options={{
          tabBarLabel: 'Home',

          tabBarIcon:({color}) => (
            <View style={styleCss.navHome}>
              {
                color === "#f2ae88" ? 
                <Image source={require('../../assets/login/homeActive.png')} />
                :
                <Image source={require('../../assets/login/home.png')} />
              }
            </View>
          )
        }}
        />
        <Tab.Screen name="Order" component={OrderStackNavigator} 
        
        options={{
          tabBarLabel: 'Order',
          tabBarIcon:({color}) => (
            <View>
              {
                color === "#f2ae88" ? 
                <Image source={require('../../assets/login/offerActive.png')} />
                :
                <Image source={require('../../assets/login/offer.png')} />
              }
            </View>
          )
        }}
        />
        <Tab.Screen name="Subscription" component={SubscriptionStackNavigator} 
        
        options={{
          tabBarLabel: 'Subscription',
          tabBarVisible:false,
          tabBarIcon:({color}) => (
            <View>
              {
                color === "#f2ae88" ? 
                <Image source={require('../../assets/login/subscriptionActive.png')} />
                :
                <Image source={require('../../assets/login/subscription.png')} />
              }
            </View>
          )
        }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabNavigator;
