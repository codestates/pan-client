import styled from 'styled-components';

export const MypageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid black; */
`;

export const MypageMain = styled.div`
    /* border: 1px solid black; */
    position: relative;
    display: flex;
    height: 88vh;
    width: 80%;
    max-width: 1600px;
    font-family: 'Cafe24SsurroundAir';
`;

export const LeftSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 27%;
    height: 80%;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
`;

export const Profile = styled.img`
    position: relative;
    object-fit: cover;
    border: 1px solid #CCDEE2;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    text-align: center;
`;

export const Username = styled.h2`
    display: flex;
    justify-content: center;
    width: 70%;
    height: 8%;
    margin-top: 7%;
    /* border: 1px solid blue; */
    text-align: left;
    font-size: 2em;
    font-weight: bold;
`;

export const PersonalDiary = styled.button`
    width: ${props => props.cur === true ? '74%' : "70%"};
    height: 8%;
    top:100px;
    margin-top: 10%;
    cursor: pointer;
    font-size: 1.7rem;
    font-weight: bold;
    text-align: left;
    background-color: ${props => props.cur === true ? '#3D8DAB' : '#83B799'};
    opacity: ${props => props.cur === true ? '1.0' : '0.5'};
    color: #FFFFFF;
    border-radius: 5px;
    border:none;
    box-shadow: 5px 5px 5px #E4D8B4;
    font-family: 'Cafe24SsurroundAir';
    :hover {
        background-color: #B6CB9E;
    }
`;

export const ExchangeDiary = styled.button`
    width: ${props => props.cur === true ? '74%' : "70%"};
    height: 8%;
    margin-top: 3%;
    cursor: pointer;
    font-size: 1.7rem;
    font-weight: bold;
    text-align: left;
    background-color: ${props => props.cur === true ? '#3D8DAB' : '#83B799'};
    opacity: ${props => props.cur === true ? '1.0' : '0.5'};
    color: #FFFFFF;
    border-radius: 5px;
    border:none;
    box-shadow: 5px 5px 5px #E4D8B4;
    font-family: 'Cafe24SsurroundAir';
    :hover {
        background-color: #B6CB9E;
    }
`;

export const Print = styled.button`
    width: ${props => props.cur === true ? '74%' : "70%"};
    height: 8%;
    margin: 24%;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: left;
    color: #FFFFFF;
    background-color: ${props => props.cur === true ? '#3D8DAB' : '#83B799'};
    opacity: ${props => props.cur === true ? '1.0' : '0.5'};
    box-shadow: 5px 5px 5px #E4D8B4;
    border-radius: 5px;
    border:none;
    font-family: 'Cafe24SsurroundAir';
    :hover {
        background-color: #B6CB9E;
    }
`;

export const DiarySection = styled.section`
    position: relative;
    top: 3%;
    left: 4.2%;
    /* border: 1px solid red; */
    width: 66%;
    height: 80%;
    /* background-color: #FFF9E9; */
`;

export const MypageFooter = styled.footer`
    width: 100%;
    height: 10vh;
`;
