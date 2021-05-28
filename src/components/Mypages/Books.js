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
  grid-template-columns: 20% 20% 20% 20% 20%; 
  grid-template-rows: 50% 50%;
  /* border: 4px solid black; */
  height: 100%;
  width: 100%;
`


const Cover = styled.button`
  background-color: #DCB1B7;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: xx-large;
  font-weight: bold;
  border-radius: 5px;
  margin: 15px;
  &:hover {
    transform: translateY(-1rem);
  }
`