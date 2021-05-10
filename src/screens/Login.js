import { ImageBox } from "../components/ImageBox";
import Styled from "styled-components";
import kakao_button from "../images/kakao_button.png";
import naver_button from "../images/naver_button.png";
import google_button from "../images/google_button.png";
import login_bg from "../images/login_bg.png";
import { BlueFont, RedFont } from "../components/FontAction";
import { TextAlign } from "../components/Layout";

const Container = Styled.div`
    position: absolute;
    background: url(${login_bg});
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
`;


function Login() {
    return (
        <Container>
            <div>
                <TextAlign>
                    <BlueFont>LOGIN </BlueFont><RedFont> ACCOUNT</RedFont>
                </TextAlign>
                <ImageBox>
                    <div>
                        <img src={kakao_button} width="15%" height="10%" alt="kakao_button" />
                    </div>
                    <div>
                        <img src={naver_button} width="15%" height="10%" alt="naver_button" />
                    </div>
                    <div>
                        <img src={google_button} width="15.5%" height="10%" alt="google_button" />
                    </div>
                </ImageBox>
            </div>
        </Container>
    );
}

export default Login;