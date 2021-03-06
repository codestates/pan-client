import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { 
    StyledModal, Header, Wrapper, CreateBooks, SelectBook, Footer, ModalButton,
    LeftCreateDiv, LeftTitleDiv, LeftCoverDiv, SelectCover, RightCreateDiv, PreviewCover, CoverImg } 
    from "../../components/modal/Style_ChooseBook";
import { InviteModal, InviteUser, GroupWrapper, InviteBtn, CancelBtn, InviteBottom, CheckBtn, SearchUser, GroupHeader } from "../../components/modal/Style_InviteUser";
import bg01 from "../../images/Cover_img/01.png"
import bg02 from "../../images/Cover_img/02.png"
import bg03 from "../../images/Cover_img/03.png"
import bg04 from "../../images/Cover_img/04.png"
import bg05 from "../../images/Cover_img/05.png"
import bg06 from "../../images/Cover_img/06.png"
import bg07 from "../../images/Cover_img/07.png"
import bg08 from "../../images/Cover_img/08.png"
import bg09 from "../../images/Cover_img/09.png"
import bg10 from "../../images/Cover_img/10.png"
import bg11 from "../../images/Cover_img/11.png"
import bg12 from "../../images/Cover_img/12.png"
import bg13 from "../../images/Cover_img/13.png"
import bg14 from "../../images/Cover_img/14.png"
import bg15 from "../../images/Cover_img/15.png"
import bg16 from "../../images/Cover_img/16.png"
import bg17 from "../../images/Cover_img/17.png"
import bg18 from "../../images/Cover_img/18.png"
import bg19 from "../../images/Cover_img/19.png"
import bg20 from "../../images/Cover_img/20.png"
import bg21 from "../../images/Cover_img/21.png"
import bg22 from "../../images/Cover_img/22.png"
import bg23 from "../../images/Cover_img/23.png"
import bg24 from "../../images/Cover_img/24.png"
import bg25 from "../../images/Cover_img/25.png"
import bg26 from "../../images/Cover_img/26.png"
import bg27 from "../../images/Cover_img/27.png"
import bg28 from "../../images/Cover_img/28.png"
import bg29 from "../../images/Cover_img/29.png"
import bg30 from "../../images/Cover_img/30.png"
import bg31 from "../../images/Cover_img/31.png"
import bg32 from "../../images/Cover_img/32.png"
import bg33 from "../../images/Cover_img/33.png"
import bg34 from "../../images/Cover_img/34.png"
import bg35 from "../../images/Cover_img/35.png"
import bg36 from "../../images/Cover_img/36.png"
import bg38 from "../../images/Cover_img/38.jpeg"
import bg39 from "../../images/Cover_img/39.png"
import bg40 from "../../images/Cover_img/40.png"
import bg41 from "../../images/Cover_img/41.jpeg"
import bg42 from "../../images/Cover_img/42.jpeg"
import bg43 from "../../images/Cover_img/43.jpeg"
import bg44 from "../../images/Cover_img/44.jpeg"
import bg45 from "../../images/Cover_img/45.jpeg"
import bg46 from "../../images/Cover_img/46.png"
import bg47 from "../../images/Cover_img/47.jpeg"
import bg48 from "../../images/Cover_img/48.jpeg"

import { CreateBookContext } from "../../store/CreateBookStore";
import { ModalProvider } from "styled-react-modal";
import AlertModal from "../Modals/AlertModal";

