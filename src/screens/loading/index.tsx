import * as React from 'react';
import { View, Text } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { initAPI } from '../../api';
import { HOME } from '../../constants/routes';

export function LoadingScreen({ navigation }) {
  React.useEffect(() => {
    initAPI().then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: HOME }],
        }),
      );
    });
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>LoadingScreen</Text>
    </View>
  );
}
