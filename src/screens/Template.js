import React from 'react';
import routes from '../routes';
import styled from 'styled-components';
import Header from '../components/Header'
import toronto from '../images/toronto.jpg'
import newyork from "../images/new_york.jpg";
import { useHistory } from "react-router-dom";
import ToggleButton from './ToggleButton';
import ChooseBook from '../components/modal/ChooseBook';
import { ModalProvider, BaseModalBackground } from "styled-react-modal";

export default function Template () {
  const history = useHistory();

    return (
        <ModalProvider backgroundComponent={FadingBackground}>
          <ChooseBook/>
            <Header main={routes.main} login={routes.login} />
            <Announcement>템플릿 선택하기</Announcement>
            <TemplateMain>
                <Writing  onClick={() => {history.push('/writing')}}>시적 감성</Writing>
                <Drawing onClick={() => {history.push('/drawing')}}>예술적 감성</Drawing>
            </TemplateMain>
            <ToggleButton></ToggleButton>
        </ModalProvider>
    )
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;


const Announcement = styled.div`
  /* position: relative; */
  padding-top: 4.3%;
  /* border:1px solid blue; */
  text-align: center;
  font-family: 'MapoGoldenPier';
  font-size: 50px;
  font-weight: 700;
  height: 20vh;
  max-width: 1600px;
  width: 80%;
  margin: 0 auto;
`

const TemplateMain = styled.section`
  display: flex;
  /* border: 1px solid black; */
  height: 70vh;
  max-width: 1600px;
  width: 80%;
  margin: 0 auto;
  `

const Writing = styled.div` 
  display: block;
  font-size: 50px;
  color: white;
  line-height: 520px;
  font-family: 'MapoGoldenPier';
  background-image: url(${toronto});
  background-size: 100% 100%;
  width: 30%;
  height: 70%;
  margin: 5% 5% 5% 15%;
  cursor: pointer;
  text-align: center;
  opacity: 0.5;
  border-radius: 10px;
  box-shadow: 10px 10px 10px gray ;
  :hover {
    opacity: 1;
    transform: scale(1.05);
  }
`

const Drawing = styled.div`
  display: block;
  font-size: 50px;
  color: white;
  line-height: 520px;
  font-family: 'MapoGoldenPier';
  background-image: url(${newyork});
  background-size: 100% 100%;
  width: 30%;
  height: 70%;
  margin: 5% 15% 5% 5%;
  cursor: pointer;
  text-align: center;
  opacity: 0.5;
  border-radius: 10px;
  box-shadow: 10px 10px 10px gray ;
  :hover {
    opacity: 1;
    transform: scale(1.05);
  }
`
