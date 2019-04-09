import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./Components/Home/home"
import Portfolio from "./Components/Portfolio/Portfolio"
import Skills from "./Components/Skill/Skills"
import Cv from './Components/Cv/Cv.js';
import BudgetApp from './Components/Projects/BudgetApp/Budget.js';
import TodoList from './Components/Projects/TodoList/TodoList.js';
import QaApp from './Components/Projects/QaApp/QaApp.js';
import SpaceX from './Components/Projects/SpaceX/spaceX.js';
import TheCrimeMachine from './Components/Projects/TheCrimeMachine/TheCrimeMachine.js';

class App extends Component {

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Portfolio} />
          <Route path="/skills" component={Skills} />
          <Route path="/cv" component={Cv} />
          <Route path="/budgetapp" component={BudgetApp} />
          <Route path="/todolist" component={TodoList} />
          <Route path="/qa-app" component={QaApp} />
          <Route path="/spacex" component={SpaceX} />
          <Route path="/thecrimemachine" component={TheCrimeMachine} />
        </Switch>
      </>

    )
  }
}


export default App;
