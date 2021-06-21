const CLIENT_ID = "64297550b73307c8aa6c8a038401053f";
const REDIRECT_URI =  "http://localhost:3000/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;