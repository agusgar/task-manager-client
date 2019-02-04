import axios from 'axios';

export function getTasksService() {
  return axios.get('/api/v1/tasks.json');
}

export function addTaskService(task) {
  return axios.post('/api/v1/tasks.json', task);
}
