import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { getTeams } from '../../api/teams';
import TeamRowItem from '../../components/TeamRowItem';
import { SCREEN_WIDTH } from '../../utils/ui';
import Loading from '../../components/Loading';
import { saveTeams } from '../../store/teams';
import { useDispatch, useSelector } from '../../hooks/store';

export function HomeScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    getTeams().then(data => {
      console.log('=>', data.data.teams);
      dispatch(saveTeams(data.data.teams));
    });
  }, [dispatch]);

  const list = useSelector(state => state.teams.list);
  const renderTeam = React.useCallback(({ item }) => <TeamRowItem item={item} />, []);
  const keyExtractor = React.useCallback(item => item.id, []);
  return (
    <View style={styles.root}>
      {list?.length ? (
        <Animatable.View animation="fadeIn" delay={50}>
          <FlatList
            numColumns={2}
            renderItem={renderTeam}
            data={list}
            contentContainerStyle={styles.container}
            columnWrapperStyle={styles.column}
            keyExtractor={keyExtractor}
          />
        </Animatable.View>
      ) : (
        <Loading />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  column: { width: SCREEN_WIDTH, justifyContent: 'space-around' },
  container: { paddingVertical: 20 },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
