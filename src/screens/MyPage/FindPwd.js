import React, { useState } from "react";
import axios from "axios";
import routes from "../../routes";
import styled from "styled-components";
import Input from "../../components/auth/Input";
import login_bg from "../../images/login_bg.jpg";
import Button from "../../components/auth/Button";
import PageTitle from "../../components/PageTitle";
import FormBox from "../../components/auth/FormBox";
import BottomBox from "../../components/auth/BottomBox";
import AuthLayout from "../../components/auth/AuthLayout";
import { useHistory } from "react-router-dom";
import { FatLink } from "../../components/shared";
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


export default function SignUp(props) {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const onPasswordHandler = (e) => { setPassword(e.target.value); }
    const onConfirmPasswordHandler = (e) => { setConfirmPassword(e.target.value); }

    const handleFindPwd = () => {
        if (password !== confirmPassword) {
            return setErrorMessage('비밀번호가 일치하지 않습니다.');
        } else {
            axios
                .post(
                    'https://api.picanote.me/findPwd',
                    {
                        password
                    },
                )
                .then((res) => setErrorMessage(res.data.message))
                .then(() => history.push('/login'))
                .catch((err) => setErrorMessage(err.response.data.message));
        }
    };

    return (
        <Container>
            <AuthLayout>
                <PageTitle title="Find Password" />
                <FormBox>
                    <TextAlign>
                        <BlueGreen>FIND</BlueGreen><CedarChest> PASSWORD</CedarChest>
                    </TextAlign>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <Input name="password" type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={onPasswordHandler} />
                        <Input name="passwordCorrect" type="password" placeholder="다시 한번 입력해주세요." value={confirmPassword} onChange={onConfirmPasswordHandler} />
                        <Button type="submit" value="CHANGE PASSWORD" onClick={handleFindPwd} />
                    </form>
                    {
                        errorMessage ? (
                            <span className="errorMsg">{errorMessage}</span>
                        ) : (
                            <span className="errorMsg" />
                        )
                    }
                    {/* 이 subtitle 글귀 맘에 안들면 그냥 빼버려도 됨 */}

                </FormBox>
            </AuthLayout>
        </Container>
    )
}