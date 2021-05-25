import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import Main from "./screens/Main";
import Myapge from "./screens/Mypage";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { GlobalStyles } from "./styles";
import React from 'react';

function App() { 

  return (
    <>
      <HelmetProvider>
        <GlobalStyles />
        <Router>
            <Switch>
              <Route path={routes.landing}>
                <Landing />
              </Route>
              <Route path={routes.main} exact>
                <Main />
              </Route>
              <Route path={routes.mypage}>
                <Myapge />
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
    </>
  );
}

export default App;
