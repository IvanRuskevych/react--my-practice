import classNames from 'classnames';
import './TodoList.css';
import Todo from 'components/Todo/Todo';

function TodoList({ todos, onDeleteTodo, onToggleCompleted }) {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <Todo
            text={text}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
            onDeleteTodo={() => onDeleteTodo(id)}
          ></Todo>
          {/* <input
            type="checkbox"
            className="TodoList__checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />

          <p className="TodoList__text">{text}</p>
          <button className="TodoList__btn" onClick={() => onDeleteTodo(id)}>
            Delete
          </button> */}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
