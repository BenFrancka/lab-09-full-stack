import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //useParams
} from "react-router-dom";
import './App.css';
import MealPage from "./MealPage";
import CreateMealPage from "./CreateMealPage";
import MealDetailPage from "./MealDetailPage";
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="top">
          <Header />
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <MealPage {...routerProps} />} 
            /> 
              <Route 
              path="/meals/:id" 
              exact
              render={(routerProps) => <MealDetailPage {...routerProps} />} 
            />
            <Route 
              path="/create" 
              exact
              render={(routerProps) => <CreateMealPage {...routerProps} />} 
            />          
          </Switch>
        </div>
      </Router>
    );
  }
}
