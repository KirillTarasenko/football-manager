import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { ICompetition } from '../../api/teams';

type IProps = {
  activeCompetitions: ICompetition[];
};

const ActiveCompetitionsList = ({ activeCompetitions }: IProps): JSX.Element | null => {
  if (activeCompetitions?.length === 0) return null;
  const keyExtractor = useCallback(item => item.id, []);
  return (
    <>
      <Text style={styles.title}>{'Active Competitions:'}</Text>
      <FlatList
        data={activeCompetitions}
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

export default React.memo(ActiveCompetitionsList);

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
    width: 360,
    height: 50,
    padding: 3,
  },
});
