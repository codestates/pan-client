import routes from "../routes";
import styled from 'styled-components';
import Header from '../components/Header';
import bg_image from "../images/background.jpg";
import PageTitle from '../components/PageTitle';

function Landing () {
    return (
      <LandingHtml>
        <PageTitle title="HOME" />
        <Header main={routes.main} login={routes.login}></Header>
        <LandingBody>
            <Introduction>
              <BgColorGreen>
                <Gif left="8%" right="none">gif형식의 파일을 넣어주세요</Gif>
                <Text left="none" right="10%">
                  <h2>소개글 3</h2> 
                  <p>                 
                    동해물과 백두산이 마르고 닳도록 <br/>
                    하느님이 보우하사 우리 나라 만세  <br/>
                    무궁화 삼천리 화려 강산 대한 사람  <br/>
                    대한으로 길이 보존하세.  <br/>
                  </p>   
                </Text>
              </BgColorGreen>
            </Introduction>
            <Introduction>
              <BgColorRed>
              <Gif left="none" right="8%">gif형식의 파일을 넣어주세요</Gif>
              <Text left="10%" right="noen">
                <h2>소개글 2</h2> 
                <p>                 
                  동해물과 백두산이 마르고 닳도록 <br/>
                  하느님이 보우하사 우리 나라 만세  <br/>
                  무궁화 삼천리 화려 강산 대한 사람  <br/>
                  대한으로 길이 보존하세.  <br/>
                </p>   
              </Text>
              </BgColorRed>
            </Introduction>
            <Introduction>
              <BgColorYellow>
              <Gif left="8%" right="none">gif형식의 파일을 넣어주세요</Gif> 
              <Text left="none" right="10%">
                <h2>소개글 3</h2> 
                <p>                 
                  동해물과 백두산이 마르고 닳도록 <br/>
                  하느님이 보우하사 우리 나라 만세  <br/>
                  무궁화 삼천리 화려 강산 대한 사람  <br/>
                  대한으로 길이 보존하세.  <br/>
                </p>   
              </Text>
              </BgColorYellow>
            </Introduction>
        </LandingBody> 
      </LandingHtml>
    )
}

const LandingHtml = styled.html`
  background-image: url(${bg_image});
  justify-content: center;
  align-items: center;
`

const LandingBody = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 215vh;
`

const Introduction = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  top: 0%;
  width: 100%;
  height: 70vh;
`

const Gif = styled.div`
  position: absolute;
  left: ${props => props.left || "10%"};
  right: ${props => props.right || "10%"};
  width: 40%;
  height: 45vh;
  background-color: white;
`

const Text = styled.div`
  position: absolute;
  top: 35%;
  left: ${props => props.left || "10%"};
  right: ${props => props.right || "10%"};
  width: 30%;
  height: 30%;
  border: 1px solid green;

  h2 {  
    font-size: 2.5vw;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    background-color: #c0ded9;
  }
  p {
    font-size: 1.8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    background-color: #f0f0f0;
  }
`

const BgColorGreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 100%;
  background-color: rgba(61, 141, 171, 0.4);
  border-radius: 40px;
  margin-bottom: 20px;
`;

const BgColorRed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(216, 89, 65, 0.5);
  width: 95%;
  height: 100%;
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const BgColorYellow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(228, 216, 180, 0.5);
  width: 95%;
  height: 100%;
  border-radius: 40px;
  margin-top: 20px;
`;


export default Landing;
