import Modal from 'styled-react-modal';
import styled from 'styled-components';

export const StyledModal = Modal.styled`
  width: 60vw;
  height: 80vh;
  display: flex;
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

export const Header = styled.div`
  /* margin: 40px 0px 20px 0px; */
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  h1 {
    font-size: xx-large;
    font-weight: 800;
    padding-bottom: 20px;
    color: #1C1B1A;
    font-family: 'Cafe24Ssurround';
  }
  h2 {
    font-size: large;
    font-weight: 600;
    color: #BB2B2A;
    font-family: 'Cafe24SsurroundAir';
  }
`;

export const Wrapper = styled.section`
  width:95%;
  height: 80%;
  padding: 10px 0;
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  font-family: 'Cafe24SsurroundAir';
`;

export const CreateBooks = styled.div`
  margin: 0 15px;
  border: 1px solid lightgray;
  box-shadow: 5px 5px 5px gray;
  border-radius: 15px;
  width: 20%;
  height: 50%;
  cursor: pointer;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: large;
  font-weight: 600;
  :hover {
    border: 4px solid black;
  }
`;

export const SelectBook = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(20%, 1fr));
  grid-template-rows: repeat(5, minmax(50%, 1fr));
  overflow-x: scroll;
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 800;
      font-size: medium;
      margin : 10px;
      border: 1px solid lightgray;
      /* border: ${props=> props.checked  ? "1px solid lightgray" : "4px solid black"}; */
      border-radius: 15px;
      box-shadow: 5px 5px 5px gray;
      cursor: pointer;
      opacity: 0.7;
      color: #E3DFD4;
      :hover {
        border: 4px solid black;
      }
    }
`;

export const Footer = styled.div`
  width: 95%;
  height: 10%;
  display: flex;      
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const ModalButton = styled.button`
  width: 90px;
  height: 90%;
  margin-left: 15px;
  border: 0;
  border-radius: 15px;
  outline: 0;
  background-color: #3D8DAB;
  font-size: x-large;
  color: white;
  cursor: pointer;
  font-family: 'Cafe24SsurroundAir';
  :hover {
    transform: scale(1.05);
  }
`;

export const LeftCreateDiv = styled.div`
  width: 50%;
  height: 90%;
  /* border: 1px solid red; */
  margin-left: 20px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LeftTitleDiv = styled.div`
  width: 100%;
  height: 20%;
  /* border: 2px solid blue; */
  display: flex;
  padding-left: 20px;
  align-items: center;
  font-size: 20px;
  input {
    border:1px solid black;
    border-radius: 10px;
    margin-left: 30px;
    padding-left: 10px;
  }

`;

export const LeftCoverDiv = styled.div`
  width: 100%;
  height: 80%;
  /* border: 2px solid blue; */
  h1 {
    width: 100%;
    height: 10%;
    /* border: 1px solid tomato; */
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 20px;
  }
`;

export const SelectCover = styled.div`
  width: 105%;
  height: 95%;
  display: grid;
  grid-template-columns: repeat(3, minmax(25%, 1fr));
  grid-template-rows: repeat(100, minmax(50%, 1fr));
  overflow: hidden;
  overflow-y: scroll;
`;

export const CoverImg = styled.img`
  width: 90%;
  height: 95%;
  margin: 10px;
  border: 1px solid lightgray;
  border-radius: 15px;
  box-shadow: 5px 5px 5px gray;
  cursor: pointer;
  opacity: 0.7;
  :hover {
    border: 4px solid black;
  }
`;

export const RightCreateDiv = styled.div`
  width: 40%;
  height: 90%;
  /* border: 1px solid red; */
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreviewCover = styled.div`
  width: 70%;
  height: 70%;
  margin : 10px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 30px;
  font-weight: 700;
  color: #E3DFD4;
  z-index: 1;
  ::after{
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 20px 0 0 20px;
    background: linear-gradient(
        to right,
        rgba(20, 20, 20, 0.6) 10%,
        rgba(20, 20, 20, 0.6) 100%
    );
    background-size: cover;
  }
`;

