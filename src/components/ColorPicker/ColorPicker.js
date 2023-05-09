// import React, { Component } from 'react';
import React, { PureComponent } from 'react';

import './ColorPicker.css';
import classNames from 'classnames';

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

class ColorPicker extends PureComponent {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    // var--01 style
    // const optionClasses = ['ColorPicker__option'];
    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push('ColorPicker__option--active');
    // }
    // return optionClasses.join(' ');

    // var--02 style using classNames-library
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionIdx,
    });
  };

  render() {
    console.log('render');
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
//
