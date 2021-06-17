import React, { createContext, useState } from 'react'

export const IsGroupContext = createContext();

function IsGroupStore (props) {
    const [isGroup, setIsGroup] = useState(false);

    return (
        <IsGroupContext.Provider value={{
            isGroup,
            setIsGroup
        }}
        > 
            {props.children}
        </IsGroupContext.Provider>
    )
}


export default IsGroupStore








