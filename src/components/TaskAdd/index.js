import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import './index.scss';

function TaskAdd({ onAdd }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ name: taskName });
    setTaskName('');
  };

  return(
    <div className="task-add">
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Task name"
          onChange={(event) => setTaskName(event.target.value)}
          value={taskName}
        />
      </form>
    </div>
  );
}

TaskAdd.propTypes = {
  onAdd: PropTypes.func.isRequired,
}

export default TaskAdd;