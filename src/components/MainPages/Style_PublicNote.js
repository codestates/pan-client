import styled from "styled-components";

export const ListSection = styled.section`
    display: grid;
    max-width: 1600px;
    height: 460px;
    grid-gap: 10px;
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    margin-top: 10px;
    padding-top: 24px;
    padding-left: 1rem;
    width: 100%;
    overflow: hidden;
`;

export const ListItemBox = styled.div`
    width: 80%;
    height: 180px;
    box-shadow: #ced4da 0 1px 4px;
    background-color: none;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all 0.4s;
    border-radius: 8px;
    overflow: hidden;
    &:hover {
        -ms-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`;

export const ItemImg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    opacity: 0.8;
`;

export const ItemOverlay = styled.div`
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

export const ItemContent = styled.article`
    position: absolute;
    left: 15px;
    bottom: 15px;
    display: flex;
    flex-direction: column;
    font-family: 'Cafe24SsurroundAir';
    color: #fff;
    padding: 10px;

    h3 {
        color: #343a40;
        font-size: x-large;
        font-weight: 800;
        margin: 0 0 10px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-word;
        overflow: hidden;
        text-shadow: 2px 2px 0 #fff;
    }

    h4 {
        color: #343a40;
        font-size: 1rem;
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
        font-size: 1.3rem;
        font-weight: 700;
        margin: 0 0 10px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-;
        text-shadow: 2px 2px 0 #fff;
        overflow: hidden;
    }
`;