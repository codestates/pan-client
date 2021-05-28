import React from 'react';
import styled from 'styled-components';
import bg from '../../images/background.jpg'

export default function Diaries () {
    return (
      <Container>
        <DiaryHeader>
          <button>연도</button>
          <button>월</button>
        </DiaryHeader>

        <DiaryWrapper>
          <Public type="checkbox"/>
          <Diary>
            <Ttitle>운수 좋은 날</Ttitle>
            <ChooseTP>T</ChooseTP>
            <Date>2021-05-27</Date>
          </Diary>
        </DiaryWrapper>
        <DiaryWrapper>
          <Public type="checkbox"/>
          <Diary>
            <Ttitle>운수 좋은 날</Ttitle>
            <ChooseTP>T</ChooseTP>
            <Date>2021-05-27</Date>
          </Diary>
        </DiaryWrapper>
        <DiaryWrapper>
          <Public type="checkbox"/>
          <Diary>
            <Ttitle>운수 좋은 날</Ttitle>
            <ChooseTP>T</ChooseTP>
            <Date>2021-05-27</Date>
          </Diary>
        </DiaryWrapper>
        <DiaryWrapper>
          <Public type="checkbox"/>
          <Diary>
            <Ttitle>운수 좋은 날</Ttitle>
            <ChooseTP>T</ChooseTP>
            <Date>2021-05-27</Date>
          </Diary>
        </DiaryWrapper>
        <DiaryWrapper>
          <Public type="checkbox"/>
          <Diary>
            <Ttitle>운수 좋은 날</Ttitle>
            <ChooseTP>T</ChooseTP>
            <Date>2021-05-27</Date>
          </Diary>
        </DiaryWrapper>
        <DiaryWrapper>
          <Public type="checkbox"/>
          <Diary>
            <Ttitle>운수 좋은 날</Ttitle>
            <ChooseTP>T</ChooseTP>
            <Date>2021-05-27</Date>
          </Diary>
        </DiaryWrapper>
        <DiaryWrapper>
          <Public type="checkbox"/>
          <Diary>
            <Ttitle>운수 좋은 날</Ttitle>
            <ChooseTP>T</ChooseTP>
            <Date>2021-05-27</Date>
          </Diary>
        </DiaryWrapper>
        <DiaryWrapper>
          <Public type="checkbox"/>
          <Diary>
            <Ttitle>운수 좋은 날</Ttitle>
            <ChooseTP>T</ChooseTP>
            <Date>2021-05-27</Date>
          </Diary>
        </DiaryWrapper>
        <DiaryWrapper>
          <Public type="checkbox"/>
          <Diary>
            <Ttitle>운수 좋은 날</Ttitle>
            <ChooseTP>T</ChooseTP>
            <Date>2021-05-27</Date>
          </Diary>
        </DiaryWrapper>
        <DiaryWrapper>
            <Public type="checkbox"/>
            <Diary>
              <Ttitle>운수 좋은 날</Ttitle>
              <ChooseTP>T</ChooseTP>
              <Date>2021-05-27</Date>
            </Diary>
          </DiaryWrapper>
      </Container>

    )
} 

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const DiaryHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10%;
  button {
    background-color: #83B799;
    background-repeat:no-repeat;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    outline:none;
    color: white;
    width: 15%;
    margin: 0.5rem 1rem;
    font-size: x-large;

  :hover{
    background-color: gray;
  }
  }

`

const DiaryWrapper = styled.div`
  width: 100%;
  height: 8%;
  border-bottom: 1px dotted gray;
`

const Public = styled.input` 
  display: inline-block;
  width:3.5%;
  height: 85%;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
  background-color: white;
  :checked {
    background-color: #3D8DAB;
    border: none;
}
`


const Diary = styled.div`
  display: flex;
  align-items: center;
  float: right;
  width: 96%;
  height: 100%;
  cursor: pointer; 
  font-size: xx-large;
  background-image: url(${bg});
  :hover{
    transform: translateY(-0.3rem);
  }
`

const Ttitle = styled.span`
  width: 40%;
  height: 80%;
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 10px;
  background-color: #CCDEE2;
  font-size: x-large;
  justify-content: center;
  align-items: center;
`

const Date = styled.span`
  position: relative;
  left: 34%;
  width: 17%;
  height: 80%;
  display: flex;
  background-color: #CCDEE2;
  border-radius: 10px;
  font-size: x-large;
  justify-content: center;
  align-items: center;
`

const ChooseTP = styled.span`
  display: flex;
  width: 3%;
  height: 70%;
  background-color: #D85941;
  border-radius: 50%;
  font-size: x-large;
  justify-content: center;
  align-items: center;
`
