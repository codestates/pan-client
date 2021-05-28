import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { VscEdit, VscAccount } from 'react-icons/vsc';
import { Switch, Hamburger, Navigation, SpanWrapper, Span, Paragraph } from "../components/auth/ToggleAction";
import routes from "../routes";
import { Link } from "react-router-dom";

function ToggleButton() {
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
                        <Navigation id="mypage" >
                          <Link to={routes.mypage}>
                            <VscAccount />
                            <Paragraph>마이 페이지</Paragraph>
                          </Link>
                        </Navigation>
                        <Navigation id="groupadd">
                            <AiOutlineUsergroupAdd />
                            <Paragraph>그룹일기 작성</Paragraph>
                        </Navigation>
                        <Navigation id="privateadd">
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