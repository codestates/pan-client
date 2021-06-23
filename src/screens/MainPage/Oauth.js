const CLIENT_ID = "64297550b73307c8aa6c8a038401053f";
const REDIRECT_URI1 =  "http://localhost:3000/kakao";
const REDIRECT_URI2 =  "https://picanote.me/kakao";

export const KAKAO_AUTH_URL1 = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI1}&response_type=code`;
export const KAKAO_AUTH_URL2 = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI2}&response_type=code`;
