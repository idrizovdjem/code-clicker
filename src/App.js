import React, { Component } from 'react';

import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import ClickableArea from './components/ClickableArea/ClickableArea';

class App extends Component {
  state = {
    balance: 0,
    linesPerSecond: 0,
    clickValue: 1
  };

  componentDidMount() {
    setInterval(async () => {
      const newBalance = this.state.balance + this.state.linesPerSecond / 5;
      await this.setState({
        balance: newBalance
      });
    }, 200);
  }

  changeBalance = async (newBalance, clicks) => {
    await this.setState({
      balance: newBalance,
      linesPerSecond: this.state.linesPerSecond + clicks
    });
  }

  clickHandler = async () => {
    const newBalance = this.state.balance + this.state.clickValue;
    await this.setState({
      balance: newBalance
    });
  }

  render() {
    return(
      <div>
        <Navigation />
        <ClickableArea click={this.clickHandler}/>
        <Sidebar
            linesPerSecond={this.state.linesPerSecond} 
            balance={this.state.balance}
            changeBalance={this.changeBalance} 
            clickValue={this.state.clickValue} />
      </div>
    );
  }
}

export default App;
