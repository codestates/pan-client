import React, { useEffect, useState, useContext, useRef }  from 'react';
import routes from '../../routes';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import ToggleButton from '../../components/ToggleButton';
import {
    DiaryWritingWrapper, DiaryWritingMain, WriteHeader, WriteHeaderLeft, 
    WriteContents, WriteTitle, WriteHeaderRight, WriteDate, Footer, WriteButton, CancelButton 
  } from '../../components/writing/DiaryWritingLayout';
import { CreateBookContext } from "../../store/CreateBookStore";
import Feeling from "./Feeing";
import Weather from "./Weather";

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';

import { ModalProvider } from "styled-react-modal";
import AlertModal from "../Modals/AlertModal";

export default function Writing() {
  const createContext = useContext(CreateBookContext);
  const history = useHistory();

  const { bookInfo } = createContext;
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [feelings, setFeelings] = useState('');
  const [weather, setWeather] = useState('');
  const [content, setContent] = useState('');
  const [temp, setTemp] = useState({});
  const [diaryId, setDiaryId] = useState('');

  // modal state
  const [isModal, setIsModal] = useState(false)
  const [alertMsg, setAlertMsg] = useState("")
  const [btnContents, setBtnContents] = useState("")
  const [toPage, setToPage] = useState("")

   // 모달 핸들러
   const modalHandler = (isModal, alertMsg, btnContents, toPage) => {
    setIsModal(isModal);
    setAlertMsg(alertMsg);
    setBtnContents(btnContents);
    setToPage(toPage);
  }

  
  useEffect( ()=> {
    setTemp(JSON.parse(localStorage.getItem('temp')))
    setDiaryId(JSON.parse(localStorage.getItem('id')))
 
    diaryId !== null ? 
    fixed()
    :
    editorRef.current.getInstance().setHtml("<h5>제목,기분,날짜,날씨,내용을 작성해주세요.</h5>"); 
  },[diaryId])

  // 수정할 데이터 담기
  const fixed = () => {
    editorRef.current.getInstance().setHtml(temp.content)
    setTitle(temp.title)
    setDate(temp.date)
  }

  
  // 제목에 입력한 값 상태에 담기 15자 넘어가면 짤리게 설정해서 최대15자까지 작성가능
  const titleHandler = (e) => {
      if(e.target.value.length > 15) {
          e.target.value = e.target.value.substr(0, 15);
          modalHandler(true, '15자 이내로 작성해주세요', '확인');
      }else {
        setTitle(e.target.value);
      }
  };
  // 제목과 마찬가지로 날짜는 총10글자 2022-06-17 까지만 작성가능하게 하고 상태에 저장
  const dateHandler = (e) => {
      if(e.target.value.length > 10) {
          e.target.value = e.target.value.substr(0, 10);
          modalHandler(true, '형식에 맞게 작성해주세요', '확인');
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
            modalHandler(true, '일기장을 다시 선택하고 작성해주세요', '확인' );
          }
          else if(!title || !date || !feelings || !weather || !content ) {
            modalHandler(true, '제목,기분,날짜,날씨,내용을 작성해주세요', '확인' );
          } else {
          await axios({
            method: 'post',
            url: 'https://api.picanote.me/diaries',
            data: {
                bookId: bookInfo.id,
                title,
                date,
                feelings,
                weather,
                content,
            },
            headers: {
                Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                'ContentType' : 'application/json',
            },
                withCredentials: true,
          })
          .then(() => {
            localStorage.removeItem('temp');
            modalHandler(true, '일기가 작성 되었습니다', '확인', '/mypage');
          }
          )
          .catch((err) => {
            modalHandler(true, '일기 작성을 실패했습니다', '확인', '/');
        });
      }
  }

  const fixedBtn = async () => {
    localStorage.removeItem('temp');

    if(!title || !date || !feelings || !weather || !content ) {
      modalHandler(true, '제목,기분,날짜,날씨,내용을 작성해주세요', '확인' );
    } else {
    await axios({
      method: 'put',
      url: `https://api.picanote.me/diaries/${diaryId}`,
      data: {
          bookId: bookInfo.id,
          title,
          date,
          feelings,
          weather,
          content,
      },
      headers: {
          Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
          'ContentType' : 'application/json',
      },
          withCredentials: true,
    })
    .then(() => {
      localStorage.removeItem('temp');
      localStorage.removeItem('id');
      
      modalHandler(true, '일기가 수정 되었습니다', '확인', '/mypage');
    }
    )
    .catch((err) => {
      modalHandler(true, '일기 수정이 실패되었습니다', '확인', '/');
  });
}
  }

  const cancelBtn = () => {
    history.push('/');
    localStorage.removeItem('temp');
    localStorage.removeItem('id');
  };

  // 에디터 툴 내용 추출
  const editorRef = useRef();

  // 텍스트 에디터 툴 설정
  const getEditorContent = () => {
    const editorInstance = editorRef.current.getInstance();
    // const getContent_md = editorInstance.getMarkdown();
    const GetContent_html = editorInstance.getHtml();
    setContent(GetContent_html);
  }


  return (
    <ModalProvider>
        <AlertModal 
          isModal={isModal} 
          setIsModal={setIsModal} 
          alertMsg={alertMsg} 
          btnContents={btnContents} 
          toPage={toPage}
        /> 
      <DiaryWritingWrapper>
        <Header main={routes.main} login={routes.login} />
        <DiaryWritingMain>
          <WriteHeader>
            <WriteHeaderLeft>
              <WriteTitle>
               제목: <input type="text" placeholder="15자 이내로 작성해주세요" value={title || ""} onChange={titleHandler}/>
              </WriteTitle>
              <WriteDate>
                날짜: <input type="text" placeholder="예시) 2021-06-07"  value={date || ""}  onChange={dateHandler}/>
              </WriteDate>
            </WriteHeaderLeft>
            <WriteHeaderRight>
              <Feeling setFeelings={setFeelings} />
              <Weather setWeather={setWeather} />
            </WriteHeaderRight>
          </WriteHeader>
          <WriteContents>
            <Editor              
              previewStyle="vertical" 
              height="590px" 
              initialEditType="markdown" 
              useCommandShortcut={true} 
              ref={editorRef} 
              onChange={getEditorContent}
            />
          </WriteContents>
          <Footer>
            {/* 여기서 취소를 누르면 전페이지로 이동 */}
            <CancelButton onClick={cancelBtn}>취 소</CancelButton>
            {
              diaryId ? <WriteButton onClick={fixedBtn}>수 정</WriteButton> :
              <WriteButton onClick={writeBtn}>생 성</WriteButton>
            }
          </Footer>
        </DiaryWritingMain>
        <ToggleButton />
    </DiaryWritingWrapper>
    </ModalProvider>
  )
}
