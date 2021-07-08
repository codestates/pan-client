import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Input from "../../components/auth/Input";
import login_bg from "../../images/login_bg.jpg";
import Button from "../../components/auth/Button";
import PageTitle from "../../components/PageTitle";
import FormBox from "../../components/auth/FormBox";
import AuthLayout from "../../components/auth/AuthLayout";
import { useHistory } from "react-router-dom";
import { BlueGreen, CedarChest, TextAlign } from "../../components/auth/FontLayout";

const Container = styled.div`
    position: absolute;
    background: url(${login_bg});
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
`;


export default function ResetPwd(props) {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const onPasswordHandler = (e) => { setPassword(e.target.value); }
    const onConfirmPasswordHandler = (e) => { setConfirmPassword(e.target.value); }
    const token = new URL(window.location.href).searchParams.get('code');
   // const token = window.location.href.searchParams.get('code');
    const handleResetPwd = () => {
        if (password !== confirmPassword) {
            return setErrorMessage('비밀번호가 일치하지 않습니다.');
        } else {
                
            axios(`https://api.picanote.me/resetPwd/${token}`, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                },
                data: {
                    password
                },
                withCredentials: true,
                }) 
                .then((res) => setErrorMessage(res.data.message))
                .then( ()=>{ alert("비밀번호가 변경되었습니다. 다시 로그인해 주세요.")})
                .then(() => history.push('/login'))
                .catch((err) => setErrorMessage(err.response.data.message));
        }
    };

    return (
        <Container>
            <AuthLayout>
                <PageTitle title="Reset Password" />
                <FormBox>
                    <TextAlign>
                        <BlueGreen>RESET</BlueGreen><CedarChest> PASSWORD</CedarChest>
                    </TextAlign>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <Input name="password" type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={onPasswordHandler} />
                        <Input name="passwordCorrect" type="password" placeholder="다시 한번 입력해주세요." value={confirmPassword} onChange={onConfirmPasswordHandler} />
                        <Button type="submit" value="CHANGE PASSWORD" onClick={handleResetPwd} />
                    </form>
                    {
                        errorMessage ? (
                            <span className="errorMsg">{errorMessage}</span>
                        ) : (
                            <span className="errorMsg" />
                        )
                    }

                </FormBox>
            </AuthLayout>
        </Container>
    )
}