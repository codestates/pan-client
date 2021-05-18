import routes from "../routes";
import styled from "styled-components";
import Input from "../components/auth/Input";
import login_bg from "../images/login_bg.jpg";
import Button from "../components/auth/Button";
import PageTitle from "../components/PageTitle";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import AuthLayout from "../components/auth/AuthLayout";
import { FatLink } from "../components/shared";
import { BlueFont, RedFont, TextAlign } from "../components/auth/FontLayout";


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


function SignUp() {
    return (
        <Container>
            <AuthLayout>
                <PageTitle title="Sign Up" />
                <FormBox>
                    <TextAlign>
                        <BlueFont>SIGN UP </BlueFont><RedFont> ACCOUNT</RedFont>
                    </TextAlign>
                    <form>
                        <Input name="username" type="text" placeholder="닉네임을 입력해주세요." />
                        <Input name="email" type="text" placeholder="이메일을 입력해주세요." />
                        <Input name="password" type="password" placeholder="비밀번호를 입력해주세요." />
                        <Input name="chkpassword" type="password" placeholder="다시 한번 입력해주세요." />
                        <Button type="submit" value="SIGN UP" />
                    </form>
                    {/* 이 subtitle 글귀 맘에 안들면 그냥 빼버려도 됨 */}
                    <Subtitle>
                        <div>&nbsp;</div>
                        <div>가입을 진행하시게 되면 약관 및</div>
                        <div>&nbsp;</div>
                        <div>데이터 정책, 쿠키 정책에 동의하게 됩니다</div>
                    </Subtitle>
                </FormBox>
                <BottomBox cta="Have an Account?" linkText="Log In" link={routes.login} />
            </AuthLayout>
        </Container>
    )
}

export default SignUp;