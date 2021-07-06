import styled from 'styled-components';

export const CoverMain = styled.div`
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const CoverWrapper = styled.div`
  display: grid;
  margin: 40px 20px;
  grid-template-columns: repeat(4, minmax(25%, 1fr));
  grid-template-rows: repeat(5, minmax(50%, 1fr));
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  /* 스크롤바 설정*/
  &::-webkit-scrollbar{
      width: 10px;
  }
  /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb{
      height: 17%;
      background-color: #3D8DAB;
      border-radius: 20px;    
  }
`;


export const CoverHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
`;

export const CoverDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid tomato;
  border-radius: 20px;
  width: 130px;
  height: 50px;
  font-size: 23px;
  color: white;
  background-color: #D85941;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  } 

`;

export const Cover = styled.button`
  box-shadow: 10px 10px 10px #E4D8B4;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Cafe24SsurroundAir';
  font-size: x-large;
  font-weight: bold;
  border-radius: 20px;
  margin: 15px;
  z-index: 1;
  position: relative;
  &:after{
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 20px;
    background: rgba(50, 50, 50, 0.4);
  }
  &:hover {
    transform: translateY(-1rem);
    opacity: 1;
  }
  h2 {
    color: #FFF9E9;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
    line-height: 2.6rem;
    opacity: 1;
  }
`;