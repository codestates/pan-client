import React from 'react';
import routes from "./routes";
import { GlobalStyles } from "./styles";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./screens/MainPage/Main";
import Myapge from "./screens/MyPage/Mypage";
import Template from "./screens/SubPage/Template";
import TemplateGroup from "./screens/SubPage/TemplateGroup";
import Writing from "./screens/PostPage/Writing";
import Drawing from "./screens/PostPage/Drawing";
import Details from "./screens/SubPage/Details";
// User
import Login from "./screens/User/Login";
import SignUp from "./screens/User/SignUp";
import ResetPwd from "./screens/User/ResetPwd";
import FindPwd from "./screens/User/FindPwd";
import KakaoHandler from "./screens/User/Kakao";
// context API
import UserStore from "./store/UserStore";
import CreateBookStore from "./store/CreateBookStore";
import DiaryInfoStore from "./store/DiaryInfoStore";


function App() { 

  return (
    <UserStore>
      {/*  User contextAPI  */}
      <CreateBookStore>
      {/* 수정을 위한 API */}
      <DiaryInfoStore>
      {/* 수정을 위한 데이터 */}
        <HelmetProvider>
          <GlobalStyles />
          <Router>
              <Switch>
                <Route path={routes.main} exact>
                  <Main />
                </Route>
                <Route path={routes.mypage}>
                  <Myapge />
                </Route>
                <Route path={routes.template}>
                  <Template />
                </Route>
                <Route path={routes.templategroup}>
                  <TemplateGroup />
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
                <Route path={routes.resetPwd}>
                  <ResetPwd />
                </Route>
                <Route path={routes.findPwd}>
                  <FindPwd />
                </Route>
                  <Route exact path="/details/:id" component={Details}/>
                {/* <Route path={routes.details}>
                  <Details />
                </Route> */}
                <Route path="/kakao" component={KakaoHandler}></Route>
              </Switch>
          </Router>
        </HelmetProvider>
      </DiaryInfoStore>
      </CreateBookStore>
    </UserStore>
  );
}

export default App;
