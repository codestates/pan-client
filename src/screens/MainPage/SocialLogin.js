import axios from "axios";
import { useHistory } from "react-router-dom";

export const KakaoLogin = () => {

    const JS_KEY = "1365e7c324a3fc0d82f2eff53605375f";
    const REST_API_KEY = "64297550b73307c8aa6c8a038401053f";
    const REDIRECT_URI =  "http://localhost:3000/kakao";

    const history = useHistory();

    window.Kakao.Auth.login({
        success: (response) => {
            axios
                .get(`http://localhost:3000/kakao`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: response.access_token,
                    },
                })
                .then((res) => {
                    localStorage.setItem("token", res.data.token);
                    alert("로그인 되었습니다");
                    history.push("/")
                });
        },
        fail: (error) => {
            alert(JSON.stringify(error));
        },
    });
};

