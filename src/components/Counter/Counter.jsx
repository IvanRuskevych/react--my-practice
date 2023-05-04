import React, { Component } from 'react';
import './Counter.css';
import Controls from './Controls';
import Value from './Value';
// import React, { Component } from 'react';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    // value: 0,
    value: this.props.initialValue,
  };

  handelIncrement = evt => {
    console.log('Clicked on button +');
    console.log(this);
    console.log(evt.type);
    console.log(evt.target);

    // //  evt завжди очищається тому записуємо стан evt у const -----------
    // const { target } = evt; // деструктуровано з const target = evt.target
    // setTimeout(() => {
    //   console.log(target);
    // }, 1000);
    // // ---------- evt завжди очищається

    // this.setState({ value: 123 }); // якщо потрібно просто замінити, не враховуючи попередне значення

    // this.setState(prevState => {
    //   return {
    //     value: prevState.value + 1,
    //   };
    // });

    // те саме але з неявним поверненям //
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handelDecrement = () => {
    if (this.state.value < 1) {
      return console.log('value < 0');
    }
    console.log('Clicked on button -');

    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        {/* <span className="Counter__value">{this.state.value}</span> */}

        <Value value={value} />
        <div className="Counter__controles">
          {/* <button type="button" onClick={this.handelIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handelDecrement}>
            Уменьшить на 1
          </button> */}

          <Controls
            onDecrement={this.handelDecrement}
            onIncrement={this.handelIncrement}
          />
        </div>
      </div>
    );
  }
}

export default Counter;
