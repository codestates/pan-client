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
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ImageBox, SocialBtn } from "../../components/auth/ImageBox";
import { TextAlign, BlueGreen, CedarChest } from "../../components/auth/FontLayout";
import { KAKAO_AUTH_URL1 } from './Oauth'
import { KAKAO_AUTH_URL2 } from './Oauth'
import KaKaoLogin from 'react-kakao-login'

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
    const [data, setData] = useState('')

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
            alert('아이디 비밀번호를 다시 확인해주세요');
            console.error(err);
        });
    };

    const responseKaKao = (res) => {
        window.Kakao.Auth.login({
            success: authObj => {
              console.log(authObj)
              axios('https://api.picanote.me/kakao', {
                method: 'POST',
                headers: {
                  Authorization: authObj.access_token,
                },
            })
            .then(res=> console.log(res))
            }
        })

    };

    const kakaoApi = 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=64297550b73307c8aa6c8a038401053f&redirect_uri=https://picanote.me/kakao'
    const kakaoLoginHandler = () => {
        window.location.assign(KAKAO_AUTH_URL1)


    }

    useEffect(async () => {
        const getAccessToken = async authorizationCode => {
            let tokenData = await axios
            .post('https://api.picanote.me/kakao', {
                authorizationCode,
            })
            .then(res => {
                console.log(res.data);
                let accessToken = res.data.accessToken
                // let refreshToken = res.headers['refresh-token']
                localStorage.setItem('CC_Token', accessToken)
                // localStorage.setItem('RF_Token', refreshToken)
                history.push("/")
            })
        }
        const url = new URL(window.location.href)
        const authorizationCode = url.searchParams.get('code')
        // console.log('인증 코드', authorizationCode);
        if (authorizationCode) {
            await getAccessToken(authorizationCode)
        }
    }, [])

    return (
        <Container>
            <AuthLayout>
                {/* 화면 상단 탭에 보이는 디자인 */}
                <PageTitle title="Log In" />
                <FormBox>
                    <TextAlign>
                        <BlueGreen>LOGIN </BlueGreen><CedarChest> ACCOUNT</CedarChest>
                    </TextAlign>
                    <form>
                        <Input name="email" type="text" placeholder="EMAIL" onChange={HandleEmail}/>
                        <Input name="password" type="password" placeholder="PASSWORD" onChange={HandlePassword}/>
                        <Button type="submit" value="LOG IN" onClick={HandleSubmit} style={{marginBottom: "15px"}}/>
                        <BottomBox linkText="비밀번호찾기" link={routes.findPwd}/>
                    </form>
                    <Separator />
                    {/* 이 부분 고민이 좀 필요함, 한 줄로 띄울지 두 줄로 띄울지 */}
                    <ImageBox>
                        
                        <SocialBtn onClick={kakaoLoginHandler}><img src={kakao_button} width="55%" alt="kakao"/></SocialBtn>
                        {/* <KaKaoBtn
                            token={'1365e7c324a3fc0d82f2eff53605375f'}
                            buttonText="KaKao"
                            // 여기에 console.log찍으면 정보가 나옴
                            onSuccess={res => console.log(res)}
                            onFailure={console.log('실패')}
                            // getProfile해야 정보를 볼 수 있음
                            getProfile={true}
                        /> */}
                        <SocialBtn><img src={google_button} width="55%" alt="google" /></SocialBtn>
                    </ImageBox>
                </FormBox>
                <BottomBox cta="Don't You want to Log In?" linkText="Main" link={routes.main} />
                <BottomBox cta="Don't have an account?" linkText="Sign Up" link={routes.signUp} />
            </AuthLayout>
        </Container>
    );
}
