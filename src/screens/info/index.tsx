import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { IMatch, ITeamDetail } from '../../api/interfaces/teams';
import { getTeamInfo, getTeamMatches } from '../../api/teams';
import ActiveCompetitionsList from '../../components/ActiveCompetitionsList';
import CrestImage from '../../components/CrestImage';
import Loading from '../../components/Loading';
import MatchesList from '../../components/MatchesList';
import SquadsList from '../../components/SquadsList';

export function InfoScreen({ navigation, route }) {
  const { shortName, id } = route.params;
  navigation.setOptions({ title: shortName });

  const [teamInfo, setTeamInfo] = React.useState<ITeamDetail | null>(null);
  const [matchesInfo, setMatchesInfo] = React.useState<{
    count: number;
    filters: any;
    matches: IMatch[];
  } | null>(null);
  React.useEffect(() => {
    Promise.all([getTeamInfo(id), getTeamMatches(id)]).then(([teamInfoData, matchesData]) => {
      setTeamInfo(teamInfoData.data);
      setMatchesInfo(matchesData.data);
    });
  }, [id]);
  const { squad = [], activeCompetitions = [], crestUrl, id: idTeam = null, name } = teamInfo || {};
  return idTeam ? (
    <ScrollView style={styles.root} contentContainerStyle={styles.rootContent}>
      <CrestImage crestUrl={crestUrl} size={150} />
      <Text style={styles.nameTeam}>{name}</Text>
      <MatchesList matchesInfo={matchesInfo?.matches} />
      <SquadsList squadPlayers={squad} />
      <ActiveCompetitionsList activeCompetitions={activeCompetitions} />
    </ScrollView>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  nameTeam: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  root: { flex: 1 },
  rootContent: { alignItems: 'center', paddingTop: 20, paddingBottom: 30 },
});
