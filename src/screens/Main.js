import Header from '../components/Header'
import routes from "../routes";
import styled from 'styled-components';
import ToggleButton from './ToggleButton';

function Main() {
    return (
        <>
          <Header main={routes.landing} login={routes.login}></Header>
          <MainBody>
            <Phrase>글귀</Phrase>
            <Div1>Top10</Div1>
            <Div2>공개된 개인/그룹 일기</Div2>
          </MainBody>
          <ToggleButton />
        </>
    )
}


const MainBody = styled.body`
  border: 1px solid black;
  height: 190vh;
`

const Phrase = styled.div`
  border: 1px solid green;
  height: 30vh;
`

const Div1 = styled.div`
  border: 1px solid red;
  height: 80vh;
`

const Div2 = styled.div`
  border: 1px solid blue;
  height: 80vh;
`

// const Footer = styled.div`
//   border: 2px solid orange;
//   height: 20vh;
// `

export default Main;