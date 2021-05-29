import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import dubai from "../../images/dubai.jpg";
import newyork from "../../images/new_york.jpg";
import toronto from "../../images/toronto.jpg";
import seoul from "../../images/seoul.jpg";
import beijing from "../../images/beijing.jpg";
import Zoom from 'react-reveal/Zoom';
import routes from "../../routes";

function Top10() {
    return (
        <Wrapper>
            <HeadCard>
                <Zoom delay={2000}>
                    <h2>
                        a
                        <br />
                        Popular
                        <br />
                        Diary
                    </h2>
                </Zoom>
            </HeadCard>
            <CardList>
                <CardWrap>
                    <CardImg src={dubai}/>
                    <Link to={routes.main}>
                        <CardContent>
                            <h2>Title</h2>
                            <h2>Contents</h2>
                            <h3>Weather</h3>
                            <h3>Feeling</h3>
                            <h3>Date</h3>
                        </CardContent>
                        <CardOverlay />
                    </Link>
                </CardWrap>
                <CardWrap>
                    <CardImg src={newyork}/>
                    <Link to={routes.main}>
                        <CardContent>
                            <h2>Title</h2>
                            <h2>Contents</h2>
                            <h3>Weather</h3>
                            <h3>Feeling</h3>
                            <h3>Date</h3>
                        </CardContent>
                        <CardOverlay />
                    </Link>
                </CardWrap>
                <CardWrap>
                    <CardImg src={toronto}/>
                    <Link to={routes.main}>
                        <CardContent>
                            <h2>Title</h2>
                            <h2>Contents</h2>
                            <h3>Weather</h3>
                            <h3>Feeling</h3>
                            <h3>Date</h3>
                        </CardContent>
                        <CardOverlay />
                    </Link>
                </CardWrap>
                <CardWrap>
                    <CardImg src={seoul}/>
                    <Link to={routes.main}>
                        <CardContent>
                            <h2>Title</h2>
                            <h2>Contents</h2>
                            <h3>Weather</h3>
                            <h3>Feeling</h3>
                            <h3>Date</h3>
                        </CardContent>
                        <CardOverlay />
                    </Link>
                </CardWrap>
                <CardWrap>
                    <CardImg src={beijing}/>
                    <Link to={routes.main}>
                        <CardContent>
                            <h2>Title</h2>
                            <h2>Contents</h2>
                            <h3>Weather</h3>
                            <h3>Feeling</h3>
                            <h3>Date</h3>
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
    justify-content: center;
    align-items: center;
    max-width: 1675px;
    height: 100%;
    /* border: 1px solid black */
`;

const HeadCard = styled.header`
    position: relative;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    flex: 0 0 280px;
    margin: 1rem 1rem 10px;
    border-radius: 10px;
    padding: 2rem;
    height: 16vh;
    text-shadow: 4px 4px 4px lightgray;
    h2 {
        font-size: 40px;
        color: #BB2B2A;
        margin: 0 0 2rem;
        font-weight: 900;
    }
`;

const CardList = styled.section`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    padding-top: 2rem;
    padding-left: 2rem;
    overflow-x: scroll;
    /* border: 1px solid black; */
    height: 100%;
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
    /* border:1px solid blue; */
    width: 90%;
    height: 100%;
    box-shadow: #ced4da 0 1px 4px;

    background-color: none;
    position: relative;

    display: flex;
    flex-direction: column;
    transition: all 0.4s;
    border-radius: 8px;

    &:focus-within ~ .card,
    &:hover ~ .card {
        transform: translateX(200px);
    }
    &:hover {
        transform: translateY(-1rem);
    }
`;

const CardImg = styled.img`
    position: relative;
    /* width: 100%;
    height: 100%; */
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;

    &:hover {
        border-radius: 10px;
    }
`;
const CardOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #adb5bd;
    opacity: 0.5;
    left: 0;
    top: 0;
    z-index: 0;
    border: none;
    border-radius: 10px;

    &:hover {
        opacity: 0.3;
    }
`;
const CardContent = styled.article`
    position: absolute;
    left: 8px;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    font-family: 'MapoGoldenPier';
    padding: 10px;
    color: #343a40;

    h2 {
        color: inherit;
        opacity: 0.9;
        font-size: 2rem;
        font-weight: 700px;
        text-shadow: 2px 2px 0 #fff;
        margin: 0 0 12px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-word;
        overflow: hidden;
        line-height: 2.6rem;
    }

    h3 {
        color: #343a40;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 0 10px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-word;
        overflow: hidden;
        text-shadow: 2px 2px 0 #fff;
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