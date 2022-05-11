import * as React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { getTeams } from '../../api/teams';
import TeamRowItem from '../../components/TeamRowItem';
import { SCREEN_WIDTH } from '../../utils/ui';
import * as Animatable from 'react-native-animatable';
import Loading from '../../components/Loading';

export function HomeScreen() {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    getTeams().then(data => {
      setList(data.data.teams);
    });
  }, []);
  const renderTeam = React.useCallback(({ item }) => <TeamRowItem item={item} />, []);
  const keyExtractor = React.useCallback(item => item.id, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      {list?.length ? (
        <Animatable.View animation="fadeIn" delay={50}>
          <FlatList
            numColumns={2}
            renderItem={renderTeam}
            data={list}
            contentContainerStyle={{ paddingVertical: 20 }}
            columnWrapperStyle={{ width: SCREEN_WIDTH, justifyContent: 'space-around' }}
            keyExtractor={keyExtractor}
          />
        </Animatable.View>
      ) : (
        <Loading />
      )}
    </View>
  );
}
