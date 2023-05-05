import { Component } from 'react';
import './TodoEditor.css';

class TodoEditor extends Component {
  state = {
    todoName: '',
  };

  handleChange = e => {
    this.setState({ todoName: e.currentTarget.value });
  };

  handelSubmit = e => {
    e.preventDefault();

    // console.log(this.state.todoName);
    this.props.onSubmit(this.state.todoName);
    this.reset();
  };

  reset = () => {
    this.setState({ todoName: '' });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handelSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.todoName}
          onChange={this.handleChange}
        ></textarea>
        <button className="TodoEditor__button" type="submit">
          Save
        </button>
      </form>
    );
  }
}

export default TodoEditor;
