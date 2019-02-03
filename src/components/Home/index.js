import React from 'react';
import './index.scss';

import { getTasks } from '../../redux/actions';
import { connect } from 'react-redux';

class Home extends React.Component {
  componentDidMount() {
    const { getTasks } = this.props;
    getTasks();
  }

  render() {
    return (
      <div className="home">
        This is home
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
