import React, { createContext, useState } from 'react'

export const CreateDiaryInfoContext = createContext();

function DiaryInfoStore (props) {
    const [diaryInfo, setDiaryInfo] = useState({});



    return (
        <CreateDiaryInfoContext.Provider value={{
            diaryInfo,
            setDiaryInfo
        }}>
            {props.children}
        </CreateDiaryInfoContext.Provider>
    )
}


export default DiaryInfoStore