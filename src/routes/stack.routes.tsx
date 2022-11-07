import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { ForgotPassword } from '../screens/ForgotPassword';
import { NewPassword } from '../screens/NewPassword';
import { ConfirmEmail } from '../screens/ConfirmEmail';
import { Home } from '../screens/Home';

const { Screen, Navigator } = createNativeStackNavigator();

const StackRoutes = () => {
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='signin' component={SignIn} />
      <Screen name='signup' component={SignUp} />
      <Screen name='forgotPassword' component={ForgotPassword} />
      <Screen name='newPassword' component={NewPassword} />
      <Screen name='confirmEmail' component={ConfirmEmail} />
      <Screen name='home' component={Home} />
    </Navigator>
  )
}


export default StackRoutes;