export default function ChooseBook() {

    const BG = [ bg01, bg02, bg03, bg04, bg05, bg06, bg07, bg08, bg09, bg10, bg11, bg12, bg13, bg14, bg15, bg16, bg17, bg18, 
        bg19, bg20, bg21, bg22, bg23, bg24, bg25, bg26, bg27, bg28, bg29, bg30, bg31, bg32, bg33, bg34, bg35, bg36, bg38, bg39,
        bg40, bg41, bg42, bg43, bg44, bg45, bg46, bg47, bg48 ];

    // modal 
    const [modalIsOpen,setModalIsOpen] = useState(true);
    const [inviteModalIsOpen,setInviteModalIsOpen] = useState(true);
    // create ??????
    const [create, setCreate] = useState(false);
    const [books, setBooks] = useState([]);
    const [bookName, setBookName] = useState('????????? ??????');
    const [bookCover, setBookCover] = useState(bg01);
    const [groupId, setGroupId] = useState('');
    // ?????? ??????
    const [inviteUser, setInviteUser] = useState([]);
    const [inviteUser1, setInviteUser1] = useState('');
    const [inviteUser2, setInviteUser2] = useState('');
    //context API
    const context = useContext(CreateBookContext);
    const {bookInfo, setBookInfo} = context ;
    // modal state
    const [isModal, setIsModal] = useState(false)
    const [alertMsg, setAlertMsg] = useState("")
    const [btnContents, setBtnContents] = useState("")
    const [toPage, setToPage] = useState("")

    // ?????? ?????????
    const modalHandler = (isModal, alertMsg, btnContents, toPage) => {
        setIsModal(isModal);
        setAlertMsg(alertMsg);
        setBtnContents(btnContents);
        setToPage(toPage);
    }

    
    // ????????? ???????????? ?????? ????????? ??? ????????? ????????????
    useEffect(async () => {
        try{
            await axios.get('https://api.picanote.me/myGroupBook',{
                headers:{
                Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                'ContentType' : 'application/json',
                },
                withCredentials : true
                })
                .then(res => setBooks(res.data.data))
        }catch{ 
            console.error("err");
        }
    },[]);

    // ?????? ??????
    const selectBtn = () => {
        setBookInfo(bookInfo)
        bookInfo.id ? setModalIsOpen(false) : 
        modalHandler(true, '???????????? ??????????????????', '??????');

    };

    // create?????? ?????? ???????????? ??? ????????? ????????? ???????????? ???????????? ?????? ?????????
    const createBook = async () => {
            localStorage.getItem('CC_Token') ? 
                await axios({
                    method: 'post',
                    url: 'https://api.picanote.me/books',
                    data: {
                        bookName,
                        bookCover,
                        groupId
                    },
                    headers:{
                        Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                        'ContentType' : 'application/json',
                        },
                    withCredentials: true,
                })
                .then(
                    modalHandler(true, '???????????? ?????????????????????', '??????'),
                    setCreate(false),
                    setTimeout(() => {
                        window.location.reload(true);
                    }, 100)
                )
            :
                modalHandler(true, '????????? ??? ??????????????????', '??????' );   
    };

    // ????????? ?????? ?????? ?????????
    const inviteModalBtn = async () => {
                    await axios({
                        method: 'post',
                        url: `https://api.picanote.me/user-group`,
                        data: { 
                            email: inviteUser
                        },
                        headers:{
                            Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                            'ContentType' : 'application/json',
                            },
                        withCredentials: true,
                    })
                    .then(res => setGroupId(res.data.groupInfo.id))
                    .then(()=> {
                        modalHandler(true, '????????? ?????????????????????.', '??????')
                        setInviteModalIsOpen(false)})
                    .catch(() => modalHandler(true, '???????????? ??????????????????', '??????'));             
    }

    useEffect(()=>{},[groupId])

    // ?????? ?????? ?????? ??? ????????????
    const inviteCancelBtn = () => {
        setInviteModalIsOpen(false);
    }
    // 1?????? ????????? ???????????????.
    const CheckUser1 =  () => {
        setInviteUser([inviteUser1])
        modalHandler(true, `???????????? ?????? ???????????????`, '??????' ); 
        
    }
    // 2?????? ????????? ???????????????.
    const CheckUser2 = () => {
        setInviteUser([inviteUser1, inviteUser2])
        modalHandler(true, `???????????? ?????? ???????????????`, '??????' );  
    }

    // ???????????? ??????????????? ?????? ??? ?????? ??????????????? ??????
    const createCancelBtn = () => {
        setCreate(false)
    };

    // ?????? ????????? ????????? ???????????? ????????? => ??????????????? ????????? ????????? ???????????? ??????
    const chooseCancelBtn = () => {
        setModalIsOpen(false);
    };

    return (
        <ModalProvider>
        <AlertModal 
            isModal={isModal} 
            setIsModal={setIsModal} 
            alertMsg={alertMsg} 
            btnContents={btnContents} 
            toPage={toPage}
        /> 
            <StyledModal isOpen={modalIsOpen}>
                {!create ?
                    <>
                        <Header>
                            <h1>????????? ????????????</h1>
                            <h2>???????????? ??????????????? ??????????????? ?????? ?????? ??????????????????</h2>
                        </Header>
                        <Wrapper>
                            <CreateBooks onClick={()=>{setCreate(true)}}>
                            <FiPlusCircle size="50%"/>
                            ????????? ????????????
                            </CreateBooks>
                            <SelectBook>
                                {books.map(book=>{
                                    return ( 
                                        book.id === bookInfo.id ? 
                                        <div 
                                            key={book.id} 
                                            className="foo" 
                                            style={{
                                                backgroundImage:`url(${book.bookCover})`,
                                                backgroundSize: '100% 100%',
                                                border: '4px solid black'
                                            }}
                                            onClick={() => setBookInfo(book)}>
                                            {book.bookName}
                                        </div> 
                                        :
                                        <div 
                                            key={book.id} 
                                            className="foo" 
                                            style={{
                                                backgroundImage:`url(${book.bookCover})`,
                                                backgroundSize: '100% 100%'
                                            }}
                                            onClick={() => setBookInfo(book)}>
                                            {book.bookName}
                                        </div>
                                    )
                                })}
                            </SelectBook>
                        </Wrapper> 
                        <Footer>
                            <ModalButton onClick={chooseCancelBtn}>??????</ModalButton>
                            <ModalButton onClick={selectBtn}>??????</ModalButton>
                        </Footer>
                        </>
                        :
                        <>
                        <Header>
                            <h1>????????? ????????????</h1>
                            <h2>????????? ????????? ?????????????????? ????????? ??????????????????.</h2>
                        </Header>

                        {/* ?????? ????????? ?????? */}
                        <Wrapper>
                            {/* ?????? ?????? ????????? */}
                            <InviteModal isOpen={inviteModalIsOpen}> 
                                <GroupWrapper>
                                    <GroupHeader>
                                        ????????? ????????? ???????????? ??????????????????
                                    </GroupHeader>
                                    <SearchUser>
                                        <InviteUser 
                                            type="text" 
                                            placeholder="????????? ????????? ???????????? ??????????????????." 
                                            onChange={(e)=> {setInviteUser1(e.target.value)}}
                                        />
                                        <CheckBtn onClick={CheckUser1}>Check</CheckBtn>
                                    </SearchUser>
                                    <SearchUser>
                                        <InviteUser 
                                            type="text" 
                                            placeholder="????????? ????????? ???????????? ??????????????????." 
                                            onChange={(e)=> {setInviteUser2(e.target.value)}}
                                        />
                                        <CheckBtn onClick={CheckUser2}>Check</CheckBtn>
                                    </SearchUser>
                                    <InviteBottom>
                                        <CancelBtn onClick={inviteCancelBtn}>??????</CancelBtn>
                                        <InviteBtn onClick={inviteModalBtn}>??????</InviteBtn>
                                    </InviteBottom>
                                </GroupWrapper>
                            </InviteModal>
                            <LeftCreateDiv>
                                <LeftTitleDiv>
                                    ????????? ??????:
                                    <input type="text" placeholder="????????? ??????" onChange={e => {setBookName(e.target.value)}}/>
                                </LeftTitleDiv>
                                <LeftCoverDiv>
                                    <h1>????????? ??????????????????.</h1>
                                    <SelectCover>
                                        {BG.map((img,index) => <CoverImg key={index} src={img} onClick={e => {setBookCover(e.target.src)}} />)}    
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
                            {/* ????????? ????????? ????????? ??????????????? ?????? */}
                            <ModalButton onClick={createCancelBtn}>??????</ModalButton>
                            <ModalButton onClick={createBook}>??????</ModalButton>
                        </Footer>
                    </>
                }
            </StyledModal>
        </ModalProvider>
    )
}