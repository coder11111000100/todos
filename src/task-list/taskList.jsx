import PropTypes from 'prop-types';
import { Task } from '../task/task';
import './taskList.css';

function TaskList({ state, changeTodo, useKey }) {
  const elemToCreate = (id, func, todo, i, completed, time) => {
    return (
      <Task
        key={id}
        changeTodo={func}
        todo={todo}
        index={i}
        id={id}
        completed={completed}
        time={time}
      />
    );
  };

  return (
    <ul className="todo-list">
      {state.length === 0
        ? null
        : state.map((item, i) => {
            if (useKey === 'All') {
              return elemToCreate(item.id, changeTodo, item.value, i, item.completed, item.time);
            }
            if (useKey === 'Active') {
              if (!item.completed)
                return elemToCreate(item.id, changeTodo, item.value, i, item.completed, item.time);
            }
            if (useKey === 'Completed') {
              if (item.completed)
                return elemToCreate(item.id, changeTodo, item.value, i, item.completed, item.time);
            }
            return null;
          })}
    </ul>
  );
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
