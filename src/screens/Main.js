import Header from '../components/Header'
import routes from "../routes";
import styled from 'styled-components';
import ToggleButton from './ToggleButton';

function Main() {
    return (
        <>
          <Header main={routes.landing} login={routes.login}></Header>
          <MainBody>
            <PhraseGroup>
              <Phrase>순간의 기억을 정리하고</Phrase>
              <Phrase style={{ color: "#CCDEE2", paddingLeft: "3rem" }}>영원한 추억으로 기록하세요.</Phrase>
              <Phrase style={{ color: "#75A5A9", paddingLeft: "4rem" }}>일상을 발행하다. <span style={{ color: "#3D8DAB", fontWeight: 900}}>Pic, a note</span></Phrase>
            </PhraseGroup>
            <Div1>Top10</Div1>
            <Div2>공개된 개인/그룹 일기</Div2>
          </MainBody>
          <ToggleButton />
        </>
    )
}


const MainBody = styled.body`
  border: 2px solid black;
  height: 190vh;
`

const PhraseGroup = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Phrase = styled.div`
  display: block;
  padding-left: 2rem;
  margin-bottom: 15px;
  font-size: 2rem;
  /* font-family: "Noto Serif KR", serif; */
  font-family: 'CookieRun-Regular';
  font-style: normal;
  color: #E3DFD4;
`;

const Div1 = styled.div`
  border: 1px solid red;
  height: 80vh;
`;

const Div2 = styled.div`
  border: 1px solid blue;
  height: 80vh;
`;

// const Footer = styled.div`
//   border: 2px solid orange;
//   height: 20vh;
// `

export default Main;