import React, { Component } from 'react';
import './ColorPicker.css';

// var 01
// const ColorPicker = ({ options }) => (
//   <div className="ColorPicker">
//     <h2 className="ColorPicker__title">Color Picker</h2>
//     <div>
//       {options.map(({ label, color }) => (
//         <span
//           key={label}
//           className="ColorPicker__option"
//           style={{ backgroundColor: color }}
//         ></span>
//       ))}
//     </div>
//   </div>
// );

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    // const activeOption = this.props.options[this.state.activeOptionIdx];
    // console.log(activeOption.label);
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Обрано колір: {label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            // const optionClassName = this.makeOptionClassName(index);
            return (
              <button
                key={label}
                // className={optionClassName}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
