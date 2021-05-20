import styled from "styled-components";
import SearchImg from "../images/loupe.png"
import { Link } from "react-router-dom";

function Header ({ main, login }) {
    return (
        <>
        <HeaderBox>
          <HeaderName>
            <Link to={main}>Pic,a Note</Link>
          </HeaderName>
          <div>
            <SearchBox>
              <SearchTxt type="text" placeholder="Type to search"/>
              <SearchBtn href="#">
                <img src={SearchImg} width="13px" alt="serach"/> 
              </SearchBtn>
            </SearchBox>
            <Login>
              <Link to={login}>LOGIN</Link>
            </Login>
          </div>
        </HeaderBox>
        </>
    )
}


const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 22px;
  border-bottom: 1px solid #7b7872;
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
  cursor: pointer;
`

  const SearchBox = styled.div`
    display: flex;
    padding: 5px;
    position: absolute;
    top: 13px;
    right: 70px;
    height: 30px;
    border-radius: 50px;
    transition: .5s;
    &:hover {
      box-shadow:  0 0 .5px 1px black;
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