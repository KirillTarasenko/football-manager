import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from './src/screens/dashboard';
import { InfoScreen } from './src/screens/info';
import { HOME, INFO, LOADING } from './src/constants/routes';
import { LoadingScreen } from './src/screens/loading';
import { initAPI } from './src/api';
import { navigationRef } from './src/screens';
import { Provider } from 'react-redux';
import { store } from './src/store';
const Stack = createNativeStackNavigator();

// module.hot.accept(() => {
//   initAPI();
// });

const App: () => JSX.Element = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={LOADING}>
          <Stack.Screen name={LOADING} component={LoadingScreen} />
          <Stack.Screen name={HOME} component={HomeScreen} options={{ title: 'England Clubs' }} />
          <Stack.Screen name={INFO} component={InfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
