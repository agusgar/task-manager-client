import React from 'react';
import PropTypes from 'prop-types';

function TaskItemBadge({ status }) {
  return (
    <div className="task-item-badge">
      BADGE
    </div>
  );
}

TaskItemBadge.propTypes = {
  status: PropTypes.string.isRequired,
}

export default TaskItemBadge;
