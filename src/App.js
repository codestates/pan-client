import React from 'react';
import routes from "./routes";
import { GlobalStyles } from "./styles";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./screens/MainPage/Main";
import Login from "./screens/MainPage/Login";
import SignUp from "./screens/MainPage/SignUp";

import Myapge from "./screens/MyPage/Mypage";
import Landing from "./screens/Landing";

import Template from "./screens/Template";

import Writing from "./screens/MakePage/Writing";
import Drawing from "./screens/MakePage/Drawing";

import Details from "./screens/SubPage/Details";
import UserStore from "./store/UserStore";
import IsGroupStore from "./store/IsGroupStore";
import CreateBookStore from "./store/CreateBookStore";
import DiaryInfoStore from "./store/DiaryInfoStore";


function App() { 

  return (
    <UserStore>
      {/*  User contextAPI  */}
      <IsGroupStore>
      {/*Group여부 확인 contextAPI */}
      <CreateBookStore>
      {/*가입된 book 정보 확인 contextAPI */}
      <DiaryInfoStore>
      {/* 다이어리 정보를 임시 저장 하기 위한 contextAPI */}
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
                  <Route exact path="/details/:id" component={Details}/>
                {/* <Route path={routes.details}>
                  <Details />
                </Route> */}
              </Switch>
          </Router>
        </HelmetProvider>
      </DiaryInfoStore>
      </CreateBookStore>
      </IsGroupStore>
    </UserStore>
  );
}

export default App;
