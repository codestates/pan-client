import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { VscEdit, VscAccount } from 'react-icons/vsc';
import { Switch, Hamburger, Navigation, SpanWrapper, Span, Paragraph } from "../components/auth/ToggleAction";
import routes from "../routes";
import { Link, useHistory } from "react-router-dom";

function ToggleButton() {
  const history = useHistory();
  const token = localStorage.getItem('CC_Token');
  
    return (
        <div>
                <Switch>
                    <input type="checkbox" id="switch" />
                    <label htmlFor="switch">
                        <Hamburger>
                            <SpanWrapper>
                                <Span /><Span /><Span />
                            </SpanWrapper>
                        </Hamburger>
                        <Navigation id="mypage" onClick={()=> {token ? history.push('/mypage') : alert('로그인이 필요합니다')}}>
                          {/* <Link to={routes.mypage}> */}
                            <VscAccount />
                            <Paragraph>마이 페이지</Paragraph>
                          {/* </Link> */}
                        </Navigation>
                        <Navigation id="groupadd">
                            <AiOutlineUsergroupAdd />
                            <Paragraph>그룹일기 작성</Paragraph>
                        </Navigation>
                        <Navigation id="privateadd" onClick={()=> {token ? history.push('/template') : alert('로그인 하지 않으면 작성한 글이 저장되지 않습니다.')}}>
                          <Link to={routes.template}>
                            <VscEdit />
                            <Paragraph>개인일기 작성</Paragraph>
                          </Link>
                        </Navigation>
                    </label>
                </Switch>
        </div>
    )
}

export default ToggleButton;