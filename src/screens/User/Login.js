import axios from "axios";
import routes from "../../routes";
import styled from "styled-components";
import Input from "../../components/auth/Input";
import login_bg from "../../images/login_bg.jpg";
import Button from "../../components/auth/Button";
import PageTitle from "../../components/PageTitle";
import FormBox from "../../components/auth/FormBox";
import BottomBox from "../../components/auth/BottomBox";
import Separator from "../../components/auth/Separator";
import kakao_button from "../../images/kakao_button.png";
import AuthLayout from "../../components/auth/AuthLayout";
import google_button from "../../images/google_button.png";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ImageBox, SocialBtn } from "../../components/auth/ImageBox";
import { TextAlign, BlueGreen, CedarChest } from "../../components/auth/FontLayout";
import { KAKAO_AUTH_URL1 } from './Oauth'
import { KAKAO_AUTH_URL2 } from './Oauth'

const Container = styled.div`
    position: absolute;
    background: url(${login_bg});
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
`;

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const HandleEmail = (e) => {
        setEmail(e.target.value);
    }
    const HandlePassword = (e) => {
        setPassword(e.target.value);
    }
    
    const HandleSubmit = async (e) => {
        e.preventDefault();
        await axios({
            method: 'post',
            url: 'https://api.picanote.me/login',
            data: {
                email,
                password,
            },
            withCredentials: true,
        })
        .then((res) => {
            if (res.data.data.accessToken) {
                let tokenData = res.data.data.accessToken;
                localStorage.setItem('CC_Token', tokenData);
                history.push('/')
            }
        })
        .catch((err) => {
            alert('????????? ??????????????? ?????? ??????????????????');
            console.error(err);
        });
    };

    // kakao login
    const kakaoLoginHandler = () => {
        window.location.assign(KAKAO_AUTH_URL1)
    }

    return (
        <Container>
            <AuthLayout>
                {/* ?????? ?????? ?????? ????????? ????????? */}
                <PageTitle title="Log In" />
                <FormBox>
                    <TextAlign>
                        <BlueGreen>LOGIN </BlueGreen><CedarChest> ACCOUNT</CedarChest>
                    </TextAlign>
                    <form>
                        <Input name="email" type="text" placeholder="EMAIL" onChange={HandleEmail}/>
                        <Input name="password" type="password" placeholder="PASSWORD" onChange={HandlePassword}/>
                        <Button type="submit" value="LOG IN" onClick={HandleSubmit} style={{marginBottom: "15px"}}/>
                        <BottomBox linkText="??????????????????" link={routes.findPwd}/>
                    </form>
                    <Separator />
                    {/* ??? ?????? ????????? ??? ?????????, ??? ?????? ????????? ??? ?????? ????????? */}
                    <ImageBox>
                        <SocialBtn onClick={kakaoLoginHandler}><img src={kakao_button} width="55%" alt="kakao"/></SocialBtn>
                        <SocialBtn><img src={google_button} width="55%" alt="google" /></SocialBtn>
                    </ImageBox>
                </FormBox>
                <BottomBox cta="Don't You want to Log In?" linkText="Main" link={routes.main} />
                <BottomBox cta="Don't have an account?" linkText="Sign Up" link={routes.signUp} />
            </AuthLayout>
        </Container>
    );
}
