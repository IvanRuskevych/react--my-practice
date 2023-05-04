import './TodoList.css';

function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text }) => (
        <li key={id} className="TodoList__item">
          <p className="TodoList__text">{text}</p>
          <button className="btn" onClick={() => onDeleteTodo(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
//
