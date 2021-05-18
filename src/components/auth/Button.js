import styled from "styled-components";

const Button = styled.input`
    border: none;
    margin-top: 12px;
    background-color:  #005c99;
    /* background-color: ${props => props.theme.accent}; */
    /* border: 1px solid; */
    border-radius: 10px;
    cursor: pointer;
    color: #ffffff;
    text-align: center;
    padding: 8px 0px;
    font-weight: 600;
    width: 80%;
    /* opacity: ${(props) => props.disabled ? "0.2" : "1"} */
    &:hover {
        transform: none;
        color: gold;
    }
`;

export default Button;