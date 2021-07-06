import React from 'react';
import routes from '../../routes';
import ToggleButton from '../../components/ToggleButton';
import Header from '../../components/Header';
import ChooseBook from '../Modals/ChooseBook';
import { useHistory } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";
import { FadingBackground, Announcement, TemplateMain, Writing, Drawing } from "../../components/modal/Style_Template";

export default function Template () {
  const history = useHistory();
  
    return (
        <>
          <ModalProvider backgroundComponent={FadingBackground}>
            <ChooseBook></ChooseBook>
              <Header main={routes.main} login={routes.login} />
              <Announcement>템플릿 선택하기</Announcement>
              <TemplateMain>
                  <Writing onClick={() => {history.push('/writing')}}>시적 감성</Writing>
                  <Drawing onClick={() => {history.push('/drawing')}}>예술적 감성</Drawing>
              </TemplateMain>
              <ToggleButton></ToggleButton>
          </ModalProvider>
        </>
    )
}
