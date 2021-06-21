import Modal from 'styled-react-modal';
import styled from 'styled-components';

export const InviteModal = Modal.styled`
  width: 40%;
  height: 40%;
  display: flex;
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

export const GroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InviteUser = styled.input`
    border: 1px solid #242D40;
    border-radius: 12px;
    width: 350px;
    height: 50px;
    margin-bottom: 20px;
    text-align: center;
    font-family: 'Cafe24SsurroundAir';
    font-size: large;
    color: black;
`
export const InviteBottom = styled.div`
    /* border:1px solid red; */
`
export const InviteBtn = styled.button`
    width: 90px;
    height: 40px;
    margin-top: 30px;
    margin-left: 15px;
    border: 1px solid #242D40;
    border-radius: 10px;
    outline: 0;
    background-color: white;
    font-size: large;
    color: black;
    cursor: pointer;
    font-family: 'Cafe24SsurroundAir';
    font-weight: bolder;
    :hover {
        transform: scale(1.05);
        border: 2px solid #242D40;
    }
`
export const CancelBtn = styled.button`
    width: 90px;
    height: 40px;
    margin-left: 15px;
    border: 1px solid #D9A9A9;
    border-radius: 10px;
    outline: 0;
    background-color: white;
    font-size: large;
    color: black;
    cursor: pointer;
    font-family: 'Cafe24SsurroundAir';
    font-weight: bolder;
    opacity: 0.7;
    :hover {
        transform: scale(1.05);
        border: 2px solid #D9A9A9;
        opacity: 0.7;
    }
`