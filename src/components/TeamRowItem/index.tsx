import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ITeam } from '../../api/interfaces/teams';
import { INFO } from '../../constants/routes';
import { navigate } from '../../screens';
import { SCREEN_WIDTH } from '../../utils/ui';
import CrestImage, { IMAGE_SIZE } from '../CrestImage';

type IProps = {
  item: ITeam;
};
const FREE_SPACE_SIZE = 10;
const BASE_WIDTH = (SCREEN_WIDTH - FREE_SPACE_SIZE) / 2;

const TeamRowItem = ({ item }: IProps): JSX.Element | null => {
  const { crestUrl, shortName, id } = item;
  const handlePress = useCallback(() => {
    navigate(INFO, { shortName, id });
  }, [shortName, id]);
  if (!item?.id) return null;
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <CrestImage crestUrl={crestUrl} />
      <Text numberOfLines={2} style={{ width: BASE_WIDTH - IMAGE_SIZE - FREE_SPACE_SIZE * 2 }}>
        {shortName}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(TeamRowItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(33,33,33,0.35)',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 5,
    paddingLeft: 5,
    width: BASE_WIDTH,
    minHeight: IMAGE_SIZE,
    marginBottom: 10,
  },
});
