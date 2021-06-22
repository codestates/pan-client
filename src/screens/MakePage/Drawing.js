import React, { useEffect, useState, useContext, useRef }  from 'react';
import routes from '../../routes';
import { Redirect, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import ToggleButton from '../ToggleButton';
import {
    DiaryWritingWrapper, DiaryWritingMain, WriteHeader, WriteHeaderLeft, 
    WriteContents, WriteTitle, WriteHeaderRight, WriteDate, Footer, WriteButton, CancelButton 
  } from '../../components/writing/DiaryWritingLayout';
import { CreateBookContext } from "../../store/CreateBookStore";
import Feeling from "./Feeing";
import Weather from "./Weather";
import Darw from "./Draw";

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';


export default function Writing() {
  const context = useContext(CreateBookContext);
  const history = useHistory();

  const { bookInfo } = context;
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [feelings, setFeelings] = useState('');
  const [weather, setWeather] = useState('');
  const [content, setContent] = useState('');
  const [picUrl, setPicUrl] = useState('');

  // 제목에 입력한 값 상태에 담기 15자 넘어가면 짤리게 설정해서 최대15자까지 작성가능
  const titleHandler = (e) => {
      if(e.target.value.length > 15) {
          e.target.value = e.target.value.substr(0, 15);
          return alert('15자 이내로 작성해주세요');
        
      }else {
          setTitle(e.target.value);
      }
  };
  // 제목과 마찬가지로 날짜는 총10글자 2022-06-17 까지만 작성가능하게 하고 상태에 저장
  const dateHandler = (e) => {
      if(e.target.value.length > 10) {
          e.target.value = e.target.value.substr(0, 10);
          return alert('형식에 맞게 작성해주세요');
      }else {
          setDate(e.target.value);
      }
  };
  // 포스트 메소드 
  // 1. 새로고침하면 book정보가 날라가기 때문에 제일 중요한 book정보 먼저 확인함
  // 2. 그다음 필수 데이터 작성여부 확인
  // 3. 마지막으로 서버랑 통신해서 데이터 전송
  const writeBtn = async() => {
          if(!bookInfo) {
            alert('일기장이 선택되지 않았습니다. 일기장을 다시 선택하고 작성해주세요.');
          }
          else if(!title || !date || !feelings || !weather || !content || !picUrl) {
            alert('제목,기분,날짜,날씨,내용,그림을 작성해주세요.');
          } 
          else {
          await axios({
            method: 'post',
            url: 'https://api.picanote.me/diaries',
            data: {
                bookId: bookInfo.id,
                title,
                date,
                content,
                feelings,
                weather,
                picUrl,
                

            },
            headers: {
                Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                'ContentType' : 'application/json',
            },
                withCredentials: true,
          })
          .then(() => {
            alert('일기가 작성 되었습니다.');
            history.push('/mypage');
          }
          )
          .catch((err) => {
            alert('일기 작성이 실패되었습니다. 다시 작성해주세요.');
            console.error(err);
            history.push('/');
        });
      }
  }

  const cancelBtn = () => {
    history.push('/');
  };

  // 에디터 툴 내용 추출
  const editorRef = useRef();
  
  const getEditorContent = () => {
    const editorInstance = editorRef.current.getInstance();
    // const getContent_md = editorInstance.getMarkdown();
    const GetContent_html = editorInstance.getHtml();
    setContent(GetContent_html)
  }


// 테스트용으로 남겨둔거 나중에 작성 완료되면 삭제해야됨
  // useEffect(()=> {
  //   console.log(title)
  //   console.log(date)
  //   console.log(feelings)
  //   console.log(weather)
  //   console.log(bookInfo.id)
  //   console.log(content)
  //   console.log(picUrl)
  // }, [title,date,feelings,weather,bookInfo,content,picUrl])


  return (
      <DiaryWritingWrapper>
        <Header main={routes.main} login={routes.login} />
        <DiaryWritingMain>
          <WriteHeader>
            <WriteHeaderLeft>
              <WriteTitle>
                제목: <input type="text" placeholder="15자 이내로 작성해주세요" onChange={titleHandler}/>
              </WriteTitle>
              <WriteDate>
                날짜: <input type="text" placeholder="예시) 2021-06-07" onChange={dateHandler}/>
              </WriteDate>
            </WriteHeaderLeft>
            <WriteHeaderRight>
              <Feeling setFeelings={setFeelings} />
              <Weather setWeather={setWeather} />
            </WriteHeaderRight>
          </WriteHeader>
          <WriteContents>
            <Darw setPicUrl={setPicUrl}/>
            <Editor 
              previewStyle="vertical" 
              height="300px" 
              initialEditType="markdown" 
              useCommandShortcut={true} 
              ref={editorRef} 
              onChange={getEditorContent}
            />
          </WriteContents>
          <Footer>
            {/* 여기서 취소를 누르면 전페이지로 이동 */}
            <CancelButton onClick={cancelBtn}>취 소</CancelButton>
            <WriteButton onClick={writeBtn}>생 성</WriteButton>
       

          </Footer>
        </DiaryWritingMain>
        <ToggleButton />
    </DiaryWritingWrapper>
  )
}
