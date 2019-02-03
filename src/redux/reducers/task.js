import { handleActions } from 'redux-actions';
import { get } from 'lodash';

import { GET_TASKS_FULFILLED, GET_TASKS_PENDING, GET_TASKS_REJECTED } from '../types';

export default handleActions(
  {
    [GET_TASKS_FULFILLED]: (state, action) => ({ ...state, list: get(action, 'payload.data.tasks') }),
    [GET_TASKS_PENDING]: state => ({ ...state, loading: true }),
    [GET_TASKS_REJECTED]: (state, action) => ({ ...state, error: true }),
  },
  {},
);