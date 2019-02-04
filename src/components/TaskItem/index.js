import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';

import TaskItemIcon from './TaskItemIcon';
import TaskItemBadge from './TaskItemBadge';
import './index.scss';

function TaskItem({ task, onRemove }) {
  const { name, description } = task;

  return (
    <Tooltip title="Finish task" enterDelay={500}>
      <div className="task-item" onClick={() => onRemove(task)}>
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
    </Tooltip>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default TaskItem;
