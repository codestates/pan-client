// 리다이렉트될 화면
// Kakao.js

import axios from "axios";
import React, { useEffect } from "react";



export default function KakaoHandler(props) {

  // 인가코드
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(()=> {
    axios({
      method: 'get',
      url: `https://api.picanote.me/kakao?code=${code}`,
      data: {},
      withCredentials: true
    
      }) 
      .then(res => console.log(res))
  
  }, [])



  return (
      <>
        <h1>리다이렉트 페이지</h1>

      </>
  )
};
