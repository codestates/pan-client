import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { StyledModal, Header, Wrapper, CreateBooks, SelectBook, Footer, ModalButton, LeftCreateDiv, LeftTitleDiv, LeftCoverDiv, SelectCover, RightCreateDiv, PreviewCover, CoverImg } from "../components/modal/Style_ChooseBook";
import bg01 from "../images/Cover_img/01.png"
import bg02 from "../images/Cover_img/02.png"
import bg03 from "../images/Cover_img/03.png"
import bg04 from "../images/Cover_img/04.png"
import bg05 from "../images/Cover_img/05.png"
import bg06 from "../images/Cover_img/06.png"
import bg07 from "../images/Cover_img/07.png"

export default function ChooseBook() {
    const history = useHistory();
    const [modalIsOpen,setModalIsOpen] = useState(true);
    const [create, setCreate] = useState(false);
    const [books, setBooks] = useState([]);
    // const [chooseBook, setChooseBook] = useState(false);
    
    const [bookName, setBookName] = useState('일기장 이름');
    const [bookCover, setBookCover] = useState(bg01);

    useEffect(async () => {
        try{
            await axios.get('https://api.picanote.me/myBook',{
                headers:{
                Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                'ContentType' : 'application/json',
                },
                withCredentials : true
                })
                .then(res => setBooks(res.data.data));
        }catch{ 
            console.error("err");
        }
    },[books]);

    const createBook = async () => {
        try{ 
            await axios({
                method: 'post',
                url: 'https://api.picanote.me/books',
                data: {
                    bookName,
                    bookCover,
                },
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                    'ContentType' : 'application/json',
                    },
                withCredentials: true,
            })
            .then(
                alert('북이 생성되었습니다'),
                setCreate(false),
                );
        }catch{
            console.error("err");
        }        
    };

    const cancelBtn = () => {
        setModalIsOpen(false);
        history.push('/');
    };
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
                                {books.map(book=>{
                                    return( 
                                        <div key={book.id} className="foo" onClick={(e)=>console.log(e.target.classlist)}>
                                          {book.bookName}
                                        </div> 
                                    )})
                                }
                            </SelectBook>
                        </Wrapper> 
                        <Footer>
                            <ModalButton onClick={cancelBtn}>취소</ModalButton>
                            <ModalButton onClick={()=> {setModalIsOpen(false)}}>선택</ModalButton>
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
                                <input type="text" placeholder="일기장 이름" onChange={e => {setBookName(e.target.value)}}/>
                            </LeftTitleDiv>
                            <LeftCoverDiv>
                                <h1>커버를 선택해주세요.</h1>
                                <SelectCover>
                                    <CoverImg src={bg01} onClick={e => {setBookCover(e.target.src)}} />
                                    <CoverImg src={bg02} onClick={e => {setBookCover(e.target.src)}} />
                                    <CoverImg src={bg03} onClick={e => {setBookCover(e.target.src)}} />
                                    <CoverImg src={bg04} onClick={e => {setBookCover(e.target.src)}} />
                                    <CoverImg src={bg05} onClick={e => {setBookCover(e.target.src)}} />
                                    <CoverImg src={bg06} onClick={e => {setBookCover(e.target.src)}} />
                                    <CoverImg src={bg07} onClick={e => {setBookCover(e.target.src)}} />
                                </SelectCover>
                            </LeftCoverDiv>
                            </LeftCreateDiv>
                            <RightCreateDiv>
                            <PreviewCover 
                                style={{
                                    backgroundImage: `url(${bookCover})`,  
                                    backgroundPosition: 'center',   
                                    backgroundSize: '100% 100%',  
                                    backgroundRepeat: 'no-repeat'
                                    }}>
                                {bookName}
                            </PreviewCover>

                            </RightCreateDiv>
                        </Wrapper>
                        <Footer>
                            {/* 여기서 취소를 누르면 전페이지로 이동 */}
                            <ModalButton onClick={cancelBtn}>취소</ModalButton>
                            <ModalButton onClick={createBook}>생성</ModalButton>
                        </Footer>
                    </>
                }
            </StyledModal>
        </>
    )
}