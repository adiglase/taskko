import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faList,
  faCalendarAlt,
  faSignOutAlt,
  faBars,
  faTimesCircle,
  faEnvelope,
  faLock,
  faSpinner,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";

import Login from "./components/Layout/Login";
import SignUp from "./components/Layout/SignUp";
import Dashboard from "./components/Layout/Dashboard";
import { AuthProvider } from "./store/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

library.add(
  faList,
  faCalendarAlt,
  faSignOutAlt,
  faBars,
  faTimesCircle,
  faEnvelope,
  faLock,
  faSpinner,
  faIdBadge
);

export default App;
