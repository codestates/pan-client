import React from 'react';
import Header from '../components/Header'
import routes from '../routes'
import styled from 'styled-components'
import kermit from '../images/kermit.png'
import ToggleButton from './ToggleButton';
import { TiCameraOutline } from "react-icons/ti";

export default function  Mypage() {
  return (
    <MypageWrapper>
      <Header main={routes.main} login={routes.login}></Header>
        <MypageMain>
          <LeftSection>
          <ProfileWrapper>
            <Profile src={kermit} alt="이미지입니다"></Profile>
            <ProfileButton>
              <TiCameraOutline size="138%" color="#C57951"></TiCameraOutline>
            </ProfileButton>
          </ProfileWrapper>
            <Usernmae>username</Usernmae>
            <PersonalDiary>개인 일기</PersonalDiary>
            <ExchangeDiary>교환 일기</ExchangeDiary>
            <Print>print</Print>
          </LeftSection>
          <DiarySection>

          </DiarySection>
        </MypageMain>
        <ToggleButton></ToggleButton>
    </MypageWrapper>
  )
}
const MypageWrapper = styled.div`
  /* border: 1px solid black; */

`
const MypageMain = styled.div`
  /* border: 1px solid red; */
  display: flex;
  height: 88vh;
  width: 100%;
`

const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid green;
  width: 27%;
  height: 80%;
`

const ProfileWrapper = styled.div`
  display: flex;
  margin-top : -5%;
  border: 2px solid red;
  width: 100%;
  height: 30%;
`

const Profile = styled.img`
  position: relative;
  border: 1px solid blue;
  border-radius: 50%;
  margin: 20px 0 0 40px;
  width: 45%;
  height: 80%;
  text-align: center; 
`


const ProfileButton = styled.button`
  position: relative;
  top: 12%;
  left: -14%;
  width: 14%;
  height: 21%;
  border: none;
  background-color: Transparent;
  background-repeat:no-repeat;
  outline:none;
  cursor: pointer;
`

const Usernmae = styled.h2`
  width: 70%;
  height: 8%;
  margin-top: 7%;
  /* border: 1px solid blue; */
  text-align: left;
  font-size: 3em;
  font-weight: bold;
`

const PersonalDiary = styled.button`
  width: 70%;
  height: 8%;
  top:100px;
  margin-top: 10%;
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

const ExchangeDiary = styled.button`
  width: 70%;
  height: 8%;
  margin-top: 3%;
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

const Print = styled.button`
  width: 70%;
  height: 8%;
  margin-top: 28%;
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
  border: 1px solid red;
  width: 66%;
  height: 77%;
`