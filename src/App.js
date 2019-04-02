import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Components/Home/home"
import Portfolio from "./Components/Portfolio/Portfolio"
import Skills from "./Components/Skill/Skills"
import Contact from './Components/contact/Contact.js';
import Cv from './Components/Cv/Cv.js';
import BudgetApp from './Components/Projects/BudgetApp/Budget.js';
import TodoList from './Components/Projects/TodoList/TodoList.js';
import QaApp from './Components/Projects/QaApp/QaApp.js';
import SpaceX from './Components/Projects/SpaceX/spaceX.js';
import TheCrimeMachine from './Components/Projects/TheCrimeMachine/TheCrimeMachine.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path="/cv" component={Cv} />
          <Route path="/portfolio/budgetapp" component={BudgetApp} />
          <Route path="/portfolio/todolist" component={TodoList} />
          <Route path="/portfolio/qa-app" component={QaApp} />
          <Route path="/portfolio/spacex" component={SpaceX} />
          <Route path="/portfolio/thecrimemachine" component={TheCrimeMachine} />
        </div>
      </Router>

    )
  }
}


export default App;
