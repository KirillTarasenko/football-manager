import axios from 'axios';

export let API;

const BASE_URL = 'http://api.football-data.org/v2/';

export const initAPI = async (): Promise<void> => {
  API = axios.create({
    baseURL: BASE_URL,
    headers: { 'X-Auth-Token': '14886e707d86484281c0062f1dcbf988' },
  });
};
