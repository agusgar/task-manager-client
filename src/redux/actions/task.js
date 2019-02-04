import { createActions } from 'redux-actions'
import { GET_TASKS, ADD_TASK } from '../types';
import { getTasksService, addTaskService } from '../../services/taskService';

const {
  getTasks: getTasksAction,
  addTask: addTaskAction,
} = createActions(GET_TASKS, ADD_TASK);

export const getTasks = () => dispatch => dispatch(getTasksAction({ promise: getTasksService() }));
export const addTask = (task) => dispatch => dispatch(addTaskAction({ promise: addTaskService(task) }));
