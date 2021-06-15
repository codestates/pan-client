import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Nondisclosure from '../../images/Nondisclosure.jpg';

import { 
    EditWrapper, 
    ProfileWrapper, ProfileLeft, ProfileRight, 
    UsernameWrapper, PassowrdWrapper, PasswordMain, 
    Withdrawal, WithdrawalMain, 
    Bottom, LeftDiv, EditFooter 
} from "../../components/Mypages/style_UserInfo";

export default function EditUserInfo({username, email, profileUrl}) {

    const history = useHistory();
    const [newName, setNewName] = useState('');
    const [newProfile, setNewProfile] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                url: 'https://api.picanote.me/profile',
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
            await axios.delete('https://api.picanote.me/withdrawal', {
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
                        {!newProfile ? <img src={Nondisclosure} alt="Nondisclosure" /> : <img src={profileUrl} alt="profileUrl"/>}    
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