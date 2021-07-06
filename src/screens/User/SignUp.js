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

const Subtitle = styled(FatLink)`
    font-size: 12px;
    color: #666666;
    margin-top: 10px;
    margin-bottom: 0px;
    text-align: center;
`;


export default function SignUp(props) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const onUsernameHandler = (e) => { setUsername(e.target.value); }
    const onEmailHandler = (e) => { setEmail(e.target.value); }
    const onPasswordHandler = (e) => { setPassword(e.target.value); }
    const onConfirmPasswordHandler = (e) => { setConfirmPassword(e.target.value); }

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            return setErrorMessage('비밀번호가 동일하지 않습니다.');
        } else {
            axios
                .post(
                    'https://api.picanote.me/signup',
                    {
                        username,
                        email,
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
                <PageTitle title="Sign Up" />
                <FormBox>
                    <TextAlign>
                        <BlueGreen>SIGN UP</BlueGreen><CedarChest> ACCOUNT</CedarChest>
                    </TextAlign>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <Input name="email" type="text" placeholder="이메일을 입력해주세요." value={email} onChange={onEmailHandler} />
                        <Input name="username" type="text" placeholder="닉네임을 입력해주세요." value={username} onChange={onUsernameHandler}  />
                        <Input name="password" type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={onPasswordHandler} />
                        <Input name="passwordCorrect" type="password" placeholder="다시 한번 입력해주세요." value={confirmPassword} onChange={onConfirmPasswordHandler} />
                        <Button type="submit" value="SIGN UP" onClick={handleSignUp} />
                    </form>
                    {
                        errorMessage ? (
                            <span className="errorMsg">{errorMessage}</span>
                        ) : (
                            <span className="errorMsg" />
                        )
                    }
                    {/* 이 subtitle 글귀 맘에 안들면 그냥 빼버려도 됨 */}
                    <Subtitle>
                        <div>&nbsp;</div>
                        <div>가입을 진행하시게 되면 약관 및</div>
                        <div>&nbsp;</div>
                        <div>데이터 정책, 쿠키 정책에 동의하게 됩니다</div>
                    </Subtitle>
                </FormBox>
                <BottomBox cta="Don't You want to Log In?" linkText="Main" link={routes.main} />
                <BottomBox cta="Have an Account?" linkText="Log In" link={routes.login} />
            </AuthLayout>
        </Container>
    )
}