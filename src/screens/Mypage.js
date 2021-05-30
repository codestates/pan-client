import React, { useState }  from 'react';
import Header from '../components/Header'
import routes from '../routes'
import styled from 'styled-components'
import default_profile from '../images/default_profile.png'
import ToggleButton from './ToggleButton';
import { AiOutlineCamera } from "react-icons/ai";
import Books from '../components/Mypages/Books'
import Diaries from '../components/Mypages/Diaries'
import { TabMenu } from '../components/Mypages/CommonStyle';

export default function  Mypage() { 
  const [cur, setCur] = useState({
    person : true,
    exchange : false,
  })

  return (
    <MypageWrapper>
      <Header main={routes.main} login={routes.login} />
        <MypageMain>
          <LeftSection>
          <ProfileWrapper>
            <Profile src={default_profile} alt="이미지입니다" />
            <ProfileButton>
              <AiOutlineCamera size="90%" />
            </ProfileButton>
          </ProfileWrapper>
            <Usernmae>꼬북좌</Usernmae>
            <PersonalDiary cur={cur.person} onClick={() => setCur({person : true, exchange : false})}>개인 일기</PersonalDiary>
            <ExchangeDiary cur={cur.exchange} onClick={() => setCur({person : false, exchange : true,})}>교환 일기</ExchangeDiary>
            <Print>print</Print>
          </LeftSection>
            <DiarySection>
            <Books></Books>
            {/* <Diaries></Diaries> */}
            </DiarySection>
        </MypageMain>
        <ToggleButton />
    </MypageWrapper>
  )
}
const MypageWrapper = styled.div`
  /* border: 1px solid black; */
  align-items: center;
  justify-content: center;
`
const MypageMain = styled.div`
  position: relative;
  left: 7.5%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  height: 88vh;
  width: 80%;
`

const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid green; */
  width: 27%;
  height: 80%;
`

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top : 6%;
  /* border: 2px solid red; */
  width: 100%;
  height: 30%;
`

const Profile = styled.img`
  position: relative;
  object-fit: cover;
  border: 1px solid #CCDEE2;
  border-radius: 50%;
  margin: 20px 0 0 40px;
  width: 150px;
  height: 150px;
  text-align: center;
`

const ProfileButton = styled.button`
  position: relative;
  top: 12%;
  left: -50px;
  width: 14%;
  height: 21%;
  border: none;
  background-color: Transparent;
  background-repeat:no-repeat;
  outline:none;
  cursor: pointer;
`

const Usernmae = styled.h2`
  display: flex;
  justify-content: center;
  width: 70%;
  height: 8%;
  margin-top: 7%;
  /* border: 1px solid blue; */
  text-align: left;
  font-family: 'MapoGoldenPier';
  font-size: 2em;
  font-weight: bold;
`

const PersonalDiary = styled.button`
  width: ${props => props.cur === true ? '74%' : "70%"};
  height: 8%;
  top:100px;
  margin-top: 10%;
  cursor: pointer;
  font-size: 2em;
  font-family: 'MapoGoldenPier';
  font-weight: bold;
  text-align: left;
  background-color: ${props => props.cur === true ? '#3D8DAB' : '#83B799'};
  opacity: ${props => props.cur === true ? '1.0' : '0.5'};
  color: #FFFFFF;
  border-radius: 5px;
  border:none;
  box-shadow: 5px 5px 5px #E4D8B4;
  :hover {
    background-color: #B6CB9E;
  }
`

const ExchangeDiary = styled.button`
  width: ${props => props.cur === true ? '74%' : "70%"};
  height: 8%;
  margin-top: 3%;
  cursor: pointer;
  font-size: 2em;
  font-family: 'MapoGoldenPier';
  font-weight: bold;
  text-align: left;
  background-color: ${props => props.cur === true ? '#3D8DAB' : '#83B799'};
  opacity: ${props => props.cur === true ? '1.0' : '0.5'};
  color: #FFFFFF;
  border-radius: 5px;
  border:none;
  box-shadow: 5px 5px 5px #E4D8B4;
  :hover {
    background-color: #B6CB9E;
  }
`

const Print = styled.button`
  width: 70%;
  height: 8%;
  margin: 24%;
  cursor: pointer;
  font-size: 2em;
  font-weight: bold;
  text-align: left;
  background-color: #E4D8B4;
  border-radius: 5px;
  border:none;
  :hover {
    background-color: #E2CD6D;
  }
`

const DiarySection = styled.section`
  position: relative;
  top: 3%;
  left: 4.2%;
  /* border: 1px solid red; */
  width: 66%;
  height: 77%;
  /* background-color: #FFF9E9; */
`