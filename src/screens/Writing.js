import React from 'react';
import routes from '../routes';
import Header from '../components/Header';
import ToggleButton from '../screens/ToggleButton';
import {DiaryWritingWrapper, DiaryWritingMain, WriteHeader, WriteHeaderLeft, WriteContents, WriteTitle, WriteWeather, WriteHeaderRight, WriteFeel, WriteDate, Footer, WriteButton, CancelButton } from '../components/writing/DiaryWritingLayout'

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

export default function Writing() {
    return (
        <DiaryWritingWrapper>
          <Header main={routes.main} login={routes.login} />
          <DiaryWritingMain>
            <WriteHeader>
              <WriteHeaderLeft>
                <WriteTitle>
                  제목: <input type="text" />
                </WriteTitle>
                <WriteWeather>
                  날짜: <input type="text" placeholder="예시) 2021-06-07" />
                </WriteWeather>
              </WriteHeaderLeft>
              <WriteHeaderRight>
                <WriteFeel>
                  기분: <input type="text" />
                </WriteFeel>
                <WriteDate>
                날씨: <input type="text" />
                </WriteDate>
              </WriteHeaderRight>
            </WriteHeader>
            <WriteContents>
              <Editor previewStyle="vertical" height="790px" initialEditType="markdown" useCommandShortcut={true} />
            </WriteContents>
            <Footer>
              {/* 여기서 취소를 누르면 전페이지로 이동 */}
              <CancelButton>취 소</CancelButton>
              <WriteButton>생 성</WriteButton>
            </Footer>
          </DiaryWritingMain>
          <ToggleButton />
      </DiaryWritingWrapper>
    )
}
