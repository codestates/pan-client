import styled from 'styled-components';

export const MainBody = styled.div`
    /* border: 2px solid black; */
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 1600px;
    width: 100%;
    height: 100%;
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`;

export const PhraseGroup = styled.div`
    position: relative;
    width: 100%;
    margin: 40px 0;
    /* border : 1px solid black; */
    max-width: 1600px;
`;

export const Phrase = styled.div`
    display: block;
    padding-left: 2rem;
    margin-bottom: 15px;
    font-size: 2rem;
    font-family: 'Cafe24SsurroundAir';
    color: #E3DFD4;
    animation: fadein 3s;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Div1 = styled.div`
    /* border: 1px solid red; */
    height: 40vh;
    margin-top: 40px;
`;

export const Div2 = styled.div`
    height: 60vh;
    margin: 40px 0;
    /* overflow: hidden; */
`;

export const Div3 = styled.div`
    display: flex;
`;

export const MainFooter = styled.footer`
    margin-top: 10vh;
    height: 5vh;
    width: 100%;
`;

export const MainLabel = styled.h3`
    font-size: 30px;
    font-family: 'Cafe24SsurroundAir';
    font-weight: bolder;
    letter-spacing: -4px;
    word-spacing: 5px;
    margin: 0 2rem 1.8rem;
    padding-bottom: 8px;
    width: fit-content;
    border-bottom: ${props => props.choose ? "3px solid black" : "none" };
    cursor: pointer;
    opacity: ${props => props.choose ? "1.0" : "0.5"};
`;

export const CautionEx = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    font-family: 'Cafe24SsurroundAir';
    font-size: 50px;
`;