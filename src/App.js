import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Mheader } from './components/m-header/m-header'
import { Tab } from './components/tab/tab'
import Recommend from './components/recommend/recommend'
import { Singer } from './components/singer/singer'
import { Search } from './components/search/search'
import  Rank  from './components/rank/rank'
// import Test from './components/test'



export class App extends React.Component {
  render() {
    return (
      <Router>
        <Mheader />
        {/* <Test title={'11'}/> */}
        <Tab />
        <Switch>
          <Redirect from="/" exact to="/recommend" />
          <Route path="/recommend" >
            <Recommend />
          </Route>
          <Route path="/singer" component={Singer} />
          <Route path="/rank" component={Rank} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
    )
  }
}

export default App


