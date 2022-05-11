import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from './src/screens/dashboard';
import { InfoScreen } from './src/screens/info';
import { HOME, INFO, LOADING } from './src/constants/routes';
import { LoadingScreen } from './src/screens/loading';

const Stack = createNativeStackNavigator();
const App: () => JSX.Element = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LOADING}>
        <Stack.Screen name={LOADING} component={LoadingScreen} />
        <Stack.Screen name={HOME} component={HomeScreen} />
        <Stack.Screen name={INFO} component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
