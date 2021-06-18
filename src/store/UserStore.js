import React, { createContext, useState } from 'react'
import axios from 'axios';

export const UserContext = createContext();


function UserStore (props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [profileUrl, setProfileUrl] = useState("");
    
    const accessTokenRequest = () => {
        // axios.get('https://api.picanote.me/accessToken',{
        axios.get('https://api.picanote.me/accessToken',{
        headers:{
        Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
        'ContentType' : 'application/json',
        },
        withCredentials : true
        })
        .then(res => {
            const { username, email } = res.data.data.userInfo;
            setUsername(username);
            setEmail(email);
            setProfileUrl(profileUrl);
        })
        .catch( error => {
        console.log(error)
        alert("다시 로그인 해주세요.");
        })
    }


    const refreshTokenRequest = () => {
        axios
        //   .get("https://api.picanote.me/refreshToken", {
          .get("https://api.picanote.me/refreshToken", {
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.message !== "ok") {
              alert("refresh token이 만료되어 불러올 수 없습니다. 다시 로그인 해주시기 바랍니다.");
            }

            const { username, email } = res.data.data.userInfo;
            setUsername(username);
            setEmail(email);
            let tokenData = res.data.data.accessToken;
            localStorage.setItem('CC_Token', tokenData);
          });
      }
      
    return (
        <UserContext.Provider value={{
            username,
            setUsername,
            email,
            setEmail,
            profileUrl,
            setProfileUrl,
            accessTokenRequest,
            refreshTokenRequest
        }}
        > 
        {props.children}
        </UserContext.Provider>
    )
}


export default UserStore








