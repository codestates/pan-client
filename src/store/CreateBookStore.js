import React, { createContext, useState } from 'react'

export const CreateBookContext = createContext();

function CreateBookStore (props) {
    const [bookInfo, setBookInfo] = useState({});

    return (
        <CreateBookContext.Provider value={{
            bookInfo,
            setBookInfo
        }}>
            {props.children}
        </CreateBookContext.Provider>
    )
}


export default CreateBookStore