import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import initialTodo from './data/todos.json';

// import Counter from './Counter/Counter';
// import Dropdown from './Dropdown/Dropdown';
// import ColorPicker from './ColorPicker/ColorPicker';
// import options from './data/options.json';

// export const App = () => {
//   return (
//     <>
//       <h1>Состояние компонета</h1>
//       {/* <Counter initialValue={123} /> */}
//       {/* <Dropdown /> */}
//       {/* <ColorPicker options={options} /> */}
//       <TodoList />
//     </>
//   );
// };

// Задача TodoList --> для збереження стану робимо Арр класом

class App extends Component {
  state = {
    todos: initialTodo,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalNumber = todos.length;
    const completedNumber = todos.reduce(
      (acc, todo) => (todo.complited ? acc + 1 : acc),
      0
    );

    return (
      <>
        <p>{`Total Number: ${totalNumber}`}</p>
        <p>{`Completed number: ${completedNumber}`}</p>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo}></TodoList>
      </>
    );
  }
}

export { App };
