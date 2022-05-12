import { RootState } from '..';

export const selectTeamsInfo = (store: RootState) => store.teams.listByIds;
