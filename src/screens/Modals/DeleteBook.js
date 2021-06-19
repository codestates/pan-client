import axios from "axios";
import React, { useState } from "react";
import { 
    StyledModal, ModalBox, 
    ModalHeader, ModalTitle, DiaryWrapper, Public,
    ModalMiddle, MiddleTitle, ModalBook, DeleteCover,
    ModalBottom, Button
} from "../../components/modal/Style_DeleteBook";

export default function Deletebook(props) {
    
    const { modalIsOpen, setIsOpen, books } = props;
    const closeModal = () => {
        setIsOpen(false);
    }
    const [ bookId, setBookId ] = useState();
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
        alert("삭제가 완료되었습니다.")
        .then(setIsOpen(false))
        .then((res) => { window.location.reload(true) }
        )
    }

    return (
        <StyledModal isOpen={modalIsOpen}>
            <ModalBox>
                <ModalHeader>
                    <ModalTitle>삭제할 일기장을 선택하세요</ModalTitle>
                </ModalHeader>
                <ModalMiddle>
                    <MiddleTitle>
                        일기장을<br />
                        선택해주세요
                    </MiddleTitle>
                    <ModalBook>
                        {books.map((book) => {
                            return (
                                <DiaryWrapper key={book.id}>
                                    <Public type="checkbox" onClick={()=>{setBookId(book.id)}}/>
                                    <DeleteCover key={book.id} style={{ backgroundImage: `url(${book.bookCover})`, backgroundSize: "100% 100%"}}>
                                        <h2>{book.bookName}</h2>
                                    </DeleteCover>
                                </DiaryWrapper>
                            )
                        })}
                    </ModalBook>
                </ModalMiddle>
                <ModalBottom>
                    <Button style={{backgroundColor: "white", color: "tomato"}} onClick={HandleSubmit}>DELETE</Button>
                    <Button className="close" onClick={closeModal}>CLOSE</Button>
                </ModalBottom>
            </ModalBox>
        </StyledModal>
    )
}