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



export default function FindPwd(props) {

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const onEmailHandler = (e) => { setEmail(e.target.value); }

    const handleFindPwd = () => {
        if (!email) {
            return setErrorMessage('이메일을 입력해 주세요');
        } else {
            axios
                .post(
                    'https://api.picanote.me/findPwd',
                    {
                        email,
                    },
                )
                .then((res) => setErrorMessage(res.data.message))
                .then( ()=>{ alert("비밀번호 초기화 메일이 발송되었습니다.")})
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
                        <Input name="email" type="text" placeholder="이메일을 입력해주세요." value={email} onChange={onEmailHandler} />
                        <Button type="submit" value="Find Password" onClick={handleFindPwd} />
                    </form>
                    {
                        errorMessage ? (
                            <span className="errorMsg">{errorMessage}</span>
                        ) : (
                            <span className="errorMsg" />
                        )
                    }
                </FormBox>
                <BottomBox cta="Bak to main" linkText="Main" link={routes.main} />

            </AuthLayout>
        </Container>
    )
}