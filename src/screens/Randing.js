import Header from '../components/Header';
import routes from "../routes";
import styled from 'styled-components';

function Randing () {
    return (
      <>
        <Header home={routes.home} login={routes.login}></Header>
        
        <Main>
            <Div>소개글 1</Div>
            <Div>소개글 2</Div>
            <Div>소개글 3</Div>
        </Main>
        <footer>footer</footer>    
      </>
    )
}
const Main = styled.body`
  border: 2px solid red;

`


const Div = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px
`




export default Randing;
