import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { getTeamInfo, getTeamMatches, ROLE } from '../../api/teams';
import ActiveCompetitionsList from '../../components/ActiveCompetitionsList';
import CrestImage from '../../components/CrestImage';
import Loading from '../../components/Loading';
import MatchesList from '../../components/MatchesList';
import SquadsList from '../../components/SquadsList';

export function InfoScreen({ navigation, route }) {
  const { shortName, id } = route.params;
  navigation.setOptions({ title: shortName });

  const [teamInfo, setTeamInfo] = React.useState(null);
  const [matchesInfo, setMatchesInfo] = React.useState(null);
  React.useEffect(() => {
    Promise.all([getTeamInfo(id), getTeamMatches(id)]).then(([teamInfoData, matchesData]) => {
      setTeamInfo(teamInfoData.data);
      setMatchesInfo(matchesData.data);
    });
  }, []);
  const { squad = [], activeCompetitions = [], crestUrl, id: idTeam = null, name } = teamInfo || {};
  const squadPlayers = squad?.filter(member => member.role === ROLE.PLAYER);
  return idTeam ? (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ alignItems: 'center', paddingTop: 20, paddingBottom: 30 }}
    >
      <CrestImage crestUrl={crestUrl} size={150} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{name}</Text>
      <MatchesList matchesInfo={matchesInfo?.matches} />
      <SquadsList squadPlayers={squadPlayers} />
      <ActiveCompetitionsList activeCompetitions={activeCompetitions} />
    </ScrollView>
  ) : (
    <Loading />
  );
}
