import styled from 'styled-components';

export const EditWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 20px;
    padding: 20px;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 13rem;
    margin-bottom: 70px;
`;

export const ProfileLeft = styled.div`
    width: 15rem;
    height: 100%;
    border-right: 1px solid rgb(234,236,239);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width:8rem;
        height: 8rem;
        border: 1px solid #CCDEE2;
        border-radius: 50%;
        object-fit: cover;
    }
    button{
        margin-top: 15px;
        width: 150px;
        height: 35px;
        cursor: pointer;
        color: white;
        font-size: large;
        font-weight: bold;
        background-color: #3D8DAB;
        border-radius: 9px;
        outline: none;
        border: none;
        font-family: 'Cafe24SsurroundAir';
        :hover {
            transform: scale(1.1);
        }  
    }
`;

export const ProfileRight = styled.div`
    margin-top: 30px;
    width: 70%;
    height: 100%;
    div {
        margin: 1rem 0 0 1.5rem;
        font-size: x-large;
    }
    div:nth-child(1) {
        font-size: xx-large;
        font-family: 'Cafe24Ssurround';
        display: inline-block;
    }
`;

export const UsernameWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid rgb(234,236,239);
    align-items: center;
    input {
        width: 15rem;
        height: 36px;
        font-size: large;
        font-weight: 600;
        border: 1px solid rgb(234,236,239);
        border-radius: 12px;
        margin-left: 1rem;
        padding-left: 1rem;
    }
`;

export const PassowrdWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    border-bottom: 1px solid rgb(234,236,239);
`;

export const PasswordMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    margin-top: 1rem;
    /* border: 1px solid pink;  */
    font-size: large;
    font-weight: 600;
    div{
        width: 100%;
        height: 50px;
    }
    input {
        width: 50%;
        height: 36px;
        border: 1px solid rgb(234,236,239);
        border-radius: 12px;
        padding-left: 1rem;
    }
    span {
        margin-left: 1rem;
        display: inline-block;
        width: 150px;
        
    }
`;

export const Withdrawal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const  WithdrawalMain = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 30px;
        button{ 
        margin-left: 10px;
        width: 130px;
        height: 35px;
        cursor: pointer;
        color: white;
        font-size: x-large;
        font-weight: bold;
        background-color: rgb(237,116,112);
        border-radius: 9px;
        outline: none;
        border: none;
        font-family: 'Cafe24SsurroundAir';
        opacity: 0.3;
        :hover {
            opacity: 1;
        }
    }
`;

export const Bottom = styled.div`
    margin-top: 1.3rem;
    padding: 0 0 1rem 4.3rem;
    width: 100%;
    height: 50px;
    font-size: large;
    color: gray;
    opacity: 0.6;
    border-bottom: 1px solid rgb(234,236,239);
`;

export const LeftDiv = styled.div`
    width: 15rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    font-weight: 700;
`;

export const EditFooter = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    button {
        margin-top: 2rem;
        width: 150px;
        height: 45px;
        cursor: pointer;
        color: white;
        font-size: x-large;
        font-weight: bold;
        background-color: #3D8DAB;
        border-radius: 9px;
        outline: none;
        border: none;
        font-family: 'Cafe24SsurroundAir';      
        :hover {
            transform: scale(1.1);
        }  
    }
`;