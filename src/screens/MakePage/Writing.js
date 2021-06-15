import React, { useState } from 'react';
import routes from '../../routes';
import Header from '../../components/Header';
import ToggleButton from '../ToggleButton';
import { DiaryWritingWrapper, DiaryWritingMain, WriteHeader, WriteHeaderLeft, WriteContents, WriteTitle, WriteWeather, WriteHeaderRight, WriteFeel, WriteDate, Footer, WriteButton, CancelButton } from '../../components/writing/DiaryWritingLayout';

import angry from "../../images/emotions/angry.png";
import angry_selected from "../../images/emotions/angry_selected.png";
import annoyed from "../../images/emotions/annoyed.png";
import confused from "../../images/emotions/confused.png";
import excited from "../../images/emotions/excited.png";
import happy from "../../images/emotions/happy.png";
import sad from "../../images/emotions/sad.png";
import shy from "../../images/emotions/shy.png";
import tired from "../../images/emotions/tired.png";

import cloudy from "../../images/weathers/cloudy.png";
import fog from "../../images/weathers/fog.png";
import hail from "../../images/weathers/hail.png";
import lightning from "../../images/weathers/lightning.png";
import rainy from "../../images/weathers/rainy.png";
import showers from "../../images/weathers/showers.png";
import snow from "../../images/weathers/snow.png";
import sunny from "../../images/weathers/sunny.png";

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
                제목: <input type="text" placeholder="15자 이내로 작성해주세요" />
              </WriteTitle>
              <WriteDate>
                날짜: <input type="text" placeholder="예시) 2021-06-07" />
              </WriteDate>
            </WriteHeaderLeft>
            <WriteHeaderRight>
              <WriteFeel>
                기분:
                  <img src={angry} width="40px" alt="angry" />
                  <img src={annoyed} width="40px" alt="annoyed" />
                  <img src={confused} width="40px" alt="confused" />
                  <img src={excited} width="40px" alt="excited" />
                  <img src={happy} width="40px" alt="happy" />
                  <img src={sad} width="40px" alt="sad" />
                  <img src={shy} width="40px" alt="shy" />
                  <img src={tired} width="40px" alt="tired" />
              </WriteFeel>
              <WriteWeather>
              날씨:
                <img src={cloudy} width="40px" alt="cloudy" />
                <img src={fog} width="40px" alt="fog" />
                <img src={hail} width="40px" alt="hail" />
                <img src={lightning} width="40px" alt="lightning" />
                <img src={rainy} width="40px" alt="rainy" />
                <img src={showers} width="40px" alt="showers" />
                <img src={snow} width="40px" alt="snow" />
                <img src={sunny} width="40px" alt="sunny" />
              </WriteWeather>
            </WriteHeaderRight>
          </WriteHeader>
          <WriteContents>
            <Editor previewStyle="vertical" height="590px" initialEditType="markdown" useCommandShortcut={true} />
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
