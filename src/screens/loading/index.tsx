import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { initAPI } from '../../api';
import { HOME } from '../../constants/routes';

export function LoadingScreen({ navigation }): JSX.Element {
  React.useEffect(() => {
    initAPI().then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: HOME }],
        }),
      );
    });
  }, [navigation]);
  return (
    <View style={styles.root}>
      <Text>LoadingScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
