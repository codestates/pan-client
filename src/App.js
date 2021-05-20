import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import Main from "./screens/Main";
import Landing from "./screens/Landing";
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
            <Route path={routes.landing} exact>
              <Landing />
            </Route>
            <Route path={routes.main} >
              <Main />
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
