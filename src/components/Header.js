import styled from "styled-components";
import SearchImg from "../images/loupe.png"
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import route from "../routes"
import React from "react";
import { useHistory } from "react-router-dom";

function Header () {
  const history = useHistory();
  const token = localStorage.getItem('CC_Token');
  const handlelogout = () => {
    try {
      localStorage.removeItem('CC_Token');
      history.push("/");
      window.location.reload(true);
    } catch(err) {
      console.log(err);
    }
  }

  return ( 
    <HeaderBox>
      <Wrapper>
        <HeaderName>
          <Link to={route.main}><img src={logo} alt="" width="30%"/></Link>
        </HeaderName>
        <SearchBox>
          <SearchTxt type="text" placeholder="Type to search"/>
          <SearchBtn href="#">
            <img src={SearchImg} width="13px" alt="serach"/> 
          </SearchBtn>
        </SearchBox>   
            {token ? 
              (
                <Login>
                  <Link onClick={handlelogout}>LOGOUT</Link>
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 18px;
`
const Wrapper = styled.div`
  max-width: 1430px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
`;

const HeaderName = styled.span`
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`

const Login = styled.div`
  font-weight: bold;
  font-size: large;
  cursor: pointer;
  color: #3D8DAB;
`

  const SearchBox = styled.div`
  position: absolute;
  display: flex;
  top: 35px;
  right: 200px;
  height: 30px;
  padding: 5px;
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

const SearchBtn = styled.a `
  display: flex;
  text-decoration: none;
  justify-content: right;
  align-items: right;
  width: 32px;
  height: 17px;
  border-radius: 50%;
  color: black;
`

export default Header;