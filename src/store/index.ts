import { configureStore } from '@reduxjs/toolkit';
import reduxFlipper from 'redux-flipper';
import teamsReducer from './teams';

const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  middlewares.push(reduxFlipper() as never);
}

export const store = configureStore({
  reducer: { teams: teamsReducer },
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
