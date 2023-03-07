import React, { Component } from 'react'
import { QrReader } from 'react-qr-reader'

/**
 * App Component
 */
class App extends Component {
  state = {
    result: 'No result'
  }

  /**
   * handleScan function
   * @param {*} data 読み取った値
   */
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }

  /**
   * handleError function
   * @param {*} err 
   */
  handleError = err => {
    console.error(err)
  }

  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '50%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}
export default App;