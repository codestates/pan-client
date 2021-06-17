import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { IsGroupContext } from "../store/IsGroupStore";
import { VscEdit, VscAccount } from 'react-icons/vsc';
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { Switch, Hamburger, Navigation, SpanWrapper, Span, Paragraph } from "../components/utility/ToggleAction";

export default function ToggleButton() {
  const history = useHistory();
  const token = localStorage.getItem('CC_Token');
  const context = useContext(IsGroupContext);
  const { setIsGroup } = context ;

  const Toindividual = () => {
    setIsGroup(false);
    // token ? history.push('/template') : alert('로그인 하지 않으면 작성한 글이 저장되지 않습니다.');
    history.push('/template')
    
  }
  const ToGroup = () => {
    setIsGroup(true);
  //   token ? history.push('/template') : alert('로그인 하지 않으면 작성한 글이 저장되지 않습니다.');
    history.push('/template')
  }
  const ToMypage = () => {
    token ? history.push('/mypage') : alert('로그인이 필요합니다');
  }
  
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
                        <Navigation id="mypage" onClick={ToMypage}>
                            <VscAccount />
                            <Paragraph>마이 페이지</Paragraph>
                        </Navigation>
                        <Navigation id="groupadd" onClick={ToGroup}>
                            <AiOutlineUsergroupAdd />
                            <Paragraph>그룹일기 작성</Paragraph>
                        </Navigation>  
                        <Navigation id="privateadd" onClick={Toindividual}>
                            <VscEdit />
                            <Paragraph>개인일기 작성</Paragraph>
                        </Navigation>
                    </label>
                </Switch>
        </div>
    )
}