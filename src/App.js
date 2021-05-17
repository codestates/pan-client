import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <div>
      <HelmetProvider>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path={routes.home} exact>
              <Home />
            </Route>
            <Route path={routes.login}>
              <Login />
            </Route>
            <Route path={routes.signUp}>
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
