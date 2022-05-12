import React, { useMemo } from 'react';
import { View } from 'react-native';

import FastImage from 'react-native-fast-image';
import { SvgUri } from 'react-native-svg';
import { BALL } from '../../constants/images';
import { isSVG } from '../../utils/checker';

type IProps = {
  crestUrl?: string;
  size?: number;
};

export const IMAGE_SIZE = 50;

const CrestImage = ({ crestUrl, size = IMAGE_SIZE }: IProps): JSX.Element | null => {
  const imageStyle = useMemo(() => ({ width: size, height: size, marginRight: 10 }), [size]);
  if (!crestUrl) return null;
  return isSVG(crestUrl) ? (
    <View style={imageStyle}>
      <SvgUri width="100%" height="100%" uri={crestUrl} />
    </View>
  ) : (
    <FastImage
      source={crestUrl ? { uri: crestUrl, cache: FastImage.cacheControl.immutable } : BALL}
      style={imageStyle}
    />
  );
};

export default React.memo(CrestImage);
