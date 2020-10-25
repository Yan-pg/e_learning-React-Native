import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import AppProvider from './hooks';
import AppRoutes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#6548A3" translucent />
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </NavigationContainer>
);

export default App;
