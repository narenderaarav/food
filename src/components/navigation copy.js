// ./navigation/TabNavigator.js

import React from 'react';
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
const Tab = createBottomTabNavigator();

class BottomTabNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = faUser;
            color = '#000';
            if (route.name === 'Home') {
              iconName = focused ? faHome : faHome;
            } else if (route.name === 'Login') {
              iconName = focused ? faUser : faUser;
            } else if (route.name === 'Video') {
              iconName = focused ? faVideo : faVideo;
            } else if (route.name === 'Search') {
              iconName = focused ? faSearch : faSearch;
            } else if (route.name === 'Notifications') {
              iconName = focused ? faBell : faBell;
            } else if (route.name === 'More') {
              iconName = focused ? faBars : faBars;
            }

            return <FontAwesomeIcon icon={iconName} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ffffff',
          inactiveTintColor: '#ffcc00',
          style: {
            backgroundColor: '#1e284c',
            borderColor: '#1e284c',
            top: 0,
          },
        }}>
        <Tab.Screen name="Home" component={ContactStackNavigator} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
        <Tab.Screen name="Favourite" component={FavouriteStackNavigator} />
        <Tab.Screen name="Order" component={OrderStackNavigator} />
        <Tab.Screen name="Subscription" component={SubscriptionStackNavigator} />
      </Tab.Navigator>
    );
  }
}

export default BottomTabNavigator;
