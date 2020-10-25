import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ladding from '../pages/Ladding';
import SignIn from '../pages/SignIn';
import Account from '../pages/Account';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#6548a3'},
    }}>
    <Auth.Screen name="Ladding" component={Ladding} />
    <Auth.Screen name="Account" component={Account} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
