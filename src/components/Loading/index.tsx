import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { ANIM_BALL } from '../../constants/animations';

const Loading = (): JSX.Element | null => {
  return <LottieView loop autoPlay source={ANIM_BALL} />;
};

export default React.memo(Loading);
