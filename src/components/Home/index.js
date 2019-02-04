import React from 'react';
import './index.scss';

import { getTasks, addTask } from '../../redux/actions';
import { connect } from 'react-redux';
import TaskAdd from '../TaskAdd';
import TaskList from '../TaskList';

class Home extends React.Component {
  componentDidMount() {
    const { getTasks } = this.props;
    getTasks();
  }

  render() {
    const { addTask, tasks, loading } = this.props;

    return (
      <div className="home">
        <TaskAdd onAdd={addTask}/>
        {!loading && <TaskList tasks={tasks} />}
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
