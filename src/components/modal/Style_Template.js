import styled from 'styled-components';
import drawing from "../../images/drawing.jpg"
import Write from "../../images/write.jpg"
import { BaseModalBackground } from "styled-react-modal";

export const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props) => props.opacity};
    transition: all 0.3s ease-in-out;
`;

export const Announcement = styled.div`
    /* position: relative; */
    padding-top: 4.3%;
    /* border:1px solid blue; */
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
    /* border: 1px solid black; */
    height: 70vh;
    max-width: 1600px;
    width: 80%;
    margin: 0 auto;
    font-family: 'Cafe24SsurroundAir';
`;

export const Writing = styled.div` 
    display: block;
    font-size: 50px;
    color: #3D8DAB;
    font-weight: 800;
    line-height: 520px;
    background-image: url(${Write});
    background-size: 102% 100%;
    width: 30%;
    height: 70%;
    margin: 5% 5% 5% 15%;
    cursor: pointer;
    text-align: center;
    opacity: 0.5;
    border-radius: 10px;
    box-shadow: 10px 10px 10px gray ;
    :hover {
        opacity: 1;
        transform: scale(1.05);
    }
`;

export const Drawing = styled.div`
    display: block;
    font-size: 50px;
    color: #D85941;
    font-weight: 800;
    line-height: 520px;
    background-image: url(${drawing});
    background-size: 100% 100%;
    width: 30%;
    height: 70%;
    margin: 5% 15% 5% 5%;
    cursor: pointer;
    text-align: center;
    opacity: 0.5;
    border-radius: 10px;
    box-shadow: 10px 10px 10px gray ;
    :hover {
        opacity: 1;
        transform: scale(1.05);
    }
`;
