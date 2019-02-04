import React from 'react';
import PropTypes from 'prop-types';

import TaskItemIcon from './TaskItemIcon';
import TaskItemBadge from './TaskItemBadge';
import './index.scss';

function TaskItem({ task }) {
  const { name, description } = task;

  return (
    <div className="task-item">
      <div className="task-item-body">
        <div className="task-item-icon">
          <TaskItemIcon status="" />
        </div>
        <div className="task-item-content">
          <div className="task-item-name">{name}</div>
          <div className="task-item-description">{description}</div>
        </div>
        <div className="task-item-badge">
          <TaskItemBadge status="pending"/>
        </div>
      </div>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
}

export default TaskItem;
