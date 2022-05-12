import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = (): JSX.Element | null => {
  return <LottieView loop autoPlay source={require('../../../assets/animations/anim-ball.json')} />;
};

export default React.memo(Loading);
