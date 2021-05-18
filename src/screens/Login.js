import styled from "styled-components";
import Input from "../components/auth/Input";
import login_bg from "../images/login_bg.jpg";
import Button from "../components/auth/Button";
import PageTitle from "../components/PageTitle";
import FormBox from "../components/auth/FormBox";
import Separator from "../components/auth/Separator";
import kakao_button from "../images/kakao_button.png";
import AuthLayout from "../components/auth/AuthLayout";
import google_button from "../images/google_button.png";
import { TextAlign, BlueFont, RedFont } from "../components/auth/FontLayout";
import BottomBox from "../components/auth/BottomBox";
import routes from "../routes";
import { ImageBox, SocialBtn } from "../components/auth/ImageBox";

const Container = styled.div`
    position: absolute;
    background: url(${login_bg});
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
`;


function Login() {
    return (
        <Container>
            <AuthLayout>
                {/* 화면 상단 탭에 보이는 디자인 */}
                <PageTitle title="Log In" />
                    <FormBox>
                        <TextAlign>
                            <BlueFont>LOGIN </BlueFont><RedFont> ACCOUNT</RedFont>
                        </TextAlign>
                        <form>
                            <Input name="email" type="text" placeholder="EMAIL" />
                            <Input name="password" type="password" placeholder="PASSWORD" />
                            <Button type="submit" value="LOG IN" />
                        </form>
                        <Separator />
                        {/* 이 부분 고민이 좀 필요함, 한 줄로 띄울지 두 줄로 띄울지 */}
                        <ImageBox>
                            <SocialBtn><img src={kakao_button} width="70%" alt="kakao"/></SocialBtn>
                            <SocialBtn><img src={google_button} width="70%" alt="google" /></SocialBtn>
                        </ImageBox>
                    </FormBox>
                    <BottomBox cta="Don't You want to Log In?" linkText="Home" link={routes.main} />
                    <BottomBox cta="Don't have an account?" linkText="Sign Up" link={routes.signUp} />
            </AuthLayout>
        </Container>
    );
}

export default Login;