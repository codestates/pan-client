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

export default function ChooseBook() {
    // modal 
    const [modalIsOpen,setModalIsOpen] = useState(true);
    const [inviteModalIsOpen,setInviteModalIsOpen] = useState(true);
    // create 변수
    const [create, setCreate] = useState(false);
    const [books, setBooks] = useState([]);
    const [bookName, setBookName] = useState('일기장 이름');
    const [bookCover, setBookCover] = useState(bg01);
    const [groupId, setGroupId] = useState('');
    // 초대 유저
    const [inviteUser, setInviteUser] = useState([]);
    const [inviteUser1, setInviteUser1] = useState('');
    const [inviteUser2, setInviteUser2] = useState('');
    //context API
    const context = useContext(CreateBookContext);
    const {bookInfo, setBookInfo} = context ;

    
    // 서버랑 통신해서 현재 회원의 북 정보를 받아온다
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

    // 선택 버튼
    const selectBtn = () => {
        setBookInfo(bookInfo)
        bookInfo.id ? setModalIsOpen(false) : alert('일기장을 선택해주세요.');
    };

    // create에서 북을 선택하고 북 이름을 적으면 일기장이 생성되기 위한 메소드
    const createBook = async () => {
        try{ 
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
                    alert('일기장이 생성되었습니다'),
                    setCreate(false),
                    setTimeout(() => {
                        window.location.reload(true);
                    }, 100)
                )
            :
                alert('일기장 생성이 실패했습니다. 로그인 후 생성 가능합니다.');   
        }catch{
            console.error("err");
        };
    };

    // 초대할 그룹 모달 핸들러
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
                    .then(()=> {setInviteModalIsOpen(false)})
                    .catch(() => alert('이메일을 확인해주세요.'));


                    
    }

    useEffect(()=>{
    },[groupId])

    // 초대 그룹 모달 창 취소하기
    const inviteCancelBtn = () => {
        setInviteModalIsOpen(false);
    }
    // 1번째 유저를 확인합니다.
    const CheckUser1 =  () => {
        setInviteUser([inviteUser1])
        alert(`체크 되었습니다.`)
        
    }
    // 2번째 유저를 확인합니다.
    const CheckUser2 = () => {
        setInviteUser([inviteUser1, inviteUser2])
        alert(`체크 되었습니다.`);  
    }

    // 취소하면 리로드되서 다시 북 선택 모달창으로 이동
    const createCancelBtn = () => {
        setCreate(false)
    };

    // 취소 버튼을 누르면 모달창이 닫아짐 => 비회원한테 글쓰기 화면을 보여주기 위함
    const chooseCancelBtn = () => {
        setModalIsOpen(false);
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
                            <ModalButton onClick={chooseCancelBtn}>취소</ModalButton>
                            <ModalButton onClick={selectBtn}>선택</ModalButton>
                        </Footer>
                        </>
                        :
                        <>
                        <Header>
                            <h1>일기장 생성하기</h1>
                            <h2>일기장 이름을 작성해주시고 표지를 선택해주세요.</h2>
                        </Header>

                        {/* 그룹 일기장 생성 */}
                        <Wrapper>
                            {/* 그룹 초대 모달창 */}
                            <InviteModal isOpen={inviteModalIsOpen}> 
                                <GroupWrapper>
                                    <GroupHeader>
                                        초대할 유저의 이메일을 작성해주세요
                                    </GroupHeader>
                                    <SearchUser>
                                        <InviteUser 
                                            type="text" 
                                            placeholder="초대할 유저의 이메일을 작성해주세요." 
                                            onChange={(e)=> {setInviteUser1(e.target.value)}}
                                        />
                                        <CheckBtn onClick={CheckUser1}>Check</CheckBtn>
                                    </SearchUser>
                                    <SearchUser>
                                        <InviteUser 
                                            type="text" 
                                            placeholder="초대할 유저의 이메일을 작성해주세요." 
                                            onChange={(e)=> {setInviteUser2(e.target.value)}}
                                        />
                                        <CheckBtn onClick={CheckUser2}>Check</CheckBtn>
                                    </SearchUser>
                                    <InviteBottom>
                                        <CancelBtn onClick={inviteCancelBtn}>취소</CancelBtn>
                                        <InviteBtn onClick={inviteModalBtn}>초대</InviteBtn>
                                    </InviteBottom>
                                </GroupWrapper>
                            </InviteModal>
                            <LeftCreateDiv>
                                <LeftTitleDiv>
                                    일기장 이름:
                                    <input type="text" placeholder="일기장 이름" onChange={e => {setBookName(e.target.value)}}/>
                                </LeftTitleDiv>
                                <LeftCoverDiv>
                                    <h1>커버를 선택해주세요.</h1>
                                    <SelectCover>
                                        <CoverImg src={bg38} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg39} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg40} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg41} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg42} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg43} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg44} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg45} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg46} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg47} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg48} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg01} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg02} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg03} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg04} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg05} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg06} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg07} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg08} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg09} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg10} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg11} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg12} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg13} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg14} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg15} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg16} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg17} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg18} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg19} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg20} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg21} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg22} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg23} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg24} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg25} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg26} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg27} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg28} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg29} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg30} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg31} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg32} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg33} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg34} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg35} onClick={e => {setBookCover(e.target.src)}} />
                                        <CoverImg src={bg36} onClick={e => {setBookCover(e.target.src)}} />
                      
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
                            <ModalButton onClick={createCancelBtn}>취소</ModalButton>
                            <ModalButton onClick={createBook}>생성</ModalButton>
                        </Footer>
                    </>
                }
            </StyledModal>
        </>
    )
}