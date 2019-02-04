import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem';

import './index.scss';

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <div className="task-items-container">
        <div className="task-items-header">
          <h2>All Tasks</h2>
        </div>
        {tasks.map(task => <TaskItem key={task.id} {...task} />)}
      </div>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
}

export default TaskList;
