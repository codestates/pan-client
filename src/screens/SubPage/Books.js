import React from 'react';
import { CoverWrapper, Cover } from "../../components/Mypages/style_Books";

export default function Books ({isCoverClick, books}) {
    return (
        <CoverWrapper>
            {books.map((book)=> {
                return  (
                    <Cover 
                        key={book.bookName} 
                        onClick={ () => isCoverClick(book.Diaries)}>
                        <h2>{book.bookName}</h2> 
                    </Cover>
                )
            })}
        </CoverWrapper>
    )
} 