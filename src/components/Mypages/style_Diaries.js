import styled from 'styled-components';
import checkIcons from "../../images/check.png";

export const Container = styled.div`
  width: 100%;
  height: 120%;
  /* border:1px solid black; */
`;

export const DiaryHeader = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  height: 70px;
  img {
    margin-left: 40px;
  }
`;

export const DiaryBG = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  /* background-color: rgba(255, 249, 233, 0.7); */
  border-radius: 10px;
  padding-top: 10px;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 0.7)
    ),
    url("https://source.unsplash.com/user/lunalism");
  background-size: cover;
`;

export const DiaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8%;
  margin-top: 10px;
  margin-left: 5px;
  font-family: 'Cafe24SsurroundAir';
  /* border: 1px solid black; */
`;

export const Public = styled.input` 
  display: inline-block;
  width:2%;
  height: 50%;
  justify-content: center;
  align-items: center;
  border: 1px solid #E3DFD4;
  border-radius: 50%;
  cursor: pointer;
  background-color: white;
  margin-right: 5px;
  :checked {
    border: none;
    background-image: url(${checkIcons});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

export const Diary = styled.div`
  display: flex;
  align-items: center;
  float: right;
  width: 96%;
  height: 100%;
  cursor: pointer; 
  font-size: xx-large;
  :hover{
    transform: translateY(-0.2rem);
  }
`;

export const Ttitle = styled.span`
  width: 40%;
  height: 80%;
  display: flex;
  margin: 0 1rem 0 1rem;
  padding-left: 10px;
  border-radius: 10px;
  background-color: #CCDEE2;
  font-size: 17px;
  font-weight: bold;
  /* justify-content: center; */
  align-items: center;
`;

export const Date = styled.span`
  position: relative;
  left: 34%;
  width: 17%;
  height: 80%;
  display: flex;
  background-color: #CCDEE2;
  border-radius: 10px;
  font-size: 15px;
  justify-content: center;
  align-items: center;
`;

export const ChooseTP = styled.span`
  display: flex;
  width: 3%;
  height: 70%;
  color: #C57951;
  border-radius: 50%;
  font-size: xx-large;
  justify-content: center;
  align-items: center;
`;