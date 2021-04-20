import React from "react"
import { render } from "react-dom"

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <p>React is working</p>
          </div>
        </div>
      </div>
    )
  }
}

render(<App/>, document.getElementById('App'))
