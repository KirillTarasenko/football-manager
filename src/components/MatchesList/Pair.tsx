import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IMatchTeam } from '../../api/teams';
import { useSelector } from '../../hooks/store';
import { selectTeamById } from '../../store/teams/selectors';
import CrestImage from '../CrestImage';

type IProps = {
  homeTeam: IMatchTeam;
  awayTeam: IMatchTeam;
};

const Pair = ({ homeTeam, awayTeam }: IProps): JSX.Element | null => {
  if (!homeTeam?.id || !awayTeam?.id) return null;
  const homeTeamInfo = useSelector(state => state.teams.listByIds[homeTeam?.id]);
  const awayTeamInfo = useSelector(state => state.teams.listByIds[awayTeam?.id]);
  return (
    <View style={styles.nameContainer}>
      <View style={styles.ais}>
        <CrestImage crestUrl={homeTeamInfo.crestUrl} />
        <Text style={styles.name}>{homeTeam.name}</Text>
      </View>
      <Text style={styles.name}>{'-'}</Text>
      <View style={styles.ais}>
        <CrestImage crestUrl={awayTeamInfo.crestUrl} />
        <Text style={styles.name}>{awayTeam.name}</Text>
      </View>
    </View>
  );
};

export default React.memo(Pair);

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 5 },
  name: {
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: 4,
  },
  ais: { alignItems: 'center', width: 140 },
  nameContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 140,
    width: 360,
  },
});
