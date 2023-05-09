// import React, { Component } from 'react';
import React, { PureComponent } from 'react';

// var 02 - PureComponent
// export default class Tabs extends Component {

export default class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };
  // var 01 with // import React, { Component } from 'react';
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activeTabIdx !== this.state.activeTabIdx;
  // }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);

    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
