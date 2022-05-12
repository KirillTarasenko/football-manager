import axios from 'axios';
import { Alert } from 'react-native';

export let API;

const BASE_URL = 'http://api.football-data.org/v2/';

export const initAPI = async (): Promise<void> => {
  API = axios.create({
    baseURL: BASE_URL,
    headers: { 'X-Auth-Token': '14886e707d86484281c0062f1dcbf988' },
  });
  API.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      if (error?.response?.status !== 429) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
      Alert.alert('Reach limit requests =(', error?.response?.data?.message);
    },
  );
};
