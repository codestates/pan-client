import styled from "styled-components";

const SSeparator = styled.div`
    margin: 20px 0px 20px 0px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    width: 80%;
    align-items: center;
    div1 {
        width: 100%;
        height: 1px;
        background-color: rgb(216, 89, 65);
    }
    span {
        margin: 0px 10px;
        font-weight: 600;
        font-size: 12px;
        color: #8e8e8e;
    }
    div2 {
        width: 100%;
        height: 1px;
        background-color: rgb(61, 141, 171);
    }
`;

function Separator() {
    return (
        <SSeparator>
            <div1></div1>
            <span>OR</span>
            <div2></div2>
        </SSeparator>
    )
}

export default Separator;