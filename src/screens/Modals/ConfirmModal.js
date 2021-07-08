import Modal from 'styled-react-modal';
import styled from 'styled-components';
import React from "react";
import { useHistory } from 'react-router-dom';

export default function ConfirmModal({isModal, setIsModal, toPage1, toPage2}) {  

  const history = useHistory();

  return(
    <ConfirmMD isOpen={isModal}>
      <ConfirmText>
        비회원으로 작성 시 일기는
      </ConfirmText>
      <ConfirmText>
        <span style={{color: '#ec4646', fontWeight: '700'}}>
        저장
        </span>
        되지 않습니다
      </ConfirmText>
      <ConfirmFooter>
        <ConfirmBtn onClick={() => { 
                if(toPage1) {
                    setIsModal(false)
                history.push(`${toPage1}`)
                } else {
                    setIsModal(false)
                }
            }}>
            로그인
        </ConfirmBtn>
        <ConfirmBtn onClick={() => { 
                if(toPage2) {
                    setIsModal(false)
                history.push(`${toPage2}`)
                } else {
                    setIsModal(false)
                }
            }}>
            비회원으로 계속
        </ConfirmBtn>
      </ConfirmFooter>
    </ConfirmMD>
  )
}

const ConfirmMD = Modal.styled`
  width: 30rem;
  height: 12rem;
  display: flex;
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  box-shadow: 5px 5px 5px gray;
`;

const ConfirmText = styled.p`
  width: 60%;
  font-size: x-large;
  font-family: 'Cafe24SsurroundAir';
  text-align: center;
  margin-bottom: 10px;
  word-wrap: break-word;
`

const ConfirmFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-top: 20px;
`

const ConfirmBtn = styled.button`
  width: 40%;
  height: 100%;
  border-radius: 20px;
  margin: 0 10px;
  border: none;
  background-color: #3D8DAB;
  cursor: pointer;
  color: #FFF9E9;
  font-size: 20px;
  font-family: 'Cafe24SsurroundAir';
`

