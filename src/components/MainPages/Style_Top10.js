import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1600px;
    height: 100%;
    width: 100%;
    /* border: 1px solid black */
`;

export const HeadCard = styled.header`
    /* border: 1px solid red; */
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
`;

export const HeaderText = styled.div`
    font-size: 40px;
    color: #BB2B2A;
    margin: 0 0 2rem;
    font-family: 'Cafe24Ssurround';
    font-weight: 900;
    animation: zoom 2s;
    @keyframes zoom {
        from {
        transform: scale(0);
        }
        to {
        transform: scale (1);
        }
    }
`;

export const CardList = styled.section`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(5, minmax(250px, 1fr));
    padding-top: 2rem;
    /* padding-left: 2rem; */
    overflow-x: hidden;
    /* border: 1px solid black; */
    height: 40vh;
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: #f2f3f5;
        border-radius: 10px;
    }
`;

export const CardWrap = styled.article`
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

export const CardImg = styled.img`
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

export const CardOverlay = styled.div`
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

export const CardContent = styled.article`
    position: absolute;
    left: 8px;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    font-family: 'Cafe24SsurroundAir';
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