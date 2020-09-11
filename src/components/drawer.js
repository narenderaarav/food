import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { MainStackNavigator } from "./stackNavigator";
import BottomTabNavigator from "./navigation";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (

    <Drawer.Navigator drawerPosition={'right'} >
       {/* <Drawer.Screen name="Login" component={MainStackNavigator} /> */}
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

