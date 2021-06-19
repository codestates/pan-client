import React, { useState } from 'react';
import { ModalProvider } from "styled-react-modal";
import { CoverMain, CoverWrapper, Cover, CoverHeader, CoverDelete } from "../../components/Mypages/style_Books";
import Deletebook from '../Modals/DeleteBook';

export default function Books ({isCoverClick, books}) {
    const [ modalIsOpen, setIsOpen ] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    return (
        <ModalProvider>
            <CoverMain>
                <CoverWrapper>
                    {books.map((book)=> {
                        return  (
                            <Cover 
                                key={book.id} 
                                style = {{
                                    backgroundImage: `url(${book.bookCover})`,
                                    backgroundSize: '100% 100%',
                                }}
                                onClick={ () => isCoverClick(book.Diaries)}
                                >
                                <h2>{book.bookName}</h2> 
                            </Cover>
                        )
                    })}
                </CoverWrapper>
                <CoverHeader>
                    <CoverDelete type="button" onClick={openModal}>
                        일기장 삭제
                    </CoverDelete>
                </CoverHeader>
                <Deletebook modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} books={books} />
            </CoverMain>
        </ModalProvider>
    )
} 