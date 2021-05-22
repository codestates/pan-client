import React from "react";
import axios from "axios";
import routes from "../routes";
import styled from "styled-components";
import validate from '../components/utility/Validate';
import Input from "../components/auth/Input";
import login_bg from "../images/login_bg.jpg";
import Button from "../components/auth/Button";
import PageTitle from "../components/PageTitle";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import AuthLayout from "../components/auth/AuthLayout";
import { FatLink } from "../components/shared";
import { BlueGreen, CedarChest, TextAlign } from "../components/auth/FontLayout";


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


function SignUp(props) {

    const [values, setValues] = React.useState({
        username: '',
        isUserNameValid: false,
        email: '',
        isEmailValid: false,
        password: '',
        isPasswordValid: false,
        passwordCorrect: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const errors = validate({ [name]: value});
        setValues({ ...values, ...errors, [name]: value });
    }

    // validate 함수로 입력값을 실시간으로 검사하여 조건에 맞지않으면 해당 state를 거짓으로 변경
    const isAllVaild = () => {
        const { isEmailVaild, isNickNameVaild, isPasswordVaild, password, passwordCorrect } = values;
        return isEmailVaild && isNickNameVaild && isPasswordVaild && password === passwordCorrect;
    };

    //입력된 모든 값이 true인지 확인 후 true or false로 반환
    const handleSubmit = async (event) => {
        event.preventDefault();

        const { username, email, password } = values;
        await axios ({
            method: 'post',
            url: 'http://54.180.142.24:8080/signup',
            data: {
                username,
                email,
                password
            },
        })
        .then ((res) => {
            alert('회원가입이 완료되었습니다.')
        })
        .catch((err) => {
            alert('이미 가입된 이메일입니다.');
            console.error(err);
        })
    }

    return (
        <Container>
            <AuthLayout>
                <PageTitle title="Sign Up" />
                <FormBox>
                    <TextAlign>
                        <BlueGreen>SIGN UP </BlueGreen><CedarChest> ACCOUNT</CedarChest>
                    </TextAlign>
                    <form onSubmit={handleSubmit}>
                        <Input name="email" type="text" placeholder="이메일을 입력해주세요." onChange={handleChange} error={!values.isEmailValid && values.email !== ''} helperText={!values.isEmailValid && values.email !== '' && '올바른 이메일을 입력하세요'} value={values.email} />
                        <Input name="username" type="text" placeholder="닉네임을 입력해주세요." onChange={handleChange} error={!values.isUserNameValid && values.username !== ''} helperText={!values.isUserNameValid && values.username !== '' && '2글자 이상 입력하세요'} value={values.username} />
                        <Input name="password" type="password" placeholder="비밀번호를 입력해주세요." onChange={handleChange} error={!values.isPasswordValid && values.password !== ''} helperText={!values.isPasswordValid && values.password !== '' && '대소문자와 특수문자를 포함한 8글자 이상 입력하세요'} value={values.password} />
                        <Input name="passwordCorrect" type="password" placeholder="다시 한번 입력해주세요." error={!(values.password === values.passwordCorrect) && values.passwordCorrect !== ''} helperText={!(values.password === values.passwordCorrect) && values.passwordCorrect !== '' && '동일한 비밀번호를 입력하세요'} value={values.passwordCorrect} />
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
                <BottomBox cta="Don't You want to Log In?" linkText="Main" link={routes.main} />
                <BottomBox cta="Have an Account?" linkText="Log In" link={routes.login} />
            </AuthLayout>
        </Container>
    )
}

export default SignUp;