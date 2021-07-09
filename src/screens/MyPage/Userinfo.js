import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import mask from '../../images/mask.png';

import { 
    EditWrapper, 
    ProfileWrapper, ProfileLeft, ProfileRight, 
    UsernameWrapper, PassowrdWrapper, PasswordMain, 
    Withdrawal, WithdrawalMain, 
    Bottom, LeftDiv, EditFooter 
} from "../../components/Mypages/style_UserInfo";
import { ModalProvider } from "styled-react-modal";
import DeleteModal from "../Modals/DeleteModal";
import AlertModal from "../Modals/AlertModal";


export default function EditUserInfo({username, email }) {

    const history = useHistory();
    const [newName, setNewName] = useState('');
    const [newProfile, setNewProfile] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // modal state
    const [isModal, setIsModal] = useState(false)
    const [isConfirmModal, setIsConfirmModal] = useState(false)
    const [alertMsg, setAlertMsg] = useState("")
    const [target, setTarget] = useState("")
    const [btnContents, setBtnContents] = useState("")
    const [toPage, setToPage] = useState("")

    // alertModal handler
    const alertHandler = ( isModal, alertMsg, btnContents, toPage ) => {
        setIsModal(isModal);
        setBtnContents(btnContents);
        setAlertMsg(alertMsg);
        setToPage(toPage);
    }

    // deleteModal handler
    const deleteHandler = ( isConfirmModal, target ) => {
        setIsConfirmModal(isConfirmModal);
        setTarget(target)
    }

    // 프로필 사진 
    const [imgBase64, setImgBase64] = useState(""); // 파일 base64
    // const [imgFile, setImgFile] = useState(null);	//파일	

    const handleChangeFile =  (event) => {
        let reader = new FileReader();
    
        reader.onloadend = async () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          if (base64) {
            setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
          }
        }
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
            // setImgFile(event.target.files[0]); // 파일 상태 업데이트
          }
         
        // multer s3 통신해서 프로필 사진 변경
        const formData = new FormData();
        formData.append('img', event.target.files[0]);
        axios.put('https://api.picanote.me/profile/upload', formData, {
            headers: {
                Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                "content-type": "multipart/form-data",
            },
                withCredentials: true,
        }).then(res => setNewProfile(res.data.profileUrl) )
    }


    // 회원정보 수정
    const UserInfoHandler = async () => {
        if(!newPassword || !newName){
            return alertHandler(true, '유저네임과 비밀번호는 필수 사항입니다', '확인' );
        }else if (newPassword !== confirmPassword) {
            return alertHandler(true, '비밀번호가 일치하지 않습니다', '확인' );
        } else {
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
                    profileUrl: newProfile
                },
                withCredentials : true   
            }).then(
                localStorage.removeItem('CC_Token'),
                alertHandler(true, '회원정보가 정상적으로 바꼈습니다', '확인' ,'/login' )
            )
        }
    }

    // 회원탈퇴
    const WithdrawalHandler = async () => {
            await axios.delete('https://api.picanote.me/withdrawal', {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                    'ContentType' : 'application/json',
                },
                withCredentials : true   
            }).then(()=>{ 
                alertHandler(true, '회원탈퇴가 되었습니다', '확인' );
                localStorage.removeItem('CC_Token');
                history.push('/');
            })
     }

    return(
        <ModalProvider>
        <AlertModal
            isModal={isModal} 
            setIsModal={setIsModal} 
            alertMsg={alertMsg} 
            btnContents={btnContents}
            toPage={toPage}
        />
        <DeleteModal
            isModal={isConfirmModal} 
            setIsModal={setIsConfirmModal} 
            target={target}
            HandleSubmit={WithdrawalHandler}
        />
        <EditWrapper>
            <ProfileWrapper>
                    <ProfileLeft>     
                        <div>
                            <img alt="#" src={imgBase64 ? imgBase64 : mask}></img>
                        </div>
                        <label htmlFor="imgFile" onChange={handleChangeFile}>사진 변경</label>
                        <input type="file" name="imgFile" id="imgFile" onChange={handleChangeFile} style={{display:"none"}}/>
 
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
                        <input type="password" placeholder="새 비밀번호" onChange={e=> {setNewPassword(e.target.value)}}></input>
                    </div>
                    <div>
                        <span>비밀번호 확인</span>
                        <input type="password" placeholder="비밀번호 확인" onChange={e=> {setConfirmPassword(e.target.value)}}></input>
                    </div>
                </PasswordMain>
            </PassowrdWrapper>
            <Withdrawal>
                <WithdrawalMain>
                    <LeftDiv>회원탈퇴</LeftDiv>
                    <button onClick={() => deleteHandler(true, '탈퇴')}>회원 탈퇴</button>   
                </WithdrawalMain>
                <Bottom>
                    탈퇴 시 작성하신 일기장 및 일기들이 모두 삭제되며 복구되지 않습니다.
                </Bottom>    
            </Withdrawal>
            <EditFooter>
                <button onClick={UserInfoHandler}>수정하기</button>
            </EditFooter>
        </EditWrapper>
        </ModalProvider>
    )
};