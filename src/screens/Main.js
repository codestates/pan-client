import Header from '../components/Header'
import routes from "../routes";
import styled from 'styled-components';
import ToggleButton from './ToggleButton';
import Top10 from '../components/MainPages/Top10';
import PublicNote from '../components/MainPages/PublicNote';

function Main() {
    return (
        <>
          <Header main={routes.landing} login={routes.login}></Header>
          <MainBody>
            <PhraseGroup>
              <Phrase>순간의 기억을 정리하고</Phrase>
              <Phrase style={{ color: "#CCDEE2" }}>영원한 추억으로 기록하세요.</Phrase>
              <Phrase style={{ color: "#75A5A9" }}>글과 그림으로 오늘을 표현하다. <span style={{ color: "#3D8DAB" }}>Pic, a note</span></Phrase>
            </PhraseGroup>
            <Div1>
              <Top10 />
            </Div1>
            <Div2>
              <Div3>
                <MainLabel>공유된 개인일기</MainLabel><MainLabel>공유된 교환일기</MainLabel>
              </Div3>
              <PublicNote />
            </Div2>
          </MainBody>
          <ToggleButton />
        </>
    )
}


const MainBody = styled.body`
  border: 2px solid black;
  height: 100%;
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
  font-family: 'MapoGoldenPier';
  font-weight: bolder;
  color: #E3DFD4;
`;

const Div1 = styled.div`
  border: 1px solid red;
  height: 40vh;
`;

const Div2 = styled.div`
  border: 1px solid blue;
  height: 40vh;
`;

const Div3 = styled.div`
  display: flex;
`;

const MainLabel = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Noto Sans KR", sans-serif;
  margin: 0 2rem 1.8rem;
  padding-bottom: 8px;
  width: fit-content;
  border-bottom: 4px solid #343a40;
`;

export default Main;