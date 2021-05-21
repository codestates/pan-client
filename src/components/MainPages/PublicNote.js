import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import dubai from "../../images/dubai.jpg";

function PublicNote() {
    return (
        <ListSection>
            <ListItemBox>
                <ItemImg src={dubai}/>
                <Link>
                    <ItemContent>
                        <h3>Title</h3>
                        <h3>Contents</h3>
                        <h3>Weather</h3>
                        <h3>Feeling</h3>
                        <h3>Date</h3>
                    </ItemContent>
                    <ItemOverlay />
                </Link>
            </ListItemBox>
        </ListSection>
    )
}

export default PublicNote;

const ListSection = styled.section`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    margin-top: 1rem;
    margin-left: 1rem;
`;
const ListItemBox = styled.div`
    width: 100%;
    height: 400px;
    box-shadow: #ced4da 0 1px 4px;
    background-color: none;
    position: relative;

    display: flex;
    flex-direction: column;
    transition: all 0.4s;
    border-radius: 8px;

    &:hover {
        -ms-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`;

const ItemImg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
`;

const ItemOverlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #868e96;
    opacity: 0.3;
    border: none;
    border-radius: 8px;

    &:hover {
        opacity: 0;
    }
`;

const ItemContent = styled.article`
    position: absolute;
    left: 15px;
    bottom: 15px;
    display: flex;
    flex-direction: column;
    font-family: "Noto Serif KR", serif;
    color: #fff;
    padding: 10px;

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
        color: #343a40;
        font-size: 1rem;
        font-weight: 400;
        margin: 0 0 10px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-;
        text-shadow: 2px 2px 0 #fff;
    }
`;