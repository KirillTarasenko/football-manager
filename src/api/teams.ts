import { API } from '.';

export type ITeam = {
  address: string;
  clubColors: string;
  crestUrl: string;
  email: string;
  founded: number;
  id: number;
  lastUpdated: string;
  name: string;
  shortName: string;
  tla: string;
  venue: string;
};

type ITeamsAPI = {
  data: {
    count: number;
    teams: ITeam[];
  };
};

type IArea = {
  id: number;
  name: string;
};

export const ROLE = {
  PLAYER: 'PLAYER',
};
export type ISquad = {
  countryOfBirth: string;
  dateOfBirth: string;
  id: number;
  name: string;
  nationality: string;
  position: string;
  role: typeof ROLE | null;
  shirtNumber: number | null;
};
export type ICompetition = {
  area: IArea;
  code: string;
  id: number;
  lastUpdated: string;
  name: string;
  plan: string;
};

export type ITeamDetail = {
  activeCompetitions: ICompetition[];
  address: string;
  area: IArea;
  clubColors: string;
  crestUrl: string;
  email: string;
  founded: 1882;
  id: 73;
  lastUpdated: string;
  name: string;
  phone: string;
  shortName: string;
  tla: string;
  venue: string;
  website: string;
  squad: ISquad[];
};
type ITeamAPI = {
  data: ITeamDetail;
};

export const getTeams = (): Promise<ITeamsAPI> => {
  return API.get('teams');
};

export const getTeamInfo = (id: number): Promise<ITeamAPI> => {
  return API.get(`teams/${id}`);
};
type IPerson = {
  id: number;
  name: string;
  position: string;
  shirtNumber: number;
};

export type IMatchTeam = {
  id: number;
  name: string;
  coach: IPerson;
  captain: IPerson;
  lineup: IPerson[];
  bench: IPerson[];
};

export type IMatch = {
  id: number;
  competition: {
    id: number;
    name: string;
  };
  status: 'FINISHED';
  group: 'Group F';
  lastUpdated: string;
  referees: {
    id: number;
    name: string;
    nationality: string | null;
  }[];
  homeTeam: IMatchTeam;
  awayTeam: IMatchTeam;
  score: any;
  utcDate: string;
  goals: any[];
  bookings: {
    minute: number;
    team: ITeam;
    player: any;
    card: string;
  }[];
  substitutions: any[];
};

type IMatches = {
  data: {
    count: number;
    filters: any;
    matches: IMatch[];
  };
};
export const getTeamMatches = (id: number): Promise<IMatches> => {
  return API.get(`teams/${id}/matches`, { params: { status: 'SCHEDULED' } });
};
