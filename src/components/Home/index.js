import React from 'react';
import './index.scss';

import { getTasks, addTask, removeTask } from '../../redux/actions';
import { connect } from 'react-redux';
import TaskAdd from '../TaskAdd';
import TaskList from '../TaskList';

class Home extends React.Component {
  componentDidMount() {
    const { getTasks } = this.props;
    getTasks();
  }

  render() {
    const { tasks, loading, addTask, removeTask } = this.props;

    return (
      <div className="home">
        <TaskAdd onAdd={addTask}/>
        {!loading && <TaskList tasks={tasks} onRemove={removeTask} />}
      </div>
    );
  }
}

const mapStateToProps = ({ task }) => {
  return {
    loading: task.loading,
    tasks: task.list,
  }
};

const mapDispatchToProps = dispatch => ({
  getTasks() {
    return dispatch(getTasks());
  },
  addTask(task) {
    return dispatch(addTask(task));
  },
  removeTask(task) {
    return dispatch(removeTask(task));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
