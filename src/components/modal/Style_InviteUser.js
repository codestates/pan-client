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
    font-family: 'Cafe24SsurroundAir';
    border: 4px solid #C49C48;
    border-radius: 16px;
    width: 95%;
    height: 92%;
`
export const GroupHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: xx-large;
    margin-bottom: 4%;
`;

export const SearchUser = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3%;
`;

export const InviteUser = styled.input`
    border: 1px solid #242D40;
    border-radius: 12px;
    width: 350px;
    height: 50px;
    text-align: center;
    font-size: large;
    color: black;
`

export const CheckBtn = styled.button`
    width: 60px;
    height: 40px;
    margin-left: 20px;
    background-color: #9196E1;
    border: none;
    border-radius: 13px;
    cursor: pointer;
    color: white;
    font-weight: 700;
    :hover {
        border: 3px solid #505AC5;
    }
`

export const InviteBottom = styled.div`
    display: flex;
`

export const InviteBtn = styled.button`
    width: 90px;
    height: 40px;
    margin-left: 15px;
    border: 1px solid #242D40;
    border-radius: 10px;
    outline: 0;
    background-color: white;
    font-size: large;
    color: black;
    cursor: pointer;
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
    font-weight: bolder;
    opacity: 0.7;
    :hover {
        transform: scale(1.05);
        border: 2px solid #D9A9A9;
        opacity: 0.7;
    }
`