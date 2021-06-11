import React, { useContext } from 'react';
import routes from '../routes';
import ToggleButton from './ToggleButton';
import Header from '../components/Header';
import ChooseBook from '../screens/ChooseBook';
import ChooseGroupBook from '../screens/ChooseGroupBook';
import { useHistory } from "react-router-dom";
import { IsGroupContext } from "../store/IsGroup";
import { ModalProvider } from "styled-react-modal";
import { FadingBackground, Announcement, TemplateMain, Writing, Drawing } from "../components/modal/Style_Template";

export default function Template () {
  const history = useHistory();
  // IsGroup contextAPI 사용하기 위한 변수
  const context = useContext(IsGroupContext);
  const { isGroup } = context ;

    return (
        <ModalProvider backgroundComponent={FadingBackground}>
          {/* ContextAPI로 group인지 아닌지 확인한 후 거기에 맞춰 모달창을 띄워준다. */}
          {!isGroup ? <ChooseBook/> : <ChooseGroupBook/> }
            <Header main={routes.main} login={routes.login} />
            <Announcement>템플릿 선택하기</Announcement>
            <TemplateMain>
                <Writing  onClick={() => {history.push('/writing')}}>시적 감성</Writing>
                <Drawing onClick={() => {history.push('/drawing')}}>예술적 감성</Drawing>
            </TemplateMain>
            <ToggleButton></ToggleButton>
        </ModalProvider>
    )
}
