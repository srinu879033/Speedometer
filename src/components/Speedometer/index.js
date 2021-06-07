// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  Accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  Decelerate = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading heading1">Speedometer</h1>
        <div>
          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="text">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="container2">
            <button onClick={this.Accelerate} className="button" type="button">
              Accelerate
            </button>
            <button
              onClick={this.Decelerate}
              className="button button1"
              type="button"
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
