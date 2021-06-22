import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import MealPage from "./MealPage";
import CreateMealPage from "./CreateMealPage";
import MealDetailPage from "./MealDetailPage";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Meal Kits Page</h2>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/create">Add meal</Link>
          </p>
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
