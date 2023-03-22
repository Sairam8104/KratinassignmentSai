import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Browser from './components/Browser'
import Profile from './components/Profile'
import Doctor from './components/Doctor'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/browser" component={Browser} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/doctor" component={Doctor} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
