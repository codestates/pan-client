import Modal from 'styled-react-modal';
import styled from 'styled-components';

export const StyledModal = Modal.styled`
    width: 60vw;
    height: 50vh;
    display: flex;
    border-radius: 20px;
    align-items: center;
    flex-direction: column;
    background-color: white;
`;

export const ModalBox = styled.div`
    border-radius: 20px;
    width: 98%;
    height: 98%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
`;

export const ModalTitle = styled.div`
    width: 100%;
    margin: 10px 0;
    font-size: 2rem;
    text-align: center;
`;

export const ModalMiddle = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 74%;
`;

export const MiddleTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 16%;
    height: 100%;
    padding-left: 10px;
    font-size: 24px;
    color: #C57951;
    
`;

export const ModalBook = styled.div`
    display: grid;
    grid-template-columns: repeat(100, minmax(25%, 1fr));
    grid-template-rows: repeat(1, minmax(50%, 1fr));
    overflow-x: scroll;
    height: 100%;
    width: 84%;
    /* 스크롤바 설정*/
    &::-webkit-scrollbar{
        height: 12px;
    }
    /* 스크롤바 막대 설정*/
    &::-webkit-scrollbar-thumb{
        background-color: #E4D8B4;
        border-radius: 20px;    
  }
`;

export const DiaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: 'Cafe24SsurroundAir';
`;

export const Public = styled.input` 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7%;
    height: 5%;
    border: 3px solid #E3DFD4;
    border-radius: 50%;
    cursor: pointer;
`;

export const DeleteCover = styled.button`
    width: 90%;
    height: 80%;
    box-shadow: 10px 10px 10px #E4D8B4;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: 'Cafe24SsurroundAir';
    font-size: xx-large;
    font-weight: bold;
    color: #FFF9E9;
    border-radius: 10px;
    margin: 15px;
    h2 {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-word;
        overflow: hidden;
        line-height: 2.6rem;
    }
`;


export const ModalBottom = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 3.5rem;
    margin-top: 10px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid tomato;
    border-radius: 20px;
    width: 7rem;
    height: 3.5rem;
    font-size: 25px;
    color: white;
    background-color: #D85941;
    margin-left: 10px;
    cursor: pointer;
`;