import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header'
import toronto from '../images/toronto.jpg'
import newyork from "../images/new_york.jpg";

export default function Template () {
    return (
        <>
        <Header></Header>
        <Announcement>템플릿 선택하기</Announcement>
        <TemplateMain>
            <Writing></Writing>
            <Drawing></Drawing>
        </TemplateMain>
        </>
    )
}


const Announcement = styled.div`
  position: relative;
  padding-top: 4.3%;
  /* border:1px solid blue; */
  text-align: center;
  font-size: xx-large;
  font-weight: 700;
  height: 20vh;
`

const TemplateMain = styled.section`
  display: flex;
  /* border: 1px solid black; */
  height: 60vh;
  width: 80vw;
  margin: 0 0 0 10%;
  `

const Writing = styled.div` 
  background-image: url(${toronto});
  background-size: 100% 100%;
  width: 30%;
  height: 80%;
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
  background-image: url(${newyork});
  background-size: 100% 100%;
  width: 30%;
  height: 80%;
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