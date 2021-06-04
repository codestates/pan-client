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
import Template from "./screens/Template";
import Writing from "./screens/Writing";
import Drawing from "./screens/Drawing";
import Details from "./screens/Details";
import UserStore from "./store/User"

function App() { 

  return (
    <UserStore>
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
              <Route path={routes.template}>
                <Template />
              </Route>
              <Route path={routes.writing}>
                <Writing />
              </Route>
              <Route path={routes.drawing}>
                <Drawing />
              </Route>
              <Route path={routes.login}>
                <Login />
              </Route>
              <Route path={routes.signUp}>
                <SignUp />
              </Route>
              <Route path={routes.details}>
                <Details />
              </Route>
            </Switch>
        </Router>
      </HelmetProvider>
    </UserStore>
  );
}

export default App;
