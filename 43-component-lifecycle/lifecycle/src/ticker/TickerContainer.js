import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  state = {
    value: 0
  }

  updateTickerValue = () => {
    this.setState({
      value: Math.floor(Math.random()*10)
    })
  }
 
  render(){
    return (
      <div className="box">
        <button>Stop Ticker</button>
        <Ticker value={this.state.value}/>
      </div>
    );
  }
}



export default TickerContainer