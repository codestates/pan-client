import styled from "styled-components";

const SSeparator = styled.div`
    margin: 20px 0px 20px 0px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    width: 80%;
    align-items: center;
`;

const Div1 = styled.div`
    width: 100%;
    height: 2px;
    background-color: rgb(216, 89, 65);
`
const Span = styled.span`
    margin: 0px 10px;
    font-weight: 600;
    font-size: 12px;
    color: #8e8e8e;
`;

const Div2 = styled.div`
    width: 100%;
    height: 2px;
    background-color: rgb(61, 141, 171);
`

function Separator() {
    return (
        <SSeparator>
            <Div1></Div1>
            <Span>OR</Span>
            <Div2></Div2>
        </SSeparator>
    )
}

export default Separator;