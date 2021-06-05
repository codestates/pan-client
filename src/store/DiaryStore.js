import React, { createContext, useState } from 'react'
import axios from 'axios';

export const DiaryContext = createContext();


function DiaryStore (props) {
    const [diary, setDiary] = useState();

    return (
        <DiaryContext.Provider value={{
            diary,
            setDiary
        }}
        > 
        {props.children}
        </DiaryContext.Provider>
    )
}


export default DiaryStore


