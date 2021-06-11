import React, { useState } from 'react';
import Modal from 'styled-react-modal'
import styled from 'styled-components';
import { FiPlusCircle } from 'react-icons/fi';

export default function ChooseGroupBook() {
  const [modalIsOpen,setModalIsOpen] = useState(true);
  const [create, setCreate] = useState(false)


    return (
      <>
        <StyledModal isOpen={modalIsOpen}>
        {!create ?
          <>
          <Header>
            <h1>일기장 선택하기</h1>
            <h2>일기장을 생성하기를 원하신다면 생성 버튼 클릭해주세요</h2>
          </Header>
          <Wrapper>
            <CreateBooks onClick={()=>{setCreate(true)}}>
              <FiPlusCircle size="50%"/>
              일기장 생성하기
            </CreateBooks>
            <SelectBook>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </SelectBook>
          </Wrapper> 
          <Footer>
            <ModalButton onClick={() => setModalIsOpen(false)}>취소</ModalButton>
            <ModalButton onClick={() => setModalIsOpen(false)}>선택</ModalButton>
          </Footer>
          </>
          :
          <>
          <Header>
          <h1>일기장 생성하기</h1>
          <h2>일기장 이름을 작성해주시고 표지를 선택해주세요.</h2>
          </Header>
          <Wrapper>
            <LeftCreateDiv>
              <LeftTitleDiv>
                일기장 이름을 작성해주세요.
                <input type="text"/>
              </LeftTitleDiv>
              <LeftCoverDiv>
                <h1>커버를 선택해주세요.</h1>
                <SelectCover>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </SelectCover>
              </LeftCoverDiv>
            </LeftCreateDiv>
            <RightCreateDiv>
              <PreviewCover>제목이 나오는 공간</PreviewCover>
            </RightCreateDiv>
          </Wrapper>
          <Footer>
            <ModalButton onClick={() => setModalIsOpen(false)}>취소</ModalButton>
            <ModalButton onClick={() => setModalIsOpen(false)}>생성</ModalButton>
          </Footer>
          </>
          
          }
        </StyledModal>
   
      </>
    )
    }
    const StyledModal = Modal.styled`
    width: 60vw;
    height: 80vh;
    display: flex;
    border-radius: 20px;
    align-items: center;
    flex-direction: column;
    background-color: white;
   `
    const Header = styled.div`
      /* margin: 40px 0px 20px 0px; */
      width: 100%;
      height: 10vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 12px;
      h1 {
        font-size: xx-large;
        font-weight: 800;
        padding-bottom: 20px;
        color: #1C1B1A;
      }
      h2 {
        font-size: large;
        font-weight: 600;
        color: #BB2B2A;
      }
    `
   
    const Wrapper = styled.section`
      width:95%;
      height: 80%;
      padding: 10px 0;
      border-radius: 10px;
      display: flex;
      margin-bottom: 20px;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      font-family: 'GmarketSansMedium';
    `

    const CreateBooks= styled.div`
      margin: 0 15px;
      border: 1px solid lightgray;
      box-shadow: 5px 5px 5px gray;
      border-radius: 15px;
      width: 20%;
      height: 50%;
      cursor: pointer;
      opacity: 0.5;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: large;
      font-weight: 600;
      :hover {
        border: 4px solid black;
      }
    `


    const SelectBook = styled.div`
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(5, minmax(20%, 1fr));
      grid-template-rows: repeat(5, minmax(50%, 1fr));
      overflow-x: scroll;
        div{
          margin : 10px;
          border: 1px solid lightgray;
          border-radius: 15px;
          box-shadow: 5px 5px 5px gray;
          cursor: pointer;
          opacity: 0.7;
          :hover {
            border: 4px solid black;
          }
        }
    `
    const Footer = styled.div`
        width: 95%;
        height: 10%;
        display: flex;      
        justify-content: flex-end;
        margin-bottom: 20px;
    `

    const ModalButton = styled.button`
        width: 150px;
        height: 90%;
        margin-left: 15px;
        border: 0;
        border-radius: 15px;
        outline: 0;
        background-color: #3D8DAB;
        font-size: xx-large;
        color: white;
        cursor: pointer;
        :hover {
            transform: scale(1.05);
          }
    `

    const LeftCreateDiv = styled.div`
      width: 45%;
      height: 90%;
      border: 1px solid red;
      margin-right: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `
    const LeftTitleDiv = styled.div`
        width: 100%;
        height: 20%;
        border: 2px solid blue;
        display: flex;
        padding-left: 20px;
        align-items: center;
        font-size: 25px;
        input {
          border:1px solid black;
          margin-left: 30px;
        }
      
    `

    const LeftCoverDiv = styled.div`
        width: 100%;
        height: 80%;
        border: 2px solid blue;
        h1 {
          width: 100%;
          height: 10%;
          border: 1px solid tomato;
          display: flex;
          align-items: center;
          padding-left: 20px;
          font-size: 25px;
        }
    `
    const SelectCover = styled.div`
        width: 100%;
        height: 90%;
        display: grid;
        grid-template-columns: repeat(3, minmax(30%, 1fr));
        grid-template-rows: repeat(3, minmax(50%, 1fr));
        overflow-y: scroll;
          div{
            margin : 10px;
            border: 1px solid lightgray;
            border-radius: 15px;
            box-shadow: 5px 5px 5px gray;
            cursor: pointer;
            opacity: 0.7;
            :hover {
              border: 4px solid black;
            }
          }
    `
    
    const RightCreateDiv = styled.div`
      width: 45%;
      height: 90%;
      border: 1px solid red;
      margin-left: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    `

    const PreviewCover = styled.div`
        width: 50%;
        height: 70%;
        margin : 10px;
        border: 1px solid lightgray;
        border-radius: 15px;
        box-shadow: 5px 5px 5px gray;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
    `
