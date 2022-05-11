import axios from 'axios';

export let API;

const BASE_URL = 'http://api.football-data.org/v2/';

export const initAPI = (): void => {
  API = axios.create({
    baseURL: BASE_URL,
    timeout: 40000,
  });
};
