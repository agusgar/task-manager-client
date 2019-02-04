import { handleActions } from 'redux-actions';
import { get } from 'lodash';

import {
  ADD_TASK_FULFILLED, ADD_TASK_REJECTED,
  GET_TASKS_FULFILLED, GET_TASKS_PENDING, GET_TASKS_REJECTED,
} from '../types';

export default handleActions(
  {
    [GET_TASKS_FULFILLED]: (state, action) => ({
      ...state,
      list: get(action, 'payload.data.tasks'),
      loading: false,
    }),
    [GET_TASKS_PENDING]: state => ({
      ...state,
      loading: true,
    }),
    [GET_TASKS_REJECTED]: (state, action) => ({
      ...state,
      error: true,
    }),

    [ADD_TASK_FULFILLED]: (state, action) => ({
      ...state,
      list: [...state.list, get(action, 'payload.data')],
    }),
    [ADD_TASK_REJECTED]: (state, action) => ({
      ...state,
      error: true,
    }),
  },
  { loading: true },
);