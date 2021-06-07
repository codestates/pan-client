import React, { useState, useEffect, useContext }  from 'react';
import Header from '../components/Header'
import routes from '../routes'
import styled from 'styled-components'
import default_profile from '../images/default_profile.png'
import ToggleButton from './ToggleButton';
import { AiOutlineCamera } from "react-icons/ai";
import Books from '../components/Mypages/Books'
import Diaries from '../components/Mypages/Diaries'
import { UserContext } from "../store/UserStore"
import axios from 'axios';

export default function  Mypage() { 
  const [cur, setCur] = useState({
    individual : true,
    group : false,
  })

  const context = useContext(UserContext);
  const {username, accessTokenRequest, refreshTokenRequest} = context ;
  const [individual, setIndividual] = useState([]);
  const [group, setGroup] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lookBooks, SetLookBooks] = useState(false);
  const [diaries, setDiaries] = useState([]);

  // books=> cover onClick 하면 books안에있는 diary들이 diaries state에 저장이 된다.
  const isCoverClick = (e) => {
    SetLookBooks(true);
    setDiaries(e);
    console.log(e)
  }

  const changeIndividual = () => {
    setCur({individual : true, group : false});
    SetLookBooks(false);

  }
  const changeGroup = () => {
    setCur({individual : false, group : true});
    SetLookBooks(false);
  }

  // refreshTokenRequest()
  useEffect(accessTokenRequest, [accessTokenRequest])
  
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      await axios.get('https://localhost:80/books',{
      headers:{
      Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
      'ContentType' : 'application/json',
      },
      withCredentials : true
      })
      .then(res => {
        if(!res.data.data.groupId) {
          setIndividual(res.data.data)
        } else {
          setGroup(res.data.data)
        }
  
      })
      setLoading(false);
    };   

    fetchPosts();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Header main={routes.main} login={routes.login}></Header>
      <MypageWrapper>
        <MypageMain>
          <LeftSection>
            <ProfileWrapper>
              <Profile src={default_profile} alt="이미지입니다" />
              <ProfileButton>
                <AiOutlineCamera size="90%" />
              </ProfileButton>
            </ProfileWrapper>
            <Usernmae>{username}</Usernmae>
            <PersonalDiary cur={cur.individual} onClick={changeIndividual}>개인 일기</PersonalDiary>
            <ExchangeDiary cur={cur.group} onClick={changeGroup}>교환 일기</ExchangeDiary>
            <Print>print</Print>
          </LeftSection>
       
            <DiarySection>
            {/* 개인일기, 교환일기 선택해서 나오게 해주는 것! 내용은 수정이 필요함 */}
            {cur.individual ? 
            lookBooks === false ? <Books isCoverClick={isCoverClick} books={individual}></Books> : <Diaries diary={diaries}></Diaries>  
            :
            lookBooks === false ? <Books isCoverClick={isCoverClick} books={group}></Books> : <Diaries diary={diaries}></Diaries>  
            }
            </DiarySection>
        </MypageMain>
      </MypageWrapper>
      <MypageFooter />
      <ToggleButton />
    </>
  )
}
const MypageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
`
const MypageMain = styled.div`
  /* border: 1px solid black; */
  position: relative;
  display: flex;
  height: 88vh;
  width: 80%;
  max-width: 1600px;

`

const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 80%;
  /* background-color: #FFF9E9; */
`

const MypageFooter = styled.footer`
  width: 100%;
  height: 10vh;
`
