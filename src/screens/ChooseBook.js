import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { StyledModal, Header, Wrapper, CreateBooks, SelectBook, Footer, ModalButton, LeftCreateDiv, LeftTitleDiv, LeftCoverDiv, SelectCover, RightCreateDiv, PreviewCover, CoverImg } from "../components/modal/Style_ChooseBook";
import bg01 from "../images/Cover_img/01.png"
import bg02 from "../images/Cover_img/02.png"
import bg03 from "../images/Cover_img/03.png"
import bg04 from "../images/Cover_img/04.png"
import bg05 from "../images/Cover_img/05.png"
import bg06 from "../images/Cover_img/06.png"
import bg07 from "../images/Cover_img/07.png"

export default function ChooseBook() {
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
                                일기장 이름:
                                <input type="text"/>
                            </LeftTitleDiv>
                            <LeftCoverDiv>
                                <h1>커버를 선택해주세요.</h1>
                                <SelectCover>
                                    <CoverImg src={bg01} />
                                    <CoverImg src={bg02} />
                                    <CoverImg src={bg03} />
                                    <CoverImg src={bg04} />
                                    <CoverImg src={bg05} />
                                    <CoverImg src={bg06} />
                                    <CoverImg src={bg07} />
                                </SelectCover>
                            </LeftCoverDiv>
                            </LeftCreateDiv>
                            <RightCreateDiv>
                            <PreviewCover>제목이 나오는 공간</PreviewCover>
                            </RightCreateDiv>
                        </Wrapper>
                        <Footer>
                            {/* 여기서 취소를 누르면 전페이지로 이동 */}
                            <ModalButton onClick={() => setModalIsOpen(false)}>취소</ModalButton>
                            <ModalButton onClick={() => setModalIsOpen(false)}>생성</ModalButton>
                        </Footer>
                    </>
                }
            </StyledModal>
        </>
    )
}