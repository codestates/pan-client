import styled from "styled-components";
import SearchImg from "../images/loupe.png"
import { Link, Route } from "react-router-dom";
import logo from "../images/logo_second.png"
import route from "../routes"
import React, { useEffect } from "react";
import {useUserContext} from "../store/LoginStore";
import { useHistory } from "react-router-dom";

function Header () {
    const history = useHistory();
    const token = localStorage.getItem('CC_Token');

    const handlelogout = () => {
      localStorage.removeItem('CC_Token');
      history.push('/');
    }

    return ( 
          <HeaderBox>
            <HeaderName>
              <Link to={route.main}><img src={logo} alt="" width="30%"/></Link>
            </HeaderName>
            <Wrapper>
              <SearchBox>
                <SearchTxt type="text" placeholder="Type to search"/>
                <SearchBtn href="#">
                  <img src={SearchImg} width="13px" alt="serach"/> 
                </SearchBtn>
              </SearchBox>   
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
                    
            </Wrapper>
          </HeaderBox>
    )
}


const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px;
  background-color: none;
  /* border-bottom: 1px solid #7b7872; */
  div {
    margin-top: 10px;
  } 
`

const HeaderName = styled.span`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`

const Login = styled.span`
  margin-right: 10%;
  font-weight: bold;
  font-size: large;
  cursor: pointer;
  color: #3D8DAB;
`
const Wrapper = styled.div`
  
`;

  const SearchBox = styled.div`
  position: absolute;
  display: flex;
  top: 16px;
  right: 90px;
  height: 30px;
  padding: 5px;
  border-radius: 50px;
  transition: .5s;
  /* border: 1px solid rgb(61, 141, 171); */
  &:hover {
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

const SearchBtn = styled.a `
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 17px;
  border-radius: 50%;
  color: black;
`

export default Header;