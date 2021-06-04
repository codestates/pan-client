import React from 'react';
import routes from '../routes';
import Header from '../components/Header';
import ToggleButton from '../screens/ToggleButton'
import {DiaryWritingWrapper, DiaryWritingMain, Wirte, Preview} from '../components/auth/DiaryWritingLayout'


export default function Writing() {
    return (
        <DiaryWritingWrapper>
          <Header main={routes.main} login={routes.login} />
          <DiaryWritingMain>
            <Wirte></Wirte>
            <Preview></Preview>
          </DiaryWritingMain>
          <ToggleButton></ToggleButton>
      </DiaryWritingWrapper>
    )
}
