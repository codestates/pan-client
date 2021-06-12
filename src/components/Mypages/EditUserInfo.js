import React from 'react';
import styled from 'styled-components';

export default function EditUserInfo() {
    return(
        <EditWrapper>
            <Editprofile>
                <LeftDiv>프로필 사진</LeftDiv>
                <RightDiv>         
                    <ProFilePhoto></ProFilePhoto>
                    <ProFileButton>사진 변경</ProFileButton>
                </RightDiv>
            </Editprofile>
            <EditUsername>
                <LeftDiv>유저네임 변경</LeftDiv>       
                <RightDiv>
                    
                </RightDiv>              
            </EditUsername>
            <EditPassword>
                <LeftDiv>비밀번호 변경</LeftDiv>  
                <PasswordRight>
                    <div>
                        <span>새비밀번호</span>
                        <input></input>
                    </div>
                    <div>
                        <span>새비밀번호 확인</span>
                        <input></input>
                    </div>
                </PasswordRight>
            </EditPassword>
            <Withdrawal>
                <LeftDiv>회원탈퇴</LeftDiv>
                  회원탈퇴를 원하시는 분은 회원탈퇴 버튼을 눌러주세요
                  <button>회원탈퇴</button>    
            </Withdrawal>
        </EditWrapper>
    )

};


const EditWrapper = styled.div`
    border: 1px solid tomato;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Editprofile = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    height: 200px;
    border: 1px solid blue;
`
const ProFilePhoto = styled.div`
    margin: 30px 0px 10px 40px;
    width:100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 50%;
`

const ProFileButton = styled.button`
    margin-left: 40px;
    width: 100px;
    height: 50px;
`

const EditUsername = styled.div`
    display: flex;
    width: 100%;
    height: 20%;
    border: 1px solid red;
`

const EditPassword = styled.div`
    display: flex;
    width: 100%;
    height: 20%;
    border: 1px solid red;
`
const PasswordRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    border: 1px solid pink; 
    font-size: large;
    font-weight: 600;
    div{
        width: 100%;
        height: 50px;
        padding-left: 10%;

    }
    input {
        width: 50%;
        height: 30px;
        border: 1px solid black;
        border-radius: 12px;
        margin: 10px 20px;
    }
    span {
        display: inline-block;
        width: 150px;
        text-align: center;
        
    }
`


const Withdrawal = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    border: 1px solid red;
    button{
        position: relative;  
    }
`

const LeftDiv = styled.div`
    width: 30%;
    background-color: rgb(249,249,249);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    font-weight: 700;
`

const RightDiv = styled.div`
    width: 70%;
    border: 1px solid pink; 
`
