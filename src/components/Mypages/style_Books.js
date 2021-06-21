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
  overflow-x: scroll;
  height: 100%;
  width: 100%;
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
  /* background-image: url("https://source.unsplash.com/random/640x960"); */
  box-shadow: 10px 10px 10px #E4D8B4;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Cafe24SsurroundAir';
  font-size: xx-large;
  font-weight: bold;
  color: #FFF9E9;
  border-radius: 5px;
  margin: 15px;
  &:hover {
    transform: translateY(-1rem);
  }
  h2 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
    line-height: 2.6rem;
  }
`;