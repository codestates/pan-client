import React, { useState } from 'react';
import Modal from 'styled-react-modal'
import styled from 'styled-components';
import { FiPlusCircle } from 'react-icons/fi';

function ChooseBook() {
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
          <Footer>
            <ModalButton onClick={() => setModalIsOpen(false)}>취소</ModalButton>
            <ModalButton onClick={() => setModalIsOpen(false)}>선택</ModalButton>
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
      border: 4px solid rgba(39, 64, 64);
      border-radius: 10px;
      display: flex;
      margin-bottom: 20px;
      align-items: center;
      justify-content: center;
    `

    const CreateBooks= styled.div`
      margin: 0 15px;
      border: 1px solid black;
      box-shadow: 5px 5px 5px gray;
      border-radius: 15px;
      width: 20%;
      height: 80%;
      cursor: pointer;
      opacity: 0.5;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: large;
      font-weight: 600;
      :hover {
        opacity: 1;
        transform: scale(1.05);
      }
    `


    const SelectBook = styled.div`
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(5, minmax(20%, 1fr));
      grid-template-rows: repeat(3, minmax(50%, 1fr));
      overflow-x: scroll;
        div{
          margin : 10px;
          border: 1px solid black;
          border-radius: 15px;
          box-shadow: 5px 5px 5px gray;
          cursor: pointer;
          opacity: 0.7;
          :hover {
            opacity: 1;
            transform: scale(1.05);
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

    
export default ChooseBook