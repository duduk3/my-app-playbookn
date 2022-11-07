import React from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import StackRoutes from "./stack.routes";
import { View } from "react-native";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#D4DAA4',
  },
};

const Routes = () => {  
  return (
    <NavigationContainer theme={navTheme}>
      <StackRoutes/>
    </NavigationContainer>
  )
}

export default Routes;
