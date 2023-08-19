// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onSpeed = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.count + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.count - 10}))
    }
  }

  render() {
    const space = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="speedometer"
        />
        <div>
          <h1 className="mini-heading">
            Speed is <span>{space}</span>mph
          </h1>
          <p className="description">Min Limit is 0mph,Max Limit is 200mph</p>
          <div className="button-container">
            <button
              type="button"
              className="accelerate-button"
              onClick={this.onSpeed}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="brake-button"
              onClick={this.onBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
