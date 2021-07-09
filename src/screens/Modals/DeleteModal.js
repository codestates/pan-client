import Modal from 'styled-react-modal';
import styled from 'styled-components';
import React from "react";

export default function DeleteModal({ isModal, setIsModal, target, HandleSubmit }) {  

  return(

    <DeleteMD isOpen={isModal}>
      <DeleteText>
        {`${target}하면 복구 되지 않습니다`}
      </DeleteText>
      <DeleteText>
        정말&nbsp;
        <span style={{color: '#ec4646', fontWeight: '700'}}>
         {target}
        </span>
        &nbsp;하시겠습니까??
      </DeleteText>
      <DeleteFooter>
        <DeleteBtn onClick={() => { setIsModal(false) }}>
            취소
        </DeleteBtn>
        <DeleteBtn onClick={() => { HandleSubmit() }}>
            {target}
        </DeleteBtn>
      </DeleteFooter>
    </DeleteMD>
  )
}

const DeleteMD = Modal.styled`
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

const DeleteText = styled.p`
  width: 100%;
  font-size: x-large;
  font-family: 'Cafe24SsurroundAir';
  text-align: center;
  margin-bottom: 10px;
  word-wrap: break-word;
`

const DeleteFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-top: 20px;
`

const DeleteBtn = styled.button`
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

