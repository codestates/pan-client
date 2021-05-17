import styled from "styled-components";
import Input from "../components/auth/Input";
import login_bg from "../images/login_bg.jpg";
import Button from "../components/auth/Button";
import PageTitle from "../components/PageTitle";
import AuthLayout from "../components/auth/AuthLayout";
import FormBox from "../components/auth/FormBox";

const Container = styled.div`
position: absolute;
background: url(${login_bg});
background-position: center;
background-size: cover;
top: 0;
left: 0;
width: 100%;
`;

function SignUp() {
    return (
        <Container>
            <AuthLayout>
                <PageTitle title="Sign Up" />
                <FormBox>
                    <form>
                        <Input name="username" type="text" placeholder="USERNAME" />
                        <Input name="email" type="text" placeholder="EMAIL" />
                        <Input name="password" type="password" placeholder="PASSWORD" />
                        <Input name="chkpassword" type="password" placeholder="CHECK PASSWORD" />
                    </form>
                </FormBox>
            </AuthLayout>
        </Container>
    )
}

export default SignUp;