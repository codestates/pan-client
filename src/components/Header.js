import styled from "styled-components";
import SearchImg from "../images/loupe.png"
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import route from "../routes"
import React from "react";
import { useHistory } from "react-router-dom";

function Header ({SetKeywords, isMain, handlerSearch}) {
  const history = useHistory();
  const token = localStorage.getItem('CC_Token');
  const handlelogout = () => {
      localStorage.removeItem('CC_Token');
      history.push("/");
      window.location.reload(true);
  }

  const searchKeywords = (e) => {
    SetKeywords(e.target.value)
  }

  return ( 
    <Wrapper>
    <HeaderBox>
        <HeaderName>
          <Link to={route.main}><img src={logo} alt="" width="200px"/></Link>
        </HeaderName>
        <div> 
          {isMain ? 
          <SearchBox>
            <SearchTxt type="text" placeholder="Type to search" onChange={searchKeywords}/>
            
            <SearchBtn href="#" onClick={handlerSearch}>
              <img src={SearchImg} width="15px" alt="serach" /> 
            </SearchBtn>
          </SearchBox>   
          : 
            null
          }
              {token ? 
                (
                  <Login>
                    <Link to="#" onClick={handlelogout}>LOGOUT</Link>
                  </Login>
                )
                :
                (
                  <Login>
                    <Link to={route.login}>LOGIN</Link>
                  </Login>
                )
              }
        </div>
    </HeaderBox>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const HeaderBox = styled.div` 
  /* border:1px solid black; */
  display: flex;
  align-items: center;
  max-width: 1675px;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
  padding: 18px;
`

const HeaderName = styled.span`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`

const Login = styled.div`  
  display: inline-block;
  font-weight: bold;
  font-size: x-large;
  cursor: pointer;
  color: #3D8DAB;
  margin-right: -6px;
`

  const SearchBox = styled.div`
  display: inline-block;
  height: 30px;
  padding: 6px;
  margin-right: 10px;
  border-radius: 50px;
  transition: .5s;
  /* border: 1px solid rgb(61, 141, 171); */
  &:hover {
    line-height: 60px;
    box-shadow:  0 0 .5px 2px #3D8DAB;
  }
  &:hover > input {
    padding: 0 6px;
    width: 240px;
  }
  `

const SearchTxt =styled.input `
  display: flex;
  padding: 0;
  width: 0px;
  border: none;
  outline: none;
  float: left;
  font-size: 1rem;
  line-height: 17px;
  transition: .4s;
`

const SearchBtn = styled.button `
  display: flex;
  text-decoration: none;
  justify-content: right;
  align-items: right;
  /* width: 32px; */
  height: 17px;
  border-radius: 50%;
  color: black;
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`

export default Header;