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


export default function FindPwd(props) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const onUsernameHandler = (e) => { setUsername(e.target.value); }
    const onEmailHandler = (e) => { setEmail(e.target.value); }

    const handleFindPwd = () => {
        if (!username || !email) {
            return setErrorMessage('사용자 이름과 이메일을 입력해 주세요');
        } else {
            axios
                .post(
                    'https://api.picanote.me/findPwd',
                    {
                        username,
                        email,
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
                        
                        <Input name="username" type="text" placeholder="닉네임을 입력해주세요." value={username} onChange={onUsernameHandler}  />
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
                    {/* 이 subtitle 글귀 맘에 안들면 그냥 빼버려도 됨 */}

                </FormBox>
                <BottomBox cta="Bak to main" linkText="Main" link={routes.main} />

            </AuthLayout>
        </Container>
    )
}