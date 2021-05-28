import React from 'react';
import styled from 'styled-components';


export default function Books () {
    return (
        <CoverWrapper>
            <Cover> 일기장1 </Cover>
            <Cover> 일기장2 </Cover>
            <Cover> 일기장3 </Cover>
            <Cover> 일기장4 </Cover>
            <Cover> 일기장5 </Cover>
            <Cover> 일기장6 </Cover>
            <Cover> 일기장7 </Cover>
            <Cover> 일기장8 </Cover>
            <Cover> 일기장9 </Cover>
            <Cover> 일기장10 </Cover>
        </CoverWrapper>
    )
} 

const CoverWrapper = styled.div`
  display: grid;
  margin: 40px 20px;
  grid-template-columns: 20% 20% 20% 20% 20%; 
  grid-template-rows: 50% 50%;
  /* border: 4px solid black; */
  height: 100%;
  width: 100%;
`


const Cover = styled.button`
  background-image: url("https://source.unsplash.com/random/640x960");
  box-shadow: 10px 10px 10px #E4D8B4;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'MapoGoldenPier';
  font-size: xx-large;
  font-weight: bold;
  color: #FFF9E9;
  border-radius: 5px;
  margin: 15px;
  &:hover {
    transform: translateY(-1rem);
  }
`