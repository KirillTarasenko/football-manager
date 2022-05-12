import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { ISquad } from '../../api/teams';

type IProps = {
  squadPlayers: ISquad[];
};

const SquadsList = ({ squadPlayers }: IProps): JSX.Element | null => {
  if (squadPlayers?.length === 0) return null;
  const keyExtractor = useCallback(item => item.id, []);
  return (
    <>
      <Text style={styles.title}>{'Squads:'}</Text>
      <FlatList
        data={squadPlayers}
        numColumns={3}
        scrollEnabled={false}
        renderItem={({ item: squad }) => (
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{squad.name}</Text>
          </View>
        )}
        keyExtractor={keyExtractor}
      />
    </>
  );
};

export default React.memo(SquadsList);

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 5 },
  name: {
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  nameContainer: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 50,
    padding: 3,
  },
});
