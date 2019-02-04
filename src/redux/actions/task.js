import { createActions } from 'redux-actions'
import { GET_TASKS, ADD_TASK, REMOVE_TASK } from '../types';
import { getTasksService, addTaskService, removeTaskService } from '../../services/taskService';

const {
  getTasks: getTasksAction,
  addTask: addTaskAction,
  removeTask: removeTaskAction
} = createActions(GET_TASKS, ADD_TASK, REMOVE_TASK);

export const getTasks = () => dispatch => dispatch(getTasksAction({ promise: getTasksService() }));
export const addTask = (task) => dispatch => dispatch(addTaskAction({ promise: addTaskService(task) }));
export const removeTask = (task) => dispatch => dispatch(removeTaskAction({ promise: removeTaskService(task) }));
