import { createActions } from 'redux-actions'
import { GET_TASKS } from '../types';
import { getTasksService } from '../../services/taskService';

const { getTasks: getTasksAction } = createActions(GET_TASKS);

export const getTasks = () => dispatch => dispatch(getTasksAction({ promise: getTasksService() }));
