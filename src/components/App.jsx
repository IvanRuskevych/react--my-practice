import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
// import initialTodo from './data/todos.json';
import TodoEditor from './TodoEditor/TodoEditor';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';
// import Clock from './Clock/Clock';
import Tabs from './Tabs/Tabs';
import tabs from './data/tabs.json';
import IconButton from './IconButton/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';

// Задача TodoList --> для збереження стану робимо Арр класом //

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount = () => {
    console.log('App componentDidMount ');

    const todosLocalStorage = JSON.parse(localStorage.getItem('todos'));
    console.log(todosLocalStorage);

    if (todosLocalStorage) {
      this.setState({ todos: todosLocalStorage });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    // console.log('App componentDidUpdate');

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      // console.log('<<--Updated todos, save todos to LocalStorage-->>');

      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    if (prevTodos.length < nextTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }; // менш повязана логіка ніж з addTodo--this.toggleModal()

  addTodo = text => {
    // console.log(text);

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

    // this.toggleModal(); // ми жорстко привязали до  addTodo --> інший варіант через componentDidMount
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    // console.log('render()');
    const { todos, filter, showModal } = this.state;
    const totalNumber = todos.length;
    const visibleTodo = this.getVisibleTodo();
    const completedNumber = this.calcCompletedTodos();

    return (
      <>
        {/* MODAL_TASK */}

        {/* <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button> */}

        <IconButton onClick={this.toggleModal} aria-label="Add todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {showModal && (
          <Modal toggleModal={this.toggleModal}>
            <h2>Modal`s children</h2>
            <TodoEditor onSubmit={this.addTodo}></TodoEditor>

            {/* <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button> */}
            <IconButton onClick={this.toggleModal} aria-label="Close modal">
              <DeleteIcon width="40" height="40" fill="#fff" />
            </IconButton>
          </Modal>
        )}

        {/* TODO-TASK */}

        <p>{`Total Number: ${totalNumber}`}</p>
        <p>{`Completed number: ${completedNumber}`}</p>

        {/* <TodoEditor onSubmit={this.addTodo}></TodoEditor> */}

        <Filter value={filter} onChange={this.changedFilter}></Filter>

        <TodoList
          todos={visibleTodo}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        ></TodoList>

        {/* CLOCK-TASK */}

        {/* <Clock /> */}

        {/* TABS--TASK */}

        <Tabs items={tabs} />
      </>
    );
  }
}

export default App;
