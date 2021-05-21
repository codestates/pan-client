import styled from "styled-components";

export const Span = styled.span`
    display: block;
    width: 25px;
    height: 2px;
    background-color: #ffffff;
    transition: all 0.3s ease-in-out;
    & + & {
        margin-top: 4px;
    }
`;

export const SpanWrapper = styled.div`
    opacity: 1;
`;

export const Paragraph = styled.p`
    z-index: 5;
    visibility: hidden;
    position: absolute;
    text-align: center;
    width: 80px;
    top: 18px;
    right: 115%;
    font-size: 12px;
    border-radius: 5px;
    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.48);
    font-weight: bold;
    background-color: #274040;
    color: #FFF9E9;
`;

export const Hamburger = styled.div`
    z-index: 6;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: calc(100% - 98.5%);
    bottom: 8%;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.48);
    background-color: #C57951;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`;

export const Navigation = styled.div`
    z-index: 5;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    visibility: none;
    right: calc(100% - 98%);
    bottom: 9%;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.48);
    background-color: #FFF9E9;
    color: #3D8DAB;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover {
        font-size: 28px !important;
        background-color: wheat;
        box-shadow: 7px 7px 10px 0px rgba(0, 0, 0, 0.48);
        transition: all 0.25s ease-in-out;
    }
    &:hover ${Paragraph} {
        visibility: visible;
    }
`;


export const Switch = styled.div`
    > input {
        display: none;
    }
    > input:checked + label #hamburger {
        box-shadow: 7px 7px 10px 0px rgba(0, 0, 0, 0.48);
    }
    > input:checked + label ${SpanWrapper} {
        transition: transform 0.4s ease-in-out;
        transform: rotateZ(90deg);
    }
    > input:checked + label Span:nth-child(1) {
        transform: translateY(6px) rotateZ(45deg) scaleX(0.9);
    }
    > input:checked + label Span:nth-child(2) {
        opacity: 0;
    }
    > input:checked + label Span:nth-child(3) {
        transform: translateY(-6px) rotateZ(-45deg) scaleX(0.9);
    }
    > input:checked + label ${Navigation} {
        visibility: visible;
        opacity: 1;
    }
    > input:checked + label #mypage {
        transform: translateY(-125%);
        font-size: 25px;
    }
    > input:checked + label #groupadd {
        transform: translateY(-250%);
        font-size: 25px;
    }
    > input:checked + label #privateadd {
        transform: translateY(-375%);
        font-size: 25px;
    }
`;
