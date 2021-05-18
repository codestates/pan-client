import styled from "styled-components";
import SearchImg from "../images/loupe.png"
import { Link } from "react-router-dom";

function Header ({ home, login }) {
    return (
        <>
        <HeaderBox>
          <HeaderName>
            <Link to={home}>Pic,a Note</Link>
          </HeaderName>
          <div>
          
            <a>
              <img src={SearchImg} width="13px" alt="serach"/> 
            </a>   
            <span>
              <Link to={login}>LOGIN</Link>
            </span>
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
  div > span {
 
     font-weight: bold;
     cursor: pointer;
   }
   div > a {
    margin-right: 17px;
    border: 0;
    outline: 0;
    background-color: none;
    cursor: pointer;
  }
`

const HeaderName = styled.a`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`



export default Header;
