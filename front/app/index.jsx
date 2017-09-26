import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Main from './Main'

const App = () => (
  <div>
    <Header />
    <Main />
    <h1>Boilerplate app!</h1>
  </div>
)

ReactDOM.render(
<Router>
  <App/>
</Router>
, document.getElementById('app'))
