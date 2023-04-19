import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../task/task';
import './taskList.css';

class TaskList extends React.Component {
  render() {
    const { state, changeTodo, useKey } = this.props;
    const list = () => {
      switch (useKey) {
        case 'All':
          return state.length === 0
            ? null
            : state.map((item, i) => {
                return (
                  <Task
                    key={item.id}
                    changeTodo={changeTodo}
                    todo={item.value}
                    index={i}
                    id={item.id}
                    completed={item.completed}
                    time={item.time}
                  />
                );
              });

        case 'Active':
          return state.length === 0
            ? null
            : state.map((item, i) => {
                if (!item.completed) {
                  return (
                    <Task
                      key={item.id}
                      changeTodo={changeTodo}
                      todo={item.value}
                      index={i}
                      id={item.id}
                      completed={item.completed}
                      time={item.time}
                    />
                  );
                }
                return null;
              });

        case 'Completed':
          return state.length === 0
            ? null
            : state.map((item, i) => {
                if (item.completed) {
                  return (
                    <Task
                      key={item.id}
                      changeTodo={changeTodo}
                      todo={item.value}
                      index={i}
                      id={item.id}
                      completed={item.completed}
                      time={item.time}
                    />
                  );
                }
                return null;
              });
        default:
          return null;
      }
    };

    return <ul className="todo-list">{list()}</ul>;
  }
}

TaskList.defaultProps = {
  state: [],
  changeTodo: Function.prototype,
  useKey: '',
};

TaskList.propTypes = {
  state: PropTypes.array,
  changeTodo: PropTypes.func,
  useKey: PropTypes.string,
};

export { TaskList };
