import { API } from '.';
import { IMatches, ITeamAPI, ITeamsAPI } from './interfaces/teams';

export const getTeams = (): Promise<ITeamsAPI> => {
  return API.get('teams');
};

export const getTeamInfo = (id: number): Promise<ITeamAPI> => {
  return API.get(`teams/${id}`);
};

export const getTeamMatches = (id: number): Promise<IMatches> => {
  return API.get(`teams/${id}/matches`, { params: { status: 'SCHEDULED' } });
};
