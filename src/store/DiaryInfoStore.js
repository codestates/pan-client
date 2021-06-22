import React, { createContext, useState } from 'react'

export const DiaryInfoContext = createContext();

function DiaryInfoStore (props) {
    const [diaryInfo, setDiaryInfo] = useState("");

    return (
        <DiaryInfoContext.Provider value={{
            diaryInfo,
            setDiaryInfo
        }}>
            {props.children}
        </DiaryInfoContext.Provider>
    )
}


export default DiaryInfoStore