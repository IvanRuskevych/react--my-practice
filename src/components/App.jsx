import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import initialTodo from './data/todos.json';
import TodoEditor from './TodoEditor/TodoEditor';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

// Задача TodoList --> для збереження стану робимо Арр класом //

class App extends Component {
  state = {
    todos: initialTodo,
    filter: '',
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: nanoid(10),
      text,
      completed: false,
    };

    // this.setState(prevState => ({
    //   todos: [todo, ...prevState.todos],
    // }));
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.filter(todo => todo.id !== todoId),
    // }));
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    // // var 01
    // this.setState(prevState => {
    //   prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //   });
    // });

    // var 02
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     return todo.id === todoId
    //       ? { ...todo, completed: !todo.completed }
    //       : todo;
    //   }),
    // }));
    // var 02 + деструктуризація prevState
    this.setState(({ todos }) => ({
      todos: todos.map(todo => {
        return todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      }),
    }));
  };

  changedFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodo = () => {
    const { filter, todos } = this.state;
    const normolizedValue = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normolizedValue)
    );
  };

  calcCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;
    const totalNumber = todos.length;
    const visibleTodo = this.getVisibleTodo();
    const completedNumber = this.calcCompletedTodos();

    return (
      <>
        <p>{`Total Number: ${totalNumber}`}</p>
        <p>{`Completed number: ${completedNumber}`}</p>

        <TodoEditor onSubmit={this.addTodo}></TodoEditor>

        <Filter value={filter} onChange={this.changedFilter}></Filter>

        <TodoList
          todos={visibleTodo}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        ></TodoList>
      </>
    );
  }
}

export default App;
