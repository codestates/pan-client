import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { VscEdit, VscAccount } from 'react-icons/vsc';
import { Switch, Hamburger, Navigation, SpanWrapper, Span, Paragraph } from "../components/auth/ToggleAction";

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
                    <Navigation id="mypage">
                        <VscAccount />
                        <Paragraph>마이 페이지</Paragraph>
                    </Navigation>
                    <Navigation id="groupadd">
                        <AiOutlineUsergroupAdd />
                        <Paragraph>그룹일기 작성</Paragraph>
                    </Navigation>
                    <Navigation id="privateadd">
                        <VscEdit />
                        <Paragraph>개인일기 작성</Paragraph>
                    </Navigation>
                </label>
            </Switch>
        </div>
    )
}

export default ToggleButton;