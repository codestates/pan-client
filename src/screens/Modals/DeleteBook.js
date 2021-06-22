import axios from "axios";
import React, { useState } from "react";
import { 
    StyledModal, ModalBox, 
    ModalHeader, ModalTitle, DiaryWrapper, Public,
    ModalMiddle, MiddleTitle, ModalBook, DeleteCover,
    ModalBottom, Button
} from "../../components/modal/Style_DeleteBook";
import checkIcons from "../../images/check.png";

export default function Deletebook(props) {
    
    const { modalIsOpen, setIsOpen, books } = props;
    const closeModal = () => {
        setIsOpen(false);
    }
    const [ bookId, setBookId ] = useState();

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
            setIsOpen(false)
            alert("삭제가 완료되었습니다.")
        })
        .then(() => { window.location.reload(true)})
    }

    return (
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
                    <Button style={{backgroundColor: "white", color: "tomato"}} onClick={HandleSubmit}>DELETE</Button>
                    <Button className="close" onClick={closeModal}>CLOSE</Button>
                </ModalBottom>
            </ModalBox>
        </StyledModal>
    )
}