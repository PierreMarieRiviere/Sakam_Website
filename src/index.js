import React from "react"
import ReactDOM from "react-dom"
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history"
import { transitions, positions, Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"

import App from "./App"
import * as serviceWorker from "./serviceWorker"

//import './App.css';
import "./assets/scss/style.scss"

const history = createBrowserHistory()

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
}

const Root = () => (
  <Router history={history}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
