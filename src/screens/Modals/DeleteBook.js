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
    const [target, setTarget] = useState("")
    const [btnContents, setBtnContents] = useState("")

    // alertModal handler
    const alertHandler = ( isModal, alertMsg, btnContents ) => {
        setIsModal(isModal);
        setBtnContents(btnContents);
        setAlertMsg(alertMsg);
        setTarget(target)
    }

    // deleteModal handler
    const deleteHandler = ( isConfirmModal, target ) => {
        setIsConfirmModal(isConfirmModal);
        setTarget(target)
    }

    // 일기장 삭제
    const HandleSubmit = async() => {
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
            alertHandler(true, '삭제가 완료되었습니다', '확인' );
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
            target={target}
            HandleSubmit={HandleSubmit}
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
                            return !bookId ? alertHandler(true, '삭제할 일기를 선택해주세요', '확인') : deleteHandler(true, '삭제')
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