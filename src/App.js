import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import "./App.css";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from './places/pages/UpdatePlace'
import { Fragment } from "react/cjs/react.production.min";

const App = () => {
  return (
    <Fragment>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/:userId/places" exact>
              <UserPlaces />
            </Route>
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>
            <Route path="/places/:placeId">
              <UpdatePlace />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </Fragment>
  );
};

export default App;
