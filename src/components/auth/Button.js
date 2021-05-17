import styled from "styled-components";

const Button = styled.input`
    border: none;
    margin-top: 12px;
    background-color: ${props => props.theme.accent};
    border: 1px solid;
    color: black;
    text-align: center;
    padding: 8px 0px;
    font-weight: 600;
    width: 80%;
    /* opacity: ${(props) => props.disabled ? "0.2" : "1"} */
`;

export default Button;