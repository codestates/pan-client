// 토큰 로그인을 위해 글로벌 state를 관리하기 위한 파일
// 전역으로 설정해줘서 어디서나 밑에 상태들을 사용할 수 있음
import React, { createContext, useState, useContext } from 'react'

//createContext를 사용하여 상태값을 담을 박스 생성 -> 그 박스의 이름을 지정(Context)
const Context = createContext();

//상위 컴포넌트에 UserContextProvider 컴포넌트를 감싸기 위한 설정
export function UserContextProvider({ children }) {
  //글로벌하게 관리하고 싶은 상태값 지정
  const [isToken, setIsToken] = useState(null)
  const [isLogin, setIsLogin] = useState(false);
  return (
    //변수명.Provider 문법으로 그 범위 안에있는 컴포넌트한테 값을 공유할 수 있음
    //value값에 전송할 props 넣기 속성명(value)는 임의변경 불가
    <Context.Provider
      value={{
        isLogin,
        setIsLogin,
        isToken,
        setIsToken
      }}
    >
      {children}
    </Context.Provider>
  )
}

//이걸 이용해서 value에 있는 값에 접근 할 수 있다.
//예를들어 const {user} = useUserContext(); 를 하면 user상태값을 빼올 수 있음
export function useUserContext() {
    return useContext(Context)
  }

