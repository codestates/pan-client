import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cardimg from "../../images/new_york.jpg"

function Top10() {
    return (
        <Wrapper>
            <HeadCard>
                <h2>
                    a
                    <br />
                    Popular
                    <br />
                    Diary
                </h2>
            </HeadCard>
            <CardList>
                <CardWrap>
                    <CardImg src={cardimg}/>
                    <Link>
                        <CardContent>
                            <h2>Title</h2>
                            <h2>Contents</h2>
                            <h2>Weather</h2>
                            <h2>Feeling</h2>
                            <h2>Date</h2>
                        </CardContent>
                        <CardOverlay />
                    </Link>
                </CardWrap>
            </CardList>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const HeadCard = styled.header`
    position: relative;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    flex: 0 0 280px;
    margin: 2rem 1rem 10px;
    /* background: linear-gradient(
        0deg,
        rgba(238, 174, 202, 1) 0%,
        rgba(148, 187, 233, 1) 100%
    ); */

    border-radius: 10px;
    padding: 2rem;
    height: 400px;
    /* box-shadow: #adb5bd 1px 1px 8px; */

    h2 {
        font-size: 2rem;
        color: rgb(61, 141, 171);
        margin: 0 0 1rem;
        font-weight: 700;
    }
`;

const CardList = styled.section`
    display: flex;
    justify-content: flex-start;
    padding-top: 2rem;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: #f2f3f5;
        border-radius: 10px;
    }
`;

const CardWrap = styled.article`
    height: 400px;
    width: 280px;
    min-width: 250px;
    background-color: none;
    box-shadow: #adb5bd -1px 1px 8px;
    display: flex;
    flex-direction: column;
    transition: all 0.5s;
    margin: 0 20px 0 0;
    scroll-snap-align: start;
    clear: both;
    position: relative;
    border-radius: 10px;

    &:focus-within ~ .card,
    &:hover ~ .card {
        transform: translateX(130px);
    }
    &:hover {
        transform: translateY(-1rem);
    }
    &:not(:first-child) {
        margin-left: -130px;
    }
`;

const CardImg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;

    &:hover {
        border-radius: 10px;
    }
`;
const CardOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #adb5bd;
    opacity: 0.7;
    left: 0;
    top: 0;
    z-index: 0;
    border: none;
    border-radius: 10px;

    &:hover {
        opacity: 0.3;
    }
`;
const CardContent = styled.section`
    position: absolute;
    left: 8px;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    font-family: "Noto Serif KR", serif;
    padding: 1rem;
    color: #343a40;

    h2 {
        color: inherit;
        opacity: 0.9;
        font-size: 2rem;
        font-weight: 700;
        text-shadow: 2px 2px 0 #fff;
        margin: 0;
        margin-bottom: 12px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-word;
        overflow: hidden;
        line-height: 2.6rem;
    }

    p {
        color: inherit;
        opacity: 0.9;
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
        margin-bottom: 12px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-word;
        overflow: hidden;
        text-shadow: 2px 2px 0 #fff;
    }
`;

export default Top10;