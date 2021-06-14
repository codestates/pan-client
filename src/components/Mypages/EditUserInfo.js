import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import Nondisclosure from '../../images/Nondisclosure.jpg'

export default function EditUserInfo({username, email, profileUrl}) {
 
    const history = useHistory();
    const [newName, setNewName] = useState('');
    const [newProfile, setNewProfile] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    
    console.log(newName);
    // 회원정보 수정
    const UserInfoHandler = async () => {
        if(!newName || !newPassword){
            return alert('사용자명과 패스워드는 필수 입력사항입니다.')
        }else if (newPassword !== confirmPassword) {
            return alert('비밀번호가 동일하지 않습니다.');
        } else {
        try{
            await axios({
                method: 'put',
                url: 'https://localhost:80/profile',
                headers: {
                    Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                    'ContentType' : 'application/json',
                },
                data: {
                    username: newName,
                    password: newPassword,
                    profileUrl: newProfile,
                },
                withCredentials : true   
            }).then(
                localStorage.removeItem('CC_Token'),
                alert('회원정보가 정상적으로 바꼈습니다. 다시 로그인해주세요.'),
                history.push("/login"),
                window.location.reload(true)
            )
        }catch{
            console.log("err");
        }}
    }

    // 회원탈퇴
    const WithdrawalHandler = async () => {
        try{
            await axios.delete('https://localhost:80/withdrawal', {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                    'ContentType' : 'application/json',
                },
                withCredentials : true   
            }).then(()=>{ 
                alert("회원탈퇴가 되었습니다.");
                localStorage.removeItem('CC_Token');
                history.push('/');
            })
        }catch{
            console.log("err");
        }
    }



    return(
        <EditWrapper>
            <ProfileWrapper>
                    <ProfileLeft>     
                        {!newProfile ? <img src={Nondisclosure}></img> : <img src={profileUrl}></img>}    
                        <button>사진 변경</button>
                    </ProfileLeft>
                    <ProfileRight>
                        <div>{username}</div>
                        <div>{email}</div>
                    </ProfileRight>
            </ProfileWrapper>
            <UsernameWrapper>
                <LeftDiv>유저네임</LeftDiv>  
                    <input type="text" placeholder="유저네임" onChange={e=> {setNewName(e.target.value)}}></input>
            </UsernameWrapper>
            <PassowrdWrapper>
                <LeftDiv>비밀번호</LeftDiv>  
                <PasswordMain>
                    <div>
                        <span>새 비밀번호</span>
                        <input placeholder="새 비밀번호" onChange={e=> {setNewPassword(e.target.value)}}></input>
                    </div>
                    <div>
                        <span>비밀번호 확인</span>
                        <input placeholder="비밀번호 확인" onChange={e=> {setConfirmPassword(e.target.value)}}></input>
                    </div>
                </PasswordMain>
            </PassowrdWrapper>
            <Withdrawal>
                <WithdrawalMain>
                    <LeftDiv>회원탈퇴</LeftDiv>
                    <button onClick={WithdrawalHandler}>회원 탈퇴</button>   
                </WithdrawalMain>
                <Bottom>
                  탈퇴 시 작성하신 일기장 및 일기들이 모두 삭제되며 복구되지 않습니다.
                </Bottom>    
            </Withdrawal>
            <EditFooter>
                <button onClick={UserInfoHandler}>수정 완료</button>
            </EditFooter>
        </EditWrapper>
    )

};


const EditWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProfileWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 13rem;
    margin-bottom: 70px;
`

const ProfileLeft = styled.div`
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
`
const ProfileRight = styled.div`
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
`
const UsernameWrapper = styled.div`
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
`


const PassowrdWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    border-bottom: 1px solid rgb(234,236,239);
`
const PasswordMain = styled.div`
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
`


const Withdrawal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const  WithdrawalMain = styled.div`
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
`

const Bottom = styled.div`
    margin-top: 1.3rem;
    padding: 0 0 1rem 4.3rem;
    width: 100%;
    height: 50px;
    font-size: large;
    color: gray;
    opacity: 0.6;
    border-bottom: 1px solid rgb(234,236,239);

`

const LeftDiv = styled.div`
    width: 15rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    font-weight: 700;
`

const EditFooter = styled.div`
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
`