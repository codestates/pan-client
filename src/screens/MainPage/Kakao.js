// 리다이렉트될 화면
// Kakao.js

import React from "react";


const KakaoHandler = (props) => {

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");


  return (
      <>
        {console.log( '실행됌?')}
      </>
  )
};

export default KakaoHandler