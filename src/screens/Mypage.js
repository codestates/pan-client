import React, { useState, useEffect, useContext }  from 'react';
import axios from 'axios';
import routes from '../routes';
import Header from '../components/Header';
import ToggleButton from './ToggleButton';
import Books from '../components/Mypages/Books';
import Diaries from '../components/Mypages/Diaries';
import default_profile from '../images/default_profile.png';
import { AiOutlineCamera } from "react-icons/ai";
import { UserContext } from "../store/UserStore";
import { MypageWrapper, MypageMain, LeftSection, ProfileWrapper, Profile, ProfileButton, Usernmae, PersonalDiary, ExchangeDiary, Print, DiarySection, MypageFooter } from "../components/Mypages/Style_Mypage"

export default function Mypage() { 
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
        const individualBooks = res.data.data.filter(e=>!e.groupId);
        const groupBooks = res.data.data.filter(e=> e.groupId);
          setIndividual(individualBooks)
          setGroup(groupBooks)
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