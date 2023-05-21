/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import './task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      checked: false,
      date: props.time,
    };
  }

  newTimeInMinutes = () => {
    const { date } = this.state;
    const { time } = this.props;
    setInterval(() => {
      this.setState({ date: time });
    }, 60000);
    return date;
  };

  onEditTodo = (e) => {
    const { changeTodo, todo, index, id, time } = this.props;
    const { value, checked } = this.state;
    const v = e.target.value.trim();
    switch (e.type) {
      case 'keyup':
        if (e.key === 'Escape') {
          this.setState({ value: '' });
        }
        if (e.key === 'Enter' && v !== '') {
          changeTodo(value, {
            id,
            index,
            value: v,
            completed: false,
            edit: true,
            time,
          });
          this.setState({ value: '' });
        }
        break;
      case 'change':
        this.setState((prev) => {
          return {
            checked: !prev.checked,
          };
        });
        this.setState((prev) => {
          return {
            value: prev.value === 'completed' ? '' : 'completed',
          };
        });
        changeTodo('', {
          id,
          index,
          value: todo,
          completed: !checked,
          edit: false,
          time,
        });
        break;
      case 'click':
        changeTodo('', {
          index,
          remove: true,
        });
        break;
      default:
        break;
    }
  };

  // eslint-disable-next-line class-methods-use-this
  onTimer = () => {};

  render() {
    const { todo, completed } = this.props;
    const { value, checked } = this.state;
    return (
      <li className={completed ? 'completed' : value}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed ? true : checked}
            onChange={(e) => this.onEditTodo(e)}
          />
          <label htmlFor="domId">
            <span className="title">{todo}</span>
            <span className="description">
              <button onClick={() => this.onTimer} type="button" className="icon icon-play">
                {' '}
              </button>
              {/* <button type="button" className="icon icon-pause">
                {' '}uiui
              </button> */}
              12:25
            </span>

            <span className="created">{formatDistanceToNow(this.newTimeInMinutes())}</span>
          </label>
          <button
            aria-label="Mute volume"
            type="button"
            onClick={() => this.setState({ value: 'editing' })}
            className="icon icon-edit"
          />

          <button
            aria-label="Mute volume"
            type="button"
            onClick={(e) => this.onEditTodo(e)}
            className="icon icon-destroy"
          />
        </div>

        {value === 'editing' ? (
          <input autoFocus type="text" onKeyUp={(e) => this.onEditTodo(e)} className="edit" defaultValue={todo} />
        ) : null}
      </li>
    );
  }
}

Task.defaultProps = {
  changeTodo: Function.prototype,
  todo: '',
  index: 0,
  id: '',
  completed: false,
  time: '',
};
Task.propTypes = {
  changeTodo: PropTypes.func,
  todo: PropTypes.node,
  infex: PropTypes.number,
  id: PropTypes.string,
  completed: PropTypes.bool,
  time: PropTypes.instanceOf(Date),
};

export { Task };
