import React from 'react';
import routes from '../routes';
import Header from '../components/Header';
import ToggleButton from '../screens/ToggleButton';
import {DiaryWritingWrapper, DiaryWritingMain, Wirte, Preview} from '../components/writing/DiaryWritingLayout'

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

export default function Writing() {
    return (
        <DiaryWritingWrapper>
          <Header main={routes.main} login={routes.login} />
          <DiaryWritingMain>
            {/* <Wirte></Wirte>
            <Preview></Preview> */}
            <Editor previewStyle="vertical" height="auto" initialEditType="markdown" useCommandShortcut={true} />
          </DiaryWritingMain>
          <ToggleButton />
      </DiaryWritingWrapper>
    )
}
