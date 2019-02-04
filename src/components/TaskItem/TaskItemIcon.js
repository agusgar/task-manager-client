import React from 'react';
import PropTypes from 'prop-types';

function TaskItemIcon({ status }) {
  return (
    <div className="task-item-icon">
      ICON
    </div>
  );
}

TaskItemIcon.propTypes = {
  status: PropTypes.string.isRequired,
}

export default TaskItemIcon;
