import React, { useState } from 'react';
import styled from 'styled-components';

export default function EditUserInfo() {
    return(
        <EditWrapper>
            <ProfileWrapper>
                    <ProfileLeft>         
                        <div></div>
                        <button>사진 변경</button>
                    </ProfileLeft>
                    <ProfileRight>
                        <div>abcd123</div>
                        <div>kimcoding@google.com</div>
                    </ProfileRight>
            </ProfileWrapper>
            <PassowrdWrapper>
                <LeftDiv>비밀번호</LeftDiv>  
                <PasswordMain>
                    <div>
                        <span>새 비밀번호</span>
                        <input placeholder="새 비밀번호"></input>
                    </div>
                    <div>
                        <span>비밀번호 확인</span>
                        <input placeholder="비밀번호 확인"></input>
                    </div>
                </PasswordMain>
            </PassowrdWrapper>
            <Withdrawal>
                <WithdrawalMain>
                    <LeftDiv>회원탈퇴</LeftDiv>
                    <button>회원 탈퇴</button>   
                </WithdrawalMain>
                <Bottom>
                  탈퇴 시 작성하신 일기장 및 일기들이 모두 삭제되며 복구되지 않습니다.
                </Bottom>    
            </Withdrawal>
       
        </EditWrapper>
    )

};


const EditWrapper = styled.div`
    /* border: 1px solid tomato; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProfileWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
    margin-bottom: 100px;
`

const ProfileLeft = styled.div`
    width: 30%;
    height: 100%;
    border-right: 1px solid rgb(234,236,239);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div{
        width:150px;
        height: 150px;
        border: 1px solid #E3DFD4;
        border-radius: 50%;
    }
    button{
        margin-top: 5px;
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
    }
`
const ProfileRight = styled.div`
    margin-top: 30px;
    width: 70%;
    height: 100%;
    /* border: 1px solid red; */
    div {
        margin: 15px 0 0 25px;
        font-size: x-large;
    }
    div:nth-child(1) {
        font-size: xx-large;
        font-family: 'Cafe24Ssurround';
    }
`

const UsernameWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 20%;
    border-bottom: 1px solid rgb(234,236,239);
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
    align-items: center;
    justify-content: center;
    width: 70%;
    margin-top: 10px;
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
    }
    span {
        display: inline-block;
        width: 150px;
        text-align: center;
        
    }
`


const Withdrawal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const  WithdrawalMain = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 30px;
        button{ 
        margin-left: 10px;
        width: 150px;
        height: 45px;
        cursor: pointer;
        color: white;
        font-size: x-large;
        font-weight: bold;
        background-color: rgb(237,116,112);
        border-radius: 9px;
        outline: none;
        border: none;
    }
`

const Bottom = styled.div`
    margin: 20px 0 0 0;
    width: 100%;
    height: 5%;
    font-size: large;
    color: gray;
    opacity: 0.6;
    
`

const LeftDiv = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    font-weight: 700;
`
