import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const selectTeamsInfo = (store: RootState) => store.teams.listByIds;

export const selectTeamById = createSelector(
  selectTeamsInfo,
  (_, props) => props.id,
  (teams, idTeam) => teams?.[idTeam],
);
