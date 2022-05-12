import dayjs from 'dayjs';
import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { IMatch } from '../../api/interfaces/teams';
import Pair from './Pair';

type IProps = {
  matchesInfo?: IMatch[];
};

const MatchesList = ({ matchesInfo }: IProps): JSX.Element | null => {
  const keyExtractor = useCallback(item => item.id, []);
  const renderItem = useCallback(
    ({ item: match }) => (
      <View style={styles.nameContainer}>
        <Text style={styles.championship}>{`Championship: ${match.competition.name}`}</Text>
        <Pair homeTeam={match.homeTeam} awayTeam={match.awayTeam} />
        <Text style={styles.name}>{`Date: ${dayjs(match.utcDate).format(
          'DD/MM/YYYY HH:mm',
        )}`}</Text>
      </View>
    ),
    [],
  );
  if (matchesInfo?.length === 0) return null;
  return (
    <>
      <Text style={styles.title}>{'Matches:'}</Text>
      {matchesInfo?.length !== 0 ? (
        <FlatList
          data={matchesInfo}
          scrollEnabled={false}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      ) : (
        <Text>No scheduled matches</Text>
      )}
    </>
  );
};

export default React.memo(MatchesList);

const styles = StyleSheet.create({
  championship: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  name: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '500',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  nameContainer: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    minHeight: 80,
    padding: 10,
    marginBottom: 15,
    borderRadius: 20,
  },
  title: { fontSize: 26, fontWeight: 'bold', marginTop: 20, marginBottom: 15 },
});
