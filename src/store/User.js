import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';

export const UserContext = createContext();


function UserStore (props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const accessTokenRequest = () => {
        axios.get('https://api.picanote.me/accessToken',{
        headers:{
        Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
        'ContentType' : 'application/json',
        },
        withCredentials : true
        })
        .then(res => {
            const { username, email } = res.data.data.userInfo;
            setUsername(username)
            setEmail(email)
        })
        .catch( error => {
        console.log(error)
        alert("다시 로그인 해주세요.");
        })
    }

    return (
        <UserContext.Provider value={{
            username,
            setUsername,
            email,
            setEmail,
            accessTokenRequest
        }}
        > 
        {props.children}
        </UserContext.Provider>
    )
}


export default UserStore








