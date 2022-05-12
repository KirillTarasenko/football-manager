import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './teams';
import { applyMiddleware } from 'redux';

const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: { teams: teamsReducer },
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
