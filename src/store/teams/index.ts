import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITeam } from '../../api/teams';

interface IDictionary<T> {
  [id: string]: T;
}
interface TeamsState {
  list: ITeam[];
  listByIds: IDictionary<ITeam> | null;
}

const initialState = { list: [], listByIds: {} } as TeamsState;

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    saveTeams(state, action: PayloadAction<ITeam[]>) {
      state.list = action.payload;
      state.listByIds = action.payload.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
    },
    cleanTeams(state) {
      state.list = [];
    },
  },
});

export const { saveTeams, cleanTeams } = teamSlice.actions;
export default teamSlice.reducer;
