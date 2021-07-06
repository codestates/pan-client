import styled from 'styled-components';
import drawing from "../../images/drawing.jpg"
import Write from "../../images/write.jpg"
import { BaseModalBackground } from "styled-react-modal";

export const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props) => props.opacity};
    transition: all 0.3s ease-in-out;
`;

export const Announcement = styled.div`
    padding-top: 4.3%;
    text-align: center;
    font-family: 'Cafe24Ssurround';
    font-size: 50px;
    font-weight: 700;
    height: 20vh;
    max-width: 1600px;
    width: 80%;
    margin: 0 auto;
`;

export const TemplateMain = styled.section`
    display: flex;
    height: 70vh;
    max-width: 1600px;
    width: 80%;
    margin: 0 auto;
    font-family: 'Cafe24SsurroundAir';
`;

export const Writing = styled.div` 
    display: block;
    font-size: 45px;
    color: #1C1B1A;
    font-weight: 900;
    line-height: 520px;
    background-image: url(${Write});
    background-size: 102% 100%;
    width: 30%;
    height: 70%;
    margin: 5% 5% 5% 15%;
    cursor: pointer;
    text-align: center;
    border-radius: 10px;
    box-shadow: 10px 10px 10px gray ;
    z-index: 1;
    position: relative;
    text-shadow: 2px 2px 0 #E3DFD4;
    &:after{
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 20px;
        background: rgba(100, 100, 100, 0.4);
    }
    :hover {
        transform: scale(1.05);
        filter: brightness(1.4);
    }
`;

export const Drawing = styled.div`
    display: block;
    font-size: 45px;
    color: #1C1B1A;
    font-weight: 900;
    line-height: 520px;
    background-image: url(${drawing});
    background-size: 100% 100%;
    width: 30%;
    height: 70%;
    margin: 5% 15% 5% 5%;
    cursor: pointer;
    text-align: center;
    border-radius: 10px;
    box-shadow: 10px 10px 10px gray ;
    z-index: 1;
    position: relative;
    text-shadow: 2px 2px 0 #E3DFD4;
    &:after{
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 20px;
        background: rgba(100, 100, 100, 0.4);
    }
    :hover {
        transform: scale(1.05);
        filter: brightness(1.4);
    }
`;
