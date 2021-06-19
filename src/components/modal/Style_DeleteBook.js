import Modal from 'styled-react-modal';
import styled from 'styled-components';
import checkIcons from "../../images/check.png";

export const StyledModal = Modal.styled`
    width: 60vw;
    height: 48vh;
    display: flex;
    border-radius: 20px;
    align-items: center;
    flex-direction: column;
    background-color: white;
`;

export const ModalBox = styled.div`
    /* border: 5px solid tomato; */
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
    height: 10%;
`;

export const ModalTitle = styled.div`
    /* border: 1px solid red; */
    font-size: 2rem;
    text-align: center;
`;

export const ModalMiddle = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid blue;
    width: 100%;
    height: 74%;
`;

export const MiddleTitle = styled.div`
    display: flex;
    align-items: center;
    border: 3px solid gray;
    width: 16%;
    height: 100%;
    padding-left: 10px;
    font-size: 24px;
`;

export const ModalBook = styled.div`
    display: grid;
    border: 3px solid tomato;
    /* margin: 40px 20px; */
    grid-template-columns: repeat(10, minmax(25%, 1fr));
    grid-template-rows: repeat(1, minmax(50%, 1fr));
    overflow-x: scroll;
    height: 100%;
    width: 84%;
`;

export const DiaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: 'Cafe24SsurroundAir';
    /* border: 1px solid black; */
`;

export const Public = styled.input` 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7%;
    height: 5%;
    border: 3px solid #E3DFD4;
    border-radius: 50%;
    :checked {
        border: 3px solid white;
        background-image: url(${checkIcons});
        background-size: 120% 120%;
        background-repeat: no-repeat;
    }
`;

export const DeleteCover = styled.button`
    /* background-image: url("https://source.unsplash.com/random/640x960"); */
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
    height: 10%;
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
`;