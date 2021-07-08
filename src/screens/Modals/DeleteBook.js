import axios from "axios";
import React, { useState } from "react";
import { 
    StyledModal, ModalBox, 
    ModalHeader, ModalTitle, DiaryWrapper, Public,
    ModalMiddle, MiddleTitle, ModalBook, DeleteCover,
    ModalBottom, Button
} from "../../components/modal/Style_DeleteBook";
import checkIcons from "../../images/check.png";
import { ModalProvider } from "styled-react-modal";
import DeleteModal from "../Modals/DeleteModal";
import AlertModal from "../Modals/AlertModal";

export default function Deletebook(props) {
    
    const { modalIsOpen, setIsOpen, books } = props;
    const closeModal = () => {
        setIsOpen(false);
    }
    const [ bookId, setBookId ] = useState();

    // modal state
    const [isModal, setIsModal] = useState(false)
    const [isConfirmModal, setIsConfirmModal] = useState(false)
    const [alertMsg, setAlertMsg] = useState("")
    const [btnContents, setBtnContents] = useState("")

    // 모달 핸들러
    const modalHandler = ( isModal, alertMsg, btnContents ) => {
        setIsModal(isModal);
        setBtnContents(btnContents);
        setAlertMsg(alertMsg);
    }

    // 일기장 삭제
    const HandleSubmit = async(e) => {
        await axios({
            method: "delete",
            url: `https://api.picanote.me/books/${bookId}`,
            headers:{
                Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                'ContentType' : 'application/json',
            },
            withCredentials : true
        })
        .then(()=> {
            modalHandler(true, '삭제가 완료되었습니다', '확인' );
            setIsOpen(false);
            setTimeout(() => {
                window.location.reload(true)
            }, 500);
        })
    }

    return (
        <ModalProvider>
        <AlertModal
            isModal={isModal} 
            setIsModal={setIsModal} 
            alertMsg={alertMsg} 
            btnContents={btnContents}
        />
        <DeleteModal
            isModal={isConfirmModal} 
            setIsModal={setIsConfirmModal} 
            HandleSubmit={HandleSubmit}
            bookId={bookId}
        />
        <StyledModal isOpen={modalIsOpen}>
            <ModalBox>
                <ModalHeader>
                    <ModalTitle>삭제할 일기장을 선택하세요</ModalTitle>
                </ModalHeader>
                <ModalMiddle>
                    <MiddleTitle>
                        <p>일기장을</p><br/>
                        <p>선택해</p><br/>
                        <p>주세요</p>
                    </MiddleTitle>
                    <ModalBook>
                        {books.map((book) => {
                            return (
                                <DiaryWrapper key={book.id}>
                                    {
                                        book.id === bookId ?
                                        <Public 
                                            type="checkbox" 
                                            onClick={()=>{setBookId(book.id)}} 
                                            style={{
                                                border: '3px solid white',
                                                backgroundImage: `url(${checkIcons})`,
                                                backgroundSize: '100% 100%',
                                                width: '13%',
                                                height: '6%'
                                            }}
                                        />
                                        :
                                        <Public type="checkbox" onClick={()=>{setBookId(book.id)}}/>
                                    }
                                    <DeleteCover key={book.id} style={{ backgroundImage: `url(${book.bookCover})`, backgroundSize: "100% 100%"}}>
                                        <h2>{book.bookName}</h2>
                                    </DeleteCover>
                                </DiaryWrapper>
                            )
                        })}
                    </ModalBook>
                </ModalMiddle>
                <ModalBottom>
                    <Button 
                        style={{backgroundColor: "white", color: "tomato"}} 
                        onClick={()=> { 
                            return !bookId ? modalHandler(true, '삭제할 일기를 선택해주세요', '확인') : setIsConfirmModal(true)
                             }}>
                        DELETE
                        </Button>
                    <Button className="close" onClick={closeModal}>CLOSE</Button>
                </ModalBottom>
            </ModalBox>
        </StyledModal>
        </ModalProvider>
    )
}