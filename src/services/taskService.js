import axios from 'axios';

export function getTasksService() {
  return axios.get('/api/v1/tasks.json');
}
