import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
        all:unset;
    }
    * {
        box-sizing:border-box;
    }
    body {
        font-size: 14px;
        font-family: 'Noto Sans KR', sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;