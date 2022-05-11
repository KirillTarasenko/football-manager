import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { getTeamInfo, ITeamDetail, ROLE } from '../../api/teams';
import CrestImage from '../../components/CrestImage';
import Loading from '../../components/Loading';

export function InfoScreen({ navigation, route }) {
  const { shortName, id } = route.params;
  navigation.setOptions({ title: shortName });

  const [teamInfo, setTeamInfo] = React.useState(null);
  React.useEffect(() => {
    getTeamInfo(id).then(data => {
      setTeamInfo(data.data);
    });
  }, []);
  console.log('===>', teamInfo);
  const squadPlayers = teamInfo?.squad?.filter(member => member.role === ROLE.PLAYER);
  return teamInfo?.id ? (
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
      <CrestImage crestUrl={teamInfo.crestUrl} size={150} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{teamInfo.name}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 5 }}>
        {'Squads:'}
      </Text>
      <FlatList
        data={squadPlayers}
        numColumns={3}
        renderItem={({ item: squad }) => (
          <View
            style={{
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 50,
              padding: 3,
            }}
          >
            <Text
              style={{
                textAlignVertical: 'center',
                textAlign: 'center',
              }}
            >
              {squad.name}
            </Text>
          </View>
        )}
        keyExtractor={id => id}
      />
    </View>
  ) : (
    <Loading />
  );
}
