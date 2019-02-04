import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import './index.scss';

function TaskAdd({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ name, description });
    setName('');
    setDescription('');
  };

  return(
    <div className="task-add">
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          fullWidth
          label="Task name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <TextField
          name="description"
          fullWidth
          multiline
          label="Description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
      </form>
    </div>
  );
}

TaskAdd.propTypes = {
  onAdd: PropTypes.func.isRequired,
}

export default TaskAdd